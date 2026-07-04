const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const JWT_SECRET = 'my-secret-key-2024';

// ========================================
// 🔗 ПОДКЛЮЧЕНИЕ К SUPABASE
// ========================================
const supabaseUrl = process.env.SUPABASE_URL || 'https://huwzbjowyrzxkbnkhqtc.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1d3piam93eXJ6eGtibmtocXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NzY0NjgsImV4cCI6MjA2NzI1MjQ2OH0.SZPmGtRLxL-U8EqhDdSyiBQK4bORLW6iQzH_ru-ajkI';
const supabase = createClient(supabaseUrl, supabaseKey);

// ========================================
// НАСТРОЙКА MULTER ДЛЯ ЗАГРУЗКИ КАРТИНОК
// ========================================
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
        const allowed = /jpeg|jpg|png|gif|webp/;
        cb(null, allowed.test(path.extname(file.originalname).toLowerCase()));
    }
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================================
// СОЗДАНИЕ ТЕСТОВЫХ ПОЛЬЗОВАТЕЛЕЙ
// ========================================
async function createTestUsers() {
    try {
        const { count } = await supabase
            .from('users')
            .select('id', { count: 'exact' });
        
        if (count === 0) {
            console.log('👤 Создаём тестовых пользователей...');
            
            const testUsers = [
                { username: 'notsynzxx', password: 'toto2023555', name: 'ns', is_admin: 1, prefix: 'Administrator', balance: 1000 },
                { username: 'risha', password: 'risha2804account', name: 'mln', is_admin: 1, prefix: 'Support', balance: 500 }
            ];
            
            for (const u of testUsers) {
                const hashedPassword = await bcrypt.hash(u.password, 10);
                const { error } = await supabase
                    .from('users')
                    .insert({
                        username: u.username,
                        password: hashedPassword,
                        name: u.name,
                        is_admin: u.is_admin,
                        prefix: u.prefix,
                        balance: u.balance
                    });
                if (error) console.error('❌ Ошибка создания:', u.username, error);
                else console.log('✅ Создан:', u.username);
            }
        }
    } catch (error) {
        console.error('❌ Ошибка создания пользователей:', error);
    }
}

// ========================================
// АУТЕНТИФИКАЦИЯ
// ========================================
async function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Требуется авторизация' });
    }
    try {
        const user = jwt.verify(token, JWT_SECRET);
        req.user = user;
        const { data: userData } = await supabase
            .from('users')
            .select('*')
            .eq('id', user.id)
            .single();
        req.userData = userData;
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Недействительный токен' });
    }
}

async function isAdmin(req, res, next) {
    if (!req.userData || !req.userData.is_admin) {
        return res.status(403).json({ error: 'Доступ запрещён' });
    }
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

        const { data: existing } = await supabase
            .from('users')
            .select('id')
            .eq('username', username)
            .single();

        if (existing) {
            return res.status(400).json({ error: 'Пользователь уже существует!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const { data: newUser, error } = await supabase
            .from('users')
            .insert({
                username,
                password: hashedPassword,
                name: name || username,
                email: email || '',
                is_admin: 0,
                balance: 0,
                warnings: 0
            })
            .select()
            .single();

        if (error) throw error;

        const token = jwt.sign({ id: newUser.id, username: newUser.username }, JWT_SECRET, { expiresIn: '30d' });
        res.status(201).json({
            token,
            user: { ...newUser, password: undefined }
        });
    } catch (error) {
        console.error('❌ Ошибка регистрации:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ error: 'Введите логин и пароль!' });
        }

        const { data: user, error } = await supabase
            .from('users')
            .select('*')
            .eq('username', username)
            .single();

        if (error || !user) {
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
        console.error('❌ Ошибка входа:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.get('/api/me', authenticateToken, async (req, res) => {
    const { data: user } = await supabase
        .from('users')
        .select('*')
        .eq('id', req.user.id)
        .single();
    res.json({ ...user, password: undefined });
});

// ========================================
// API - ЗАГРУЗКА КАРТИНКИ
// ========================================

app.post('/api/upload-image', authenticateToken, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Файл не загружен' });
        }

        const fileExt = req.file.originalname.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `ads/${fileName}`;

        // Проверяем, существует ли bucket
        const { data: buckets } = await supabase.storage.listBuckets();
        const bucketExists = buckets?.some(b => b.name === 'images');
        
        if (!bucketExists) {
            await supabase.storage.createBucket('images', {
                public: true,
                allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
                fileSizeLimit: 5242880
            });
        }

        const { error } = await supabase.storage
            .from('images')
            .upload(filePath, req.file.buffer, {
                contentType: req.file.mimetype,
                cacheControl: '3600',
                upsert: false
            });

        if (error) throw error;

        const { data: urlData } = supabase.storage
            .from('images')
            .getPublicUrl(filePath);

        const imageUrl = urlData?.publicUrl || null;

        res.json({ 
            success: true, 
            imageUrl: imageUrl,
            message: 'Картинка загружена!' 
        });
    } catch (error) {
        console.error('❌ Ошибка загрузки картинки:', error);
        res.status(500).json({ error: 'Ошибка загрузки картинки' });
    }
});

// ========================================
// API - ОБЪЯВЛЕНИЯ
// ========================================

app.get('/api/ads', async (req, res) => {
    const { data: ads } = await supabase
        .from('ads')
        .select('*')
        .eq('status', 'approved')
        .order('date', { ascending: false });
    res.json(ads || []);
});

app.get('/api/ads/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { data: ad } = await supabase
        .from('ads')
        .select('*')
        .eq('id', id)
        .eq('status', 'approved')
        .single();
    
    if (!ad) return res.status(404).json({ error: 'Не найдено' });
    
    await supabase
        .from('ads')
        .update({ views: (ad.views || 0) + 1 })
        .eq('id', id);
    
    res.json(ad);
});

