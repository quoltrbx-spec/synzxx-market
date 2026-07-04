const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const JWT_SECRET = 'my-secret-key-2024';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================================
// JSON ХРАНИЛИЩЕ
// ========================================
const DATA_DIR = path.join(__dirname, '..', '..', 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

function loadData(filename) {
    const filePath = path.join(DATA_DIR, filename);
    if (fs.existsSync(filePath)) {
        try {
            return JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } catch (e) {
            return null;
        }
    }
    return null;
}

function saveData(filename, data) {
    const filePath = path.join(DATA_DIR, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// ========================================
// ЗАГРУЗКА ДАННЫХ
// ========================================
let users = loadData('users.json') || [];
let ads = loadData('ads.json') || [];
let complaints = loadData('complaints.json') || [];
let messages = loadData('messages.json') || [];
let pendingAds = loadData('pendingAds.json') || [];
let orders = loadData('orders.json') || [];
let chats = loadData('chats.json') || [];
let reviews = loadData('reviews.json') || [];

let nextAdId = loadData('counters.json')?.nextAdId || 1;
let nextMessageId = loadData('counters.json')?.nextMessageId || 1;
let nextOrderId = loadData('counters.json')?.nextOrderId || 1;
let nextChatId = loadData('counters.json')?.nextChatId || 1;
let nextUserId = loadData('counters.json')?.nextUserId || 1;
let nextReviewId = loadData('counters.json')?.nextReviewId || 1;

function saveAllData() {
    saveData('users.json', users);
    saveData('ads.json', ads);
    saveData('complaints.json', complaints);
    saveData('messages.json', messages);
    saveData('pendingAds.json', pendingAds);
    saveData('orders.json', orders);
    saveData('chats.json', chats);
    saveData('reviews.json', reviews);
    saveData('counters.json', {
        nextAdId, nextMessageId, nextOrderId, nextChatId, nextUserId, nextReviewId
    });
}

// ===== ТЕСТОВЫЕ ПОЛЬЗОВАТЕЛИ =====
async function createTestUsers() {
    if (users.length === 0) {
        const testUsers = [
            { username: 'notsynzxx', password: 'toto2023555', name: 'ns', is_admin: 1, prefix: 'Administrator', balance: 1000 },
            { username: 'risha', password: 'risha2804account', name: 'mln', is_admin: 1, prefix: 'Support', balance: 500 }
        ];
        for (const u of testUsers) {
            const hashedPassword = await bcrypt.hash(u.password, 10);
            users.push({
                id: nextUserId++,
                username: u.username,
                password: hashedPassword,
                name: u.name,
                is_admin: u.is_admin,
                prefix: u.prefix,
                avatar: null,
                warnings: 0,
                balance: u.balance || 0
            });
        }
        saveAllData();
    }
}

// ========================================
// АУТЕНТИФИКАЦИЯ
// ========================================
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Требуется авторизация' });
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Недействительный токен' });
        }
        req.user = user;
        const fullUser = users.find(u => u.id === user.id);
        req.userData = fullUser;
        next();
    });
}

function isAdmin(req, res, next) {
    const user = users.find(u => u.id === req.user.id);
    if (!user || !user.is_admin) {
        return res.status(403).json({ error: 'Доступ запрещён' });
    }
    req.userData = user;
    next();
}

// ========================================
// API - АВТОРИЗАЦИЯ
// ========================================

app.post('/api/register', async (req, res) => {
    try {
        const { username, password, password2, name, email } = req.body;
        if (!username || !password || !password2) {
            return res.status(400).json({ error: 'Заполните все поля!' });
        }
        if (password !== password2) {
            return res.status(400).json({ error: 'Пароли не совпадают!' });
        }
        if (password.length < 4) {
            return res.status(400).json({ error: 'Пароль минимум 4 символа!' });
        }
        if (users.find(u => u.username === username)) {
            return res.status(400).json({ error: 'Пользователь уже существует!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            id: nextUserId++,
            username,
            password: hashedPassword,
            name: name || username,
            email: email || '',
            is_admin: 0,
            prefix: null,
            avatar: null,
            warnings: 0,
            balance: 0
        };
        users.push(newUser);
        saveAllData();

        const token = jwt.sign({ id: newUser.id, username: newUser.username }, JWT_SECRET, { expiresIn: '30d' });
        res.status(201).json({
            token,
            user: { ...newUser, password: undefined }
        });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: 'Введите логин и пароль!' });
        }

        const user = users.find(u => u.username === username);
        if (!user) {
            return res.status(400).json({ error: 'Неверный логин или пароль!' });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({ error: 'Неверный логин или пароль!' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '30d' });
        res.json({
            token,
            user: { ...user, password: undefined }
        });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.get('/api/me', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id);
    if (!user) return res.status(404).json({ error: 'Пользователь не найден' });
    res.json({ ...user, password: undefined });
});

// ========================================
// API - ОБЪЯВЛЕНИЯ
// ========================================

app.get('/api/ads', (req, res) => {
    const approved = ads.filter(a => a.status === 'approved');
    res.json(approved);
});

app.post('/api/ads', authenticateToken, (req, res) => {
    try {
        const { title, description, price, city, country, phone, category, priceType, deliveryTime } = req.body;
        
        if (!title || !title.trim()) {
            return res.status(400).json({ error: 'Введите название товара!' });
        }
        if (!price || isNaN(parseFloat(price))) {
            return res.status(400).json({ error: 'Введите цену товара!' });
        }
        if (!category || !category.trim()) {
            return res.status(400).json({ error: 'Выберите категорию!' });
        }
        
        if (category !== 'keys') {
            if (!phone || !phone.trim()) {
                return res.status(400).json({ error: 'Введите номер телефона!' });
            }
            const phoneClean = phone.replace(/\D/g, '');
            if (!/^7\d{10}$/.test(phoneClean) && !/^8\d{10}$/.test(phoneClean)) {
                return res.status(400).json({ error: 'Некорректный номер телефона!' });
            }
        }
        
        if (category === 'keys') {
            if (!deliveryTime || parseInt(deliveryTime) < 1 || parseInt(deliveryTime) > 1440) {
                return res.status(400).json({ error: 'Введите время доставки!' });
            }
        }
        
        let displayPrice = Number(price).toLocaleString() + ' ₽';
        if (priceType === 'hour') {
            displayPrice = Number(price).toLocaleString() + ' ₽/час';
        } else if (priceType === 'negotiable') {
            displayPrice = 'Договорная';
        }
        
        const user = users.find(u => u.id === req.user.id);
        if (!user) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }
        
        const newAd = {
            id: nextAdId++,
            title: title.trim(),
            description: (description || '').trim(),
            price: parseFloat(price),
            displayPrice,
            priceType: priceType || 'fixed',
            city: (city || 'Не указан').trim(),
            country: (country || 'Россия').trim(),
            phone: phone || '',
            category,
            date: new Date().toISOString(),
            views: 0,
            image: null,
            user_id: req.user.id,
            user_name: user.name || 'Пользователь',
            status: 'pending',
            delivery_time: deliveryTime || null
        };
        
        pendingAds.push(newAd);
        saveAllData();
        
        res.status(201).json({ 
            success: true, 
            message: 'Объявление отправлено на модерацию', 
            ad: newAd 
        });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.post('/api/approve-ad/:id', authenticateToken, isAdmin, (req, res) => {
    const id = parseInt(req.params.id);
    const index = pendingAds.findIndex(a => a.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Объявление не найдено' });
    }
    const ad = pendingAds[index];
    ad.status = 'approved';
    ads.push(ad);
    pendingAds.splice(index, 1);
    saveAllData();
    res.json({ success: true });
});

app.post('/api/reject-ad/:id', authenticateToken, isAdmin, (req, res) => {
    const id = parseInt(req.params.id);
    const { reason } = req.body;
    const index = pendingAds.findIndex(a => a.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Объявление не найдено' });
    }
    const ad = pendingAds[index];
    const user = users.find(u => u.id === ad.user_id);
    if (user) {
        messages.push({
            id: nextMessageId++,
            user_id: user.id,
            from_admin: true,
            title: '❌ Объявление отклонено',
            content: `Ваше объявление "${ad.title}" было отклонено.\n\nПричина: ${reason || 'Не указана'}`,
            created_at: new Date().toISOString(),
            read: false
        });
        user.warnings = (user.warnings || 0) + 1;
    }
    pendingAds.splice(index, 1);
    saveAllData();
    res.json({ success: true });
});

// ========================================
// API - ЗАКАЗЫ
// ========================================

app.post('/api/buy/:adId', authenticateToken, (req, res) => {
    const adId = parseInt(req.params.adId);
    const ad = ads.find(a => a.id === adId);
    if (!ad) return res.status(404).json({ error: 'Товар не найден' });
    if (ad.status === 'closed') return res.status(400).json({ error: 'Товар уже продан' });
    if (ad.user_id === req.user.id) return res.status(400).json({ error: 'Нельзя купить свой товар' });
    
    const order = {
        id: nextOrderId++,
        ad_id: ad.id,
        ad_title: ad.title,
        ad_price: ad.price,
        ad_image: ad.image,
        buyer_id: req.user.id,
        seller_id: ad.user_id,
        status: 'pending',
        created_at: new Date().toISOString(),
        completed_at: null,
        payment_confirmed: false,
        email: req.body.email || null
    };
    orders.push(order);
    ad.status = 'closed';
    saveAllData();
    res.json({ success: true, order });
});

app.post('/api/orders/:orderId/confirm', authenticateToken, (req, res) => {
    const orderId = parseInt(req.params.orderId);
    const order = orders.find(o => o.id === orderId);
    if (!order) return res.status(404).json({ error: 'Заказ не найден' });
    if (order.seller_id !== req.user.id) return res.status(403).json({ error: 'Только продавец может подтвердить' });
    if (order.status !== 'buyer_sent') return res.status(400).json({ error: 'Нельзя подтвердить' });
    order.status = 'confirmed';
    saveAllData();
    res.json({ success: true, order });
});

app.post('/api/orders/:orderId/buyer-sent', authenticateToken, (req, res) => {
    const orderId = parseInt(req.params.orderId);
    const order = orders.find(o => o.id === orderId);
    if (!order) return res.status(404).json({ error: 'Заказ не найден' });
    if (order.buyer_id !== req.user.id) return res.status(403).json({ error: 'Только покупатель может отметить отправку' });
    if (order.status !== 'pending') return res.status(400).json({ error: 'Заказ уже обработан' });
    order.status = 'buyer_sent';
    saveAllData();
    res.json({ success: true, order });
});

app.get('/api/orders', authenticateToken, (req, res) => {
    const userOrders = orders.filter(o => o.buyer_id === req.user.id || o.seller_id === req.user.id);
    res.json(userOrders);
});

// ========================================
// API - ОТЗЫВЫ
// ========================================

app.get('/api/reviews/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userReviews = reviews.filter(r => r.seller_id === userId);
    const average = userReviews.length ? (userReviews.reduce((sum, r) => sum + r.rating, 0) / userReviews.length) : 0;
    res.json({
        reviews: userReviews,
        average: Math.round(average * 10) / 10,
        count: userReviews.length
    });
});

app.post('/api/reviews', authenticateToken, (req, res) => {
    try {
        const { ad_id, seller_id, rating, comment } = req.body;
        const buyer_id = req.user.id;
        
        if (!ad_id || !seller_id || !rating) {
            return res.status(400).json({ error: 'Укажите объявление, продавца и оценку' });
        }
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ error: 'Оценка должна быть от 1 до 5' });
        }

        const order = orders.find(o => o.ad_id === ad_id && o.buyer_id === buyer_id && o.status === 'confirmed');
        if (!order) {
            return res.status(403).json({ error: 'Вы можете оставить отзыв только после подтверждённой покупки' });
        }

        const existing = reviews.find(r => r.ad_id === ad_id && r.buyer_id === buyer_id);
        if (existing) {
            return res.status(400).json({ error: 'Вы уже оставили отзыв' });
        }

        const ad = ads.find(a => a.id === ad_id);
        const newReview = {
            id: nextReviewId++,
            ad_id,
            ad_title: ad ? ad.title : 'Товар',
            buyer_id,
            seller_id,
            rating: parseInt(rating),
            comment: comment || '',
            created_at: new Date().toISOString()
        };
        reviews.push(newReview);
        saveAllData();
        res.status(201).json({ success: true, review: newReview });
    } catch (error) {
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// ========================================
// API - ЖАЛОБЫ
// ========================================

app.post('/api/complaints', authenticateToken, (req, res) => {
    const { ad_id, reason, comment } = req.body;
    if (!ad_id || !reason) return res.status(400).json({ error: 'Укажите объявление и причину' });
    complaints.push({
        id: complaints.length + 1,
        ad_id,
        reason,
        comment: comment || '',
        status: 'pending',
        created_at: new Date().toISOString()
    });
    saveAllData();
    res.json({ success: true, message: 'Жалоба отправлена' });
});

app.get('/api/complaints', authenticateToken, isAdmin, (req, res) => {
    const result = complaints.filter(c => c.status === 'pending').map(c => {
        const ad = ads.find(a => a.id === c.ad_id);
        const user = users.find(u => u.id === ad?.user_id);
        return {
            ...c,
            ad_title: ad?.title || 'Удалено',
            ad_price: ad?.displayPrice || ad?.price || 0,
            ad_image: ad?.image || null,
            user_name: user?.name || 'Неизвестно'
        };
    });
    res.json(result);
});

// ========================================
// API - ЧАТЫ
// ========================================

app.get('/api/chats', authenticateToken, (req, res) => {
    const userChats = chats.filter(c => c.participants.includes(req.user.id));
    const result = userChats.map(c => {
        const otherId = c.participants.find(p => p !== req.user.id);
        const other = users.find(u => u.id === otherId);
        const lastMsg = c.messages && c.messages.length > 0 ? c.messages[c.messages.length - 1] : null;
        return {
            id: c.id,
            other: other ? { id: other.id, username: other.username, name: other.name, avatar: other.avatar } : null,
            lastMessage: lastMsg ? lastMsg.content : null,
            lastMessageTime: lastMsg ? lastMsg.created_at : null,
            unread: c.messages ? c.messages.filter(m => !m.read && m.sender_id !== req.user.id).length : 0
        };
    });
    res.json(result);
});

app.get('/api/chats/:chatId/messages', authenticateToken, (req, res) => {
    const chatId = parseInt(req.params.chatId);
    const chat = chats.find(c => c.id === chatId);
    if (!chat) return res.status(404).json({ error: 'Чат не найден' });
    if (!chat.participants.includes(req.user.id)) return res.status(403).json({ error: 'Доступ запрещён' });
    res.json(chat.messages || []);
});

app.post('/api/chats', authenticateToken, (req, res) => {
    const { otherUserId } = req.body;
    if (!otherUserId) return res.status(400).json({ error: 'Укажите пользователя' });
    if (otherUserId === req.user.id) return res.status(400).json({ error: 'Нельзя создать чат с собой' });
    
    let chat = chats.find(c => c.participants.includes(req.user.id) && c.participants.includes(otherUserId));
    if (!chat) {
        chat = {
            id: nextChatId++,
            participants: [req.user.id, otherUserId],
            messages: [],
            created_at: new Date().toISOString()
        };
        chats.push(chat);
        saveAllData();
    }
    res.json(chat);
});

app.post('/api/chats/:chatId/messages', authenticateToken, (req, res) => {
    const chatId = parseInt(req.params.chatId);
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: 'Введите сообщение' });
    
    const chat = chats.find(c => c.id === chatId);
    if (!chat) return res.status(404).json({ error: 'Чат не найден' });
    if (!chat.participants.includes(req.user.id)) return res.status(403).json({ error: 'Доступ запрещён' });
    
    const message = {
        id: nextMessageId++,
        sender_id: req.user.id,
        content,
        created_at: new Date().toISOString(),
        read: false
    };
    if (!chat.messages) chat.messages = [];
    chat.messages.push(message);
    saveAllData();
    res.json(message);
});

// ========================================
// HEALTH
// ========================================
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        data: {
            users: users.length,
            ads: ads.length,
            pendingAds: pendingAds.length,
            orders: orders.length,
            chats: chats.length
        }
    });
});

// ========================================
// ЗАПУСК
// ========================================
createTestUsers();

module.exports.handler = serverless(app);