app.post('/api/ads', authenticateToken, async (req, res) => {
    try {
        console.log('📝 Создание объявления');
        console.log('📝 Тело запроса:', req.body);
        console.log('📝 Пользователь:', req.user.id);
        
        const { title, description, price, city, country, phone, category, priceType, deliveryTime, image } = req.body;
        
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
        
        const { data: user } = await supabase
            .from('users')
            .select('name')
            .eq('id', req.user.id)
            .single();
        
        if (!user) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }
        
        const { data: newAd, error } = await supabase
            .from('ads')
            .insert({
                title: title.trim(),
                description: (description || '').trim(),
                price: parseFloat(price),
                display_price: displayPrice,
                price_type: priceType || 'fixed',
                city: (city || 'Не указан').trim(),
                country: (country || 'Россия').trim(),
                phone: phone || '',
                category: category,
                user_id: req.user.id,
                user_name: user.name || 'Пользователь',
                status: 'pending',
                delivery_time: deliveryTime || null,
                image: image || null
            })
            .select()
            .single();
        
        if (error) {
            console.error('❌ Ошибка Supabase:', error);
            return res.status(500).json({ error: 'Ошибка базы данных' });
        }
        
        console.log('✅ Объявление создано:', newAd.id);
        
        res.status(201).json({ 
            success: true, 
            message: 'Объявление отправлено на модерацию', 
            ad: newAd 
        });
    } catch (error) {
        console.error('❌ Ошибка создания объявления:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// ========================================
// API - МОДЕРАЦИЯ
// ========================================

app.get('/api/pending-ads', authenticateToken, isAdmin, async (req, res) => {
    const { data: pending } = await supabase
        .from('ads')
        .select('*')
        .eq('status', 'pending')
        .order('date', { ascending: false });
    res.json(pending || []);
});

app.post('/api/approve-ad/:id', authenticateToken, isAdmin, async (req, res) => {
    const id = parseInt(req.params.id);
    await supabase
        .from('ads')
        .update({ status: 'approved' })
        .eq('id', id);
    res.json({ success: true });
});

app.post('/api/reject-ad/:id', authenticateToken, isAdmin, async (req, res) => {
    const id = parseInt(req.params.id);
    const { reason } = req.body;
    const { data: ad } = await supabase
        .from('ads')
        .select('user_id, title')
        .eq('id', id)
        .single();
    
    if (ad) {
        await supabase
            .from('system_messages')
            .insert({
                user_id: ad.user_id,
                from_admin: true,
                title: '❌ Объявление отклонено',
                content: `Ваше объявление "${ad.title}" было отклонено.\n\nПричина: ${reason || 'Не указана'}`,
                type: 'rejection'
            });
        
        await supabase
            .from('users')
            .update({ warnings: supabase.raw('warnings + 1') })
            .eq('id', ad.user_id);
    }
    
    await supabase
        .from('ads')
        .delete()
        .eq('id', id);
    
    res.json({ success: true });
});

// ========================================
// API - ЗАКАЗЫ
// ========================================

app.post('/api/buy/:adId', authenticateToken, async (req, res) => {
    try {
        const adId = parseInt(req.params.adId);
        const { data: ad } = await supabase
            .from('ads')
            .select('*')
            .eq('id', adId)
            .eq('status', 'approved')
            .single();
        
        if (!ad) return res.status(404).json({ error: 'Товар не найден' });
        if (ad.user_id === req.user.id) {
            return res.status(400).json({ error: 'Нельзя купить свой товар' });
        }
        
        const { data: order, error } = await supabase
            .from('orders')
            .insert({
                ad_id: ad.id,
                ad_title: ad.title,
                ad_price: ad.price,
                ad_image: ad.image,
                buyer_id: req.user.id,
                seller_id: ad.user_id,
                status: 'pending',
                email: req.body.email || null
            })
            .select()
            .single();
        
        if (error) throw error;
        
        await supabase
            .from('ads')
            .update({ status: 'closed' })
            .eq('id', adId);
        
        res.json({ success: true, order });
    } catch (error) {
        console.error('❌ Ошибка покупки:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.post('/api/orders/:orderId/confirm', authenticateToken, async (req, res) => {
    const orderId = parseInt(req.params.orderId);
    const { data: order } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .single();
    
    if (!order) return res.status(404).json({ error: 'Заказ не найден' });
    if (order.seller_id !== req.user.id) {
        return res.status(403).json({ error: 'Только продавец может подтвердить' });
    }
    if (order.status !== 'buyer_sent') {
        return res.status(400).json({ error: 'Нельзя подтвердить' });
    }
    
    await supabase
        .from('orders')
        .update({ 
            status: 'confirmed',
            completed_at: new Date().toISOString()
        })
        .eq('id', orderId);
    
    res.json({ success: true });
});

app.post('/api/orders/:orderId/buyer-sent', authenticateToken, async (req, res) => {
    const orderId = parseInt(req.params.orderId);
    const { data: order } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .single();
    
    if (!order) return res.status(404).json({ error: 'Заказ не найден' });
    if (order.buyer_id !== req.user.id) {
        return res.status(403).json({ error: 'Только покупатель может отметить отправку' });
    }
    if (order.status !== 'pending') {
        return res.status(400).json({ error: 'Заказ уже обработан' });
    }
    
    await supabase
        .from('orders')
        .update({ status: 'buyer_sent' })
        .eq('id', orderId);
    
    res.json({ success: true });
});

app.post('/api/orders/:orderId/cancel', authenticateToken, async (req, res) => {
    const orderId = parseInt(req.params.orderId);
    const { data: order } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .single();
    
    if (!order) return res.status(404).json({ error: 'Заказ не найден' });
    if (order.buyer_id !== req.user.id) {
        return res.status(403).json({ error: 'Только покупатель может отменить' });
    }
    if (order.status !== 'pending') {
        return res.status(400).json({ error: 'Нельзя отменить обработанный заказ' });
    }
    
    await supabase
        .from('orders')
        .update({ status: 'cancelled' })
        .eq('id', orderId);
    
    await supabase
        .from('ads')
        .update({ status: 'approved' })
        .eq('id', order.ad_id);
    
    res.json({ success: true });
});

app.get('/api/orders', authenticateToken, async (req, res) => {
    const { data: orders } = await supabase
        .from('orders')
        .select('*')
        .or(`buyer_id.eq.${req.user.id},seller_id.eq.${req.user.id}`)
        .order('created_at', { ascending: false });
    res.json(orders || []);
});

// ========================================
// API - ОТЗЫВЫ
// ========================================

app.get('/api/reviews/user/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);
    const { data: reviews } = await supabase
        .from('reviews')
        .select('*')
        .eq('seller_id', userId);
    
    const average = reviews && reviews.length
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length)
        : 0;
    
    res.json({
        reviews: reviews || [],
        average: Math.round(average * 10) / 10,
        count: reviews?.length || 0
    });
});

app.post('/api/reviews', authenticateToken, async (req, res) => {
    try {
        const { ad_id, seller_id, rating, comment } = req.body;
        const buyer_id = req.user.id;
        
        if (!ad_id || !seller_id || !rating) {
            return res.status(400).json({ error: 'Укажите объявление, продавца и оценку' });
        }
        if (rating < 1 || rating > 5) {
            return res.status(400).json({ error: 'Оценка должна быть от 1 до 5' });
        }

        const { data: order } = await supabase
            .from('orders')
            .select('id')
            .eq('ad_id', ad_id)
            .eq('buyer_id', buyer_id)
            .eq('status', 'confirmed')
            .single();

        if (!order) {
            return res.status(403).json({ error: 'Вы можете оставить отзыв только после подтверждённой покупки' });
        }

        const { data: existing } = await supabase
            .from('reviews')
            .select('id')
            .eq('ad_id', ad_id)
            .eq('buyer_id', buyer_id)
            .single();

        if (existing) {
            return res.status(400).json({ error: 'Вы уже оставили отзыв' });
        }

        const { data: ad } = await supabase
            .from('ads')
            .select('title')
            .eq('id', ad_id)
            .single();

        const { data: newReview, error } = await supabase
            .from('reviews')
            .insert({
                ad_id,
                ad_title: ad?.title || 'Товар',
                buyer_id,
                seller_id,
                rating: parseInt(rating),
                comment: comment || ''
            })
            .select()
            .single();

        if (error) throw error;
        res.status(201).json({ success: true, review: newReview });
    } catch (error) {
        console.error('❌ Ошибка создания отзыва:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// ========================================
// API - ЖАЛОБЫ
// ========================================

app.post('/api/complaints', authenticateToken, async (req, res) => {
    try {
        const { ad_id, reason, comment } = req.body;
        if (!ad_id || !reason) {
            return res.status(400).json({ error: 'Укажите объявление и причину' });
        }
        
        const { data: complaint, error } = await supabase
            .from('complaints')
            .insert({ ad_id, reason, comment: comment || '' })
            .select()
            .single();
        
        if (error) throw error;
        res.json({ success: true, message: 'Жалоба отправлена' });
    } catch (error) {
        console.error('❌ Ошибка отправки жалобы:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

app.get('/api/complaints', authenticateToken, isAdmin, async (req, res) => {
    const { data: complaints } = await supabase
        .from('complaints')
        .select(`
            *,
            ads:ad_id (title, display_price, image, user_id),
            users:ads.user_id (name)
        `)
        .eq('status', 'pending');
    res.json(complaints || []);
});

// ========================================
// API - ЧАТЫ
// ========================================

app.get('/api/chats', authenticateToken, async (req, res) => {
    const { data: chats } = await supabase
        .from('chats')
        .select('*');
    
    const result = (chats || [])
        .filter(c => c.participants && c.participants.includes(req.user.id))
        .map(c => {
            const otherId = c.participants.find(p => p !== req.user.id);
            return {
                id: c.id,
                other: { id: otherId },
                lastMessage: null,
                lastMessageTime: null,
                unread: 0
            };
        });
    
    res.json(result || []);
});

app.get('/api/chats/:chatId/messages', authenticateToken, async (req, res) => {
    const chatId = parseInt(req.params.chatId);
    const { data: messages } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('chat_id', chatId)
        .order('created_at', { ascending: true });
    res.json(messages || []);
});

app.post('/api/chats', authenticateToken, async (req, res) => {
    const { otherUserId } = req.body;
    if (!otherUserId) return res.status(400).json({ error: 'Укажите пользователя' });
    if (otherUserId === req.user.id) return res.status(400).json({ error: 'Нельзя создать чат с собой' });
    
    const { data: existing } = await supabase
        .from('chats')
        .select('*')
        .contains('participants', [req.user.id])
        .contains('participants', [otherUserId])
        .single();
    
    if (existing) {
        return res.json(existing);
    }
    
    const { data: chat, error } = await supabase
        .from('chats')
        .insert({ participants: [req.user.id, otherUserId] })
        .select()
        .single();
    
    if (error) throw error;
    res.json(chat);
});

app.post('/api/chats/:chatId/messages', authenticateToken, async (req, res) => {
    const chatId = parseInt(req.params.chatId);
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: 'Введите сообщение' });
    
    const { data: message, error } = await supabase
        .from('chat_messages')
        .insert({
            chat_id: chatId,
            sender_id: req.user.id,
            content
        })
        .select()
        .single();
    
    if (error) throw error;
    res.json(message);
});

// ========================================
// API - СООБЩЕНИЯ
// ========================================

app.get('/api/messages', authenticateToken, async (req, res) => {
    const { data: messages } = await supabase
        .from('system_messages')
        .select('*')
        .eq('user_id', req.user.id)
        .order('created_at', { ascending: false });
    res.json(messages || []);
});

app.post('/api/messages', authenticateToken, async (req, res) => {
    const { content, to_user_id, title, type } = req.body;
    if (!content) return res.status(400).json({ error: 'Введите сообщение' });
    
    const { data: user } = await supabase
        .from('users')
        .select('is_admin')
        .eq('id', req.user.id)
        .single();
    
    const { data: message, error } = await supabase
        .from('system_messages')
        .insert({
            user_id: to_user_id || req.user.id,
            from_admin: user?.is_admin || false,
            title: title || null,
            content,
            type: type || 'system'
        })
        .select()
        .single();
    
    if (error) throw error;
    res.json({ success: true, message });
});

// ========================================
// API - АДМИН
// ========================================

app.get('/api/admin/users', authenticateToken, isAdmin, async (req, res) => {
    const { data: users } = await supabase
        .from('users')
        .select('id, username, name, balance, is_admin, warnings, avatar');
    res.json(users || []);
});

app.delete('/api/admin/users/:id', authenticateToken, isAdmin, async (req, res) => {
    const id = parseInt(req.params.id);
    await supabase.from('users').delete().eq('id', id);
    res.json({ success: true });
});

app.put('/api/admin/users/:id/toggle-admin', authenticateToken, isAdmin, async (req, res) => {
    const id = parseInt(req.params.id);
    const { data: user } = await supabase
        .from('users')
        .select('is_admin')
        .eq('id', id)
        .single();
    
    if (user) {
        await supabase
            .from('users')
            .update({ is_admin: user.is_admin ? 0 : 1 })
            .eq('id', id);
    }
    res.json({ success: true });
});

app.delete('/api/admin/ads/:id', authenticateToken, isAdmin, async (req, res) => {
    const id = parseInt(req.params.id);
    await supabase.from('ads').delete().eq('id', id);
    res.json({ success: true });
});

// ========================================
// API - БАЛАНС
// ========================================

app.post('/api/admin/add-balance', authenticateToken, isAdmin, async (req, res) => {
    const { username, amount } = req.body;
    if (!username || !amount) {
        return res.status(400).json({ error: 'Укажите пользователя и сумму' });
    }
    
    const { data: user } = await supabase
        .from('users')
        .select('balance')
        .eq('username', username)
        .single();
    
    if (!user) {
        return res.status(404).json({ error: 'Пользователь не найден' });
    }
    
    const newBalance = (user.balance || 0) + parseInt(amount);
    await supabase
        .from('users')
        .update({ balance: newBalance })
        .eq('username', username);
    
    res.json({ success: true, balance: newBalance });
});

app.get('/api/users', authenticateToken, isAdmin, async (req, res) => {
    const { data: users } = await supabase
        .from('users')
        .select('id, username, name, balance, is_admin');
    res.json(users || []);
});

// ========================================
// API - КАТЕГОРИИ
// ========================================

app.get('/api/categories', (req, res) => {
    res.json([
        { id: 'all', name: 'Все', icon: 'th-large' },
        { id: 'electronics', name: 'Электроника', icon: 'laptop' },
        { id: 'realty', name: 'Недвижимость', icon: 'building' },
        { id: 'cars', name: 'Транспорт', icon: 'car' },
        { id: 'clothes', name: 'Одежда', icon: 'tshirt' },
        { id: 'services', name: 'Услуги', icon: 'wrench' },
        { id: 'animals', name: 'Животные', icon: 'paw' },
        { id: 'hobbies', name: 'Хобби', icon: 'gamepad' },
        { id: 'keys', name: 'Ключи для игр', icon: 'key' }
    ]);
});

// ========================================
// HEALTH
// ========================================

app.get('/api/health', async (req, res) => {
    try {
        const { count: usersCount } = await supabase
            .from('users')
            .select('id', { count: 'exact' });
        
        const { count: adsCount } = await supabase
            .from('ads')
            .select('id', { count: 'exact' });
        
        res.json({ 
            status: 'OK', 
            timestamp: new Date().toISOString(),
            database: 'connected',
            data: {
                users: usersCount || 0,
                ads: adsCount || 0
            }
        });
    } catch (error) {
        res.json({ 
            status: 'ERROR', 
            timestamp: new Date().toISOString(),
            error: error.message
        });
    }
});

// ========================================
// ЗАПУСК
// ========================================
createTestUsers();

module.exports.handler = serverless(app);