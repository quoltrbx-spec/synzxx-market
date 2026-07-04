// ========================================
// КОНФИГУРАЦИЯ
// ========================================
const API_URL = '/api';

// ========================================
// ЯЗЫКИ
// ========================================
let currentLang = localStorage.getItem('synzxx_lang') || 'ru';

const translations = {
    ru: {
        'search_placeholder': 'Что вы ищете на SYNZXX?',
        'login': 'Войти',
        'register': 'Регистрация',
        'logout': 'Выйти',
        'change_name': 'Сменить ник',
        'chats': 'Чаты',
        'messages': 'Сообщения',
        'orders': 'Заказы',
        'admin_mode': 'Режим проверки',
        'moderation': 'Модерация',
        'complaints': 'Жалобы',
        'add_balance_user': 'Пополнить баланс пользователя',
        'theme': 'Тема',
        'language': 'Язык / Language',
        'sell': 'Продать',
        'profile': 'Профиль',
        'balance': 'Баланс',
        'fresh_ads': '🔥 Свежие объявления',
        'no_ads': 'Пока нет объявлений',
        'post_ad': 'Разместить объявление',
        'categories': 'Категории',
        'all_categories': 'Все объявления',
        'realty': 'Недвижимость',
        'transport': 'Транспорт',
        'electronics': 'Электроника',
        'clothes': 'Одежда',
        'services': 'Услуги',
        'animals': 'Животные',
        'hobbies': 'Хобби',
        'keys': 'Ключи для игр',
        'views': 'просмотров',
        'city': 'Город',
        'contact': 'Связаться',
        'buy': 'Купить',
        'complain': 'Пожаловаться',
        'description': 'Описание',
        'no_description': 'Описание отсутствует',
        'phone': 'Номер телефона',
        'call': 'Позвонить',
        'chat_with_seller': 'Связаться в чате',
        'back': 'Назад',
        'views_count': 'просмотров',
        'login_title': '🔐 Вход в аккаунт',
        'register_title': '📝 Регистрация',
        'username': 'Логин',
        'password': 'Пароль',
        'confirm_password': 'Повторите пароль',
        'name': 'Имя',
        'email': 'Email',
        'no_account': 'Нет аккаунта?',
        'has_account': 'Уже есть аккаунт?',
        'change_nick': 'Сменить ник',
        'new_nick': 'Новый ник',
        'save': 'Сохранить',
        'post_ad_title': 'Выставить на продажу',
        'photo': 'Фото',
        'title': 'Название',
        'price': 'Цена',
        'category': 'Категория',
        'select_category': 'Выберите категорию',
        'phone_number': 'Телефон',
        'delivery_time': 'Время доставки',
        'publish': 'Опубликовать',
        'send_to_moderation': 'Отправка на модерацию...',
        'ad_sent': '✅ Объявление отправлено на модерацию!',
        'fill_fields': 'Заполните название и цену!',
        'select_category_alert': 'Выберите категорию!',
        'phone_format': '❗ Номер телефона должен содержать 11 цифр и начинаться с 7!',
        'write_message': 'Написать сообщение...',
        'start_chat': 'Начните общение',
        'order_created': '✅ Заказ создан! Чат с продавцом открыт.',
        'buy_confirm': 'Вы уверены, что хотите купить',
        'buy_confirm_text': 'за',
        'buy_own': '❌ Нельзя купить свой товар!',
        'need_auth': '⚠️ Войдите в аккаунт!',
        'orders_title': 'Заказы',
        'all_orders': 'Все',
        'in_progress': 'В процессе',
        'completed': 'Выполненные',
        'cancelled': 'Отменённые',
        'pending': '⏳ Ожидает оплаты',
        'confirmed': '✅ Подтверждён',
        'cancelled_status': '❌ Отменён',
        'you_buyer': 'Вы покупатель',
        'you_seller': 'Вы продавец',
        'confirm_order': 'ПОДТВЕРДИТЬ ЗАКАЗ',
        'cancel_order': 'Отменить заказ',
        'waiting_payment': '⏳ Ожидание подтверждения оплаты от покупателя',
        'order_completed': '✅ Заказ выполнен! Спасибо за покупку!',
        'order_confirmed': '✅ Заказ подтверждён! Спасибо за покупку!',
        'order_cancelled': '❌ Заказ отменён',
        'confirm_order_text': 'Вы точно подтверждаете оплату заказа?',
        'cancel_order_text': 'Вы точно хотите отменить заказ?',
        'add_balance': 'Пополнить баланс',
        'select_payment': 'Выберите способ оплаты',
        'telegram_stars': 'Telegram Stars',
        'transfer': 'Перевод на счёт (скоро)',
        'stars_instruction': 'Пополнение баланса через Telegram Stars',
        'send_stars_to': 'Отправьте Stars на аккаунт:',
        'stars_comment': 'В комментарии укажите ваш логин:',
        'stars_rate': 'За 1 Star вы получаете 1 ₽ на баланс',
        'stars_sent': 'Я отправил(а) Stars',
        'enter_stars_amount': 'Сколько Stars вы отправили? (1 Star = 1 ₽)',
        'balance_updated': '✅ Баланс пополнен на',
        'balance_user': 'Баланс пользователя',
        'search_user': 'Поиск пользователя',
        'enter_username': 'Введите ник пользователя...',
        'amount_to_add': 'Сумма пополнения (₽)',
        'add': 'Пополнить',
        'users_not_found': 'Пользователи не найдены',
        'select_user': 'Выберите пользователя!',
        'balance_added': '✅ Баланс пользователя',
        'complaint_title': 'Жалобы',
        'no_active_complaints': '✅ Нет активных жалоб',
        'complaint_reason': 'Причина',
        'complaint_comment': 'Комментарий',
        'complaint_empty': 'ПУСТО',
        'delete_ad': 'Удалить товар',
        'false_complaint': 'Ложная жалоба',
        'spam': 'Спам или мошенничество',
        'fake': 'Поддельный товар',
        'price_complaint': 'Завышенная цена',
        'wrong_category': 'Неверная категория',
        'other': 'Другая причина',
        'send_complaint': 'Отправить жалобу',
        'complaint_sent': '✅ Жалоба отправлена! Администратор рассмотрит её.',
        'select_reason': 'Выберите причину!',
        'complaint_modal_title': 'Пожаловаться',
        'complaint_modal_sub': 'Выберите причину',
        'complaint_modal_comment': 'Комментарий',
        'ad_deleted': '✅ Товар удалён, жалоба закрыта',
        'complaint_resolved': '✅ Жалоба обработана',
        'moderation_title': 'Модерация',
        'no_pending_ads': '✅ Нет объявлений на модерации',
        'approve': 'Одобрить',
        'reject': 'Отклонить',
        'reject_reason': '📝 Укажите причину отклонения:',
        'ad_approved': '✅ Объявление одобрено!',
        'ad_rejected': '✅ Объявление отклонено, пользователь уведомлён',
        'welcome': '👋 Добро пожаловать,',
        'registration_success': '✅ Регистрация успешна! Теперь войдите.',
        'logout_notify': 'Вы вышли из аккаунта',
        'name_updated': '✅ Ник обновлён!',
        'avatar_updated': '✅ Аватар обновлён!',
        'auth_required': '⚠️ Войдите в аккаунт!',
        'admin_mode_activated': '🔧 Режим проверки активирован!',
        'select_language': 'Выберите язык / Select Language',
        'russian': 'Русский',
        'english': 'English',
        'ru': '🇷🇺 RU',
        'en': '🇬🇧 EN',
        'loading': 'Загрузка...',
        'error_load': 'Не удалось загрузить объявления',
        'retry': 'Повторить',
        'no_chats': 'Нет чатов',
        'no_messages': 'Нет сообщений',
        'no_orders': 'Нет заказов',
        'enter_email': 'Введите электронную почту',
        'next': 'Далее',
        'delivery_time_label': 'Время доставки (макс 24 часа)',
        'i_sent_money': 'Я отправил средства',
        'i_did_not_receive': 'Я не получил средства',
        'call_support': 'Хотите ли вы позвать поддержку?',
        'yes': 'Да',
        'no': 'Нет',
        'support_notified': '✅ Поддержка уведомлена!',
        'question_closed': 'Вопрос закрыт',
        'transfer_money': 'Перевести деньги продавцу',
        'transfer_to_seller': 'Перевести продавцу средства на баланс',
        'seller_nick': 'НИК ПРОДАВЦА',
        'product_cost': 'СТОИМОСТЬ ТОВАРА',
        'transfer': 'Перевести',
        'leave_review': 'Оставить отзыв',
        'rating': 'Оценка',
        'your_rating': 'Ваша оценка',
        'review_comment': 'Комментарий к отзыву',
        'send_review': 'Отправить отзыв',
        'review_sent': '✅ Отзыв отправлен!',
        'review_error': '❌ Ошибка отправки отзыва',
        'review_already': 'Вы уже оставили отзыв для этого заказа',
        'select_stars': 'Выберите количество звёзд'
    },
    en: {
        'search_placeholder': 'What are you looking for on SYNZXX?',
        'login': 'Login',
        'register': 'Register',
        'logout': 'Logout',
        'change_name': 'Change nickname',
        'chats': 'Chats',
        'messages': 'Messages',
        'orders': 'Orders',
        'admin_mode': 'Admin mode',
        'moderation': 'Moderation',
        'complaints': 'Complaints',
        'add_balance_user': 'Add user balance',
        'theme': 'Theme',
        'language': 'Language',
        'sell': 'Sell',
        'profile': 'Profile',
        'balance': 'Balance',
        'fresh_ads': '🔥 Fresh ads',
        'no_ads': 'No ads yet',
        'post_ad': 'Post an ad',
        'categories': 'Categories',
        'all_categories': 'All ads',
        'realty': 'Real estate',
        'transport': 'Transport',
        'electronics': 'Electronics',
        'clothes': 'Clothing',
        'services': 'Services',
        'animals': 'Animals',
        'hobbies': 'Hobbies',
        'keys': 'Game keys',
        'views': 'views',
        'city': 'City',
        'contact': 'Contact',
        'buy': 'Buy',
        'complain': 'Complain',
        'description': 'Description',
        'no_description': 'No description',
        'phone': 'Phone number',
        'call': 'Call',
        'chat_with_seller': 'Chat with seller',
        'back': 'Back',
        'views_count': 'views',
        'login_title': '🔐 Login',
        'register_title': '📝 Registration',
        'username': 'Username',
        'password': 'Password',
        'confirm_password': 'Confirm password',
        'name': 'Name',
        'email': 'Email',
        'no_account': "Don't have an account?",
        'has_account': 'Already have an account?',
        'change_nick': 'Change nickname',
        'new_nick': 'New nickname',
        'save': 'Save',
        'post_ad_title': 'Post an ad',
        'photo': 'Photo',
        'title': 'Title',
        'price': 'Price',
        'category': 'Category',
        'select_category': 'Select category',
        'phone_number': 'Phone',
        'delivery_time': 'Delivery time',
        'publish': 'Publish',
        'send_to_moderation': 'Sending for moderation...',
        'ad_sent': '✅ Ad sent for moderation!',
        'fill_fields': 'Please fill in title and price!',
        'select_category_alert': 'Please select a category!',
        'phone_format': '❗ Phone number must have 11 digits and start with 7!',
        'write_message': 'Write a message...',
        'start_chat': 'Start chatting',
        'order_created': '✅ Order created! Chat with seller opened.',
        'buy_confirm': 'Are you sure you want to buy',
        'buy_confirm_text': 'for',
        'buy_own': '❌ You cannot buy your own item!',
        'need_auth': '⚠️ Please login!',
        'orders_title': 'Orders',
        'all_orders': 'All',
        'in_progress': 'In progress',
        'completed': 'Completed',
        'cancelled': 'Cancelled',
        'pending': '⏳ Awaiting payment',
        'confirmed': '✅ Confirmed',
        'cancelled_status': '❌ Cancelled',
        'you_buyer': 'You are the buyer',
        'you_seller': 'You are the seller',
        'confirm_order': 'CONFIRM ORDER',
        'cancel_order': 'Cancel order',
        'waiting_payment': '⏳ Awaiting payment confirmation from buyer',
        'order_completed': '✅ Order completed! Thank you for your purchase!',
        'order_confirmed': '✅ Order confirmed! Thank you for your purchase!',
        'order_cancelled': '❌ Order cancelled',
        'confirm_order_text': 'Are you sure you want to confirm this order?',
        'cancel_order_text': 'Are you sure you want to cancel this order?',
        'add_balance': 'Add balance',
        'select_payment': 'Select payment method',
        'telegram_stars': 'Telegram Stars',
        'transfer': 'Bank transfer (soon)',
        'stars_instruction': 'Balance top-up via Telegram Stars',
        'send_stars_to': 'Send Stars to account:',
        'stars_comment': 'In the comment specify your username:',
        'stars_rate': '1 Star = 1 ₽ to your balance',
        'stars_sent': 'I sent Stars',
        'enter_stars_amount': 'How many Stars did you send? (1 Star = 1 ₽)',
        'balance_updated': '✅ Balance topped up by',
        'balance_user': 'User balance',
        'search_user': 'Search user',
        'enter_username': 'Enter username...',
        'amount_to_add': 'Amount to add (₽)',
        'add': 'Add',
        'users_not_found': 'No users found',
        'select_user': 'Please select a user!',
        'balance_added': '✅ User balance',
        'complaint_title': 'Complaints',
        'no_active_complaints': '✅ No active complaints',
        'complaint_reason': 'Reason',
        'complaint_comment': 'Comment',
        'complaint_empty': 'EMPTY',
        'delete_ad': 'Delete item',
        'false_complaint': 'False complaint',
        'spam': 'Spam or scam',
        'fake': 'Fake item',
        'price_complaint': 'Overpriced',
        'wrong_category': 'Wrong category',
        'other': 'Other',
        'send_complaint': 'Send complaint',
        'complaint_sent': '✅ Complaint sent! Admin will review it.',
        'select_reason': 'Please select a reason!',
        'complaint_modal_title': 'Complain',
        'complaint_modal_sub': 'Select a reason',
        'complaint_modal_comment': 'Comment',
        'ad_deleted': '✅ Item deleted, complaint closed',
        'complaint_resolved': '✅ Complaint resolved',
        'moderation_title': 'Moderation',
        'no_pending_ads': '✅ No ads for moderation',
        'approve': 'Approve',
        'reject': 'Reject',
        'reject_reason': '📝 Please specify the reason for rejection:',
        'ad_approved': '✅ Ad approved!',
        'ad_rejected': '✅ Ad rejected, user notified',
        'welcome': '👋 Welcome,',
        'registration_success': '✅ Registration successful! Please login.',
        'logout_notify': 'You have been logged out',
        'name_updated': '✅ Nickname updated!',
        'avatar_updated': '✅ Avatar updated!',
        'auth_required': '⚠️ Please login!',
        'admin_mode_activated': '🔧 Admin mode activated!',
        'select_language': 'Select Language',
        'russian': 'Russian',
        'english': 'English',
        'ru': '🇷🇺 RU',
        'en': '🇬🇧 EN',
        'loading': 'Loading...',
        'error_load': 'Failed to load ads',
        'retry': 'Retry',
        'no_chats': 'No chats',
        'no_messages': 'No messages',
        'no_orders': 'No orders',
        'enter_email': 'Enter your email',
        'next': 'Next',
        'delivery_time_label': 'Delivery time (max 24 hours)',
        'i_sent_money': 'I sent money',
        'i_did_not_receive': 'I did not receive',
        'call_support': 'Do you want to call support?',
        'yes': 'Yes',
        'no': 'No',
        'support_notified': '✅ Support notified!',
        'question_closed': 'Question closed',
        'transfer_money': 'Transfer money to seller',
        'transfer_to_seller': 'Transfer money to seller balance',
        'seller_nick': 'SELLER NICK',
        'product_cost': 'PRODUCT COST',
        'transfer': 'Transfer',
        'leave_review': 'Leave review',
        'rating': 'Rating',
        'your_rating': 'Your rating',
        'review_comment': 'Review comment',
        'send_review': 'Send review',
        'review_sent': '✅ Review sent!',
        'review_error': '❌ Error sending review',
        'review_already': 'You already left a review for this order',
        'select_stars': 'Select number of stars'
    }
};

function t(key) {
    return translations[currentLang]?.[key] || translations['ru'][key] || key;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('synzxx_lang', lang);
    document.querySelectorAll('.lang-badge').forEach(el => {
        el.textContent = lang === 'ru' ? '🇷🇺 RU' : '🇬🇧 EN';
    });
    closeModal('languageModal');
    updateUITexts();
    renderAds();
}

function updateUITexts() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t('search_placeholder');
    
    document.querySelectorAll('.login-btn-text').forEach(el => el.textContent = t('login'));
    document.querySelectorAll('.register-btn-text').forEach(el => el.textContent = t('register'));
    
    const freshAds = document.querySelector('.ads-header h2');
    if (freshAds) freshAds.textContent = t('fresh_ads');
    
    const categoryMap = {
        'all': 'all_categories',
        'realty': 'realty',
        'cars': 'transport',
        'electronics': 'electronics',
        'clothes': 'clothes',
        'services': 'services',
        'animals': 'animals',
        'hobbies': 'hobbies',
        'keys': 'keys'
    };
    
    document.querySelectorAll('.category-item').forEach(el => {
        const cat = el.dataset.category;
        if (cat && categoryMap[cat]) {
            const span = el.querySelector('span');
            if (span) span.textContent = t(categoryMap[cat]);
        }
    });
}

// ========================================
// УВЕДОМЛЕНИЯ
// ========================================
function showNotification(message, type = 'success') {
    const colors = {
        success: { bg: 'rgba(34,197,94,0.15)', border: 'rgba(34,197,94,0.2)', icon: 'fa-check-circle', color: '#22c55e' },
        error: { bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.2)', icon: 'fa-times-circle', color: '#ef4444' },
        warning: { bg: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.2)', icon: 'fa-exclamation-circle', color: '#f59e0b' },
        info: { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.2)', icon: 'fa-info-circle', color: '#3b82f6' }
    };
    
    const style = colors[type] || colors.success;
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        max-width: 480px;
        width: 90%;
        background: ${style.bg};
        backdrop-filter: blur(24px);
        border: 1px solid ${style.border};
        border-radius: 16px;
        padding: 18px 24px;
        color: #fff;
        font-family: 'DrukWideCyr', 'Inter', sans-serif;
        font-size: 15px;
        z-index: 99999;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        gap: 14px;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        pointer-events: none;
    `;
    
    notification.innerHTML = `
        <div style="flex-shrink:0;width:40px;height:40px;border-radius:50%;background:${style.color}22;display:flex;align-items:center;justify-content:center;border:1px solid ${style.color}33;">
            <i class="fas ${style.icon}" style="color:${style.color};font-size:20px;"></i>
        </div>
        <div style="flex:1;font-weight:500;line-height:1.4;">${message}</div>
        <button onclick="this.parentElement.remove()" style="background:none;border:none;color:rgba(255,255,255,0.3);cursor:pointer;font-size:18px;padding:4px;pointer-events:auto;font-family:inherit;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// ========================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ========================================
let currentUser = null;
let authToken = null;
let ads = [];
let currentCategory = 'all';
let complaintsData = [];
let messagesData = [];
let pendingAdsData = [];
let chatsData = [];
let ordersData = [];
let currentChatId = null;
let currentChatPartner = null;
let adsLoaded = false;
let isLoading = false;
let selectedUserId = null;
let complaintAdId = null;
let loadAttempts = 0;
const MAX_LOAD_ATTEMPTS = 3;
let adminModeEnabled = false;
let currentBuyAdId = null;
let priceType = 'fixed';
let usersData = [];

// ========================================
// АВТОРИЗАЦИЯ
// ========================================

function updateUI() {
    console.log('🔄 updateUI() вызван, currentUser:', currentUser);
    
    // === ДЕСКТОП ЭЛЕМЕНТЫ ===
    const authContainer = document.getElementById('authContainer');
    const userProfile = document.getElementById('userProfile');
    const profileName = document.getElementById('profileName');
    const profilePrefix = document.getElementById('profilePrefix');
    const profileBalance = document.getElementById('profileBalance');
    const dropdownUsername = document.getElementById('dropdownUsername');
    const dropdownName = document.getElementById('dropdownName');
    const dropdownPrefix = document.getElementById('dropdownPrefix');
    const dropdownBalance = document.getElementById('dropdownBalance');
    const profileAvatar = document.getElementById('profileAvatar');
    const dropdownAvatar = document.getElementById('dropdownAvatar');
    const sellBtn = document.getElementById('sellBtn');
    const adminMode = document.getElementById('dropdownAdminMode');
    const complaintsItem = document.getElementById('dropdownComplaints');
    const moderationItem = document.getElementById('dropdownModeration');
    const messagesItem = document.getElementById('dropdownMessages');
    const chatsItem = document.getElementById('dropdownChats');
    const ordersItem = document.getElementById('dropdownOrders');
    const adminAddBalance = document.getElementById('dropdownAddBalance');
    const adminPanel = document.getElementById('dropdownAdminPanel');
    
    // === МОБИЛЬНЫЕ ЭЛЕМЕНТЫ ===
    const mobileAuthContainer = document.getElementById('mobileAuthContainer');
    const mobileProfile = document.getElementById('mobileProfile');
    const mobileProfileName = document.getElementById('mobileProfileName');
    const mobileProfileBalance = document.getElementById('mobileProfileBalance');
    const mobileProfileAvatar = document.getElementById('mobileProfileAvatar');
    const mobileMenuAvatar = document.getElementById('mobileMenuAvatar');
    const mobileMenuUsername = document.getElementById('mobileMenuUsername');
    const mobileMenuName = document.getElementById('mobileMenuName');
    const mobileMenuPrefix = document.getElementById('mobileMenuPrefix');
    const mobileMenuBalance = document.getElementById('mobileMenuBalance');
    const mobileProfileArrow = document.getElementById('mobileProfileArrow');
    const mobileSellBtn = document.getElementById('mobileSellBtn');
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');
    
    console.log('📱 mobileLoginBtn найден:', !!mobileLoginBtn);
    console.log('📱 mobileRegisterBtn найден:', !!mobileRegisterBtn);
    
    if (currentUser) {
        console.log('✅ Пользователь авторизован, показываем профиль');
        
        // === ДЕСКТОП ===
        if (authContainer) authContainer.style.display = 'none';
        if (userProfile) userProfile.style.display = 'flex';
        
        // === МОБИЛЬНЫЙ ПРОФИЛЬ ===
        if (mobileAuthContainer) mobileAuthContainer.style.display = 'none';
        if (mobileProfile) mobileProfile.style.display = 'block';
        
        // Скрываем кнопки входа/регистрации
        if (mobileLoginBtn) mobileLoginBtn.style.display = 'none';
        if (mobileRegisterBtn) mobileRegisterBtn.style.display = 'none';
        
        const name = currentUser.name || currentUser.username;
        const balance = currentUser.balance || 0;
        
        // === ДЕСКТОП ===
        if (profileName) profileName.textContent = name;
        if (dropdownUsername) dropdownUsername.textContent = '@' + currentUser.username;
        if (dropdownName) dropdownName.textContent = name;
        if (profileBalance) profileBalance.textContent = balance + ' ₽';
        if (dropdownBalance) dropdownBalance.textContent = balance;
        
        // === МОБИЛЬНАЯ ПАНЕЛЬ ===
        if (mobileProfileName) mobileProfileName.textContent = name;
        if (mobileProfileBalance) mobileProfileBalance.textContent = balance + ' ₽';
        if (mobileMenuName) mobileMenuName.textContent = name;
        if (mobileMenuUsername) mobileMenuUsername.textContent = '@' + currentUser.username;
        if (mobileMenuBalance) mobileMenuBalance.textContent = balance;
        if (mobileProfileArrow) mobileProfileArrow.classList.remove('open');
        
        // === АВАТАРКИ ===
        const avatarUrl = currentUser.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&background=6366f1&color=fff&size=64';
        if (profileAvatar) profileAvatar.src = avatarUrl;
        if (dropdownAvatar) dropdownAvatar.src = avatarUrl;
        if (mobileProfileAvatar) mobileProfileAvatar.src = avatarUrl;
        if (mobileMenuAvatar) mobileMenuAvatar.src = avatarUrl;
        
        // === МЕНЮ ПУНКТЫ ===
        if (chatsItem) chatsItem.style.display = 'flex';
        if (messagesItem) messagesItem.style.display = 'flex';
        if (ordersItem) ordersItem.style.display = 'flex';
        
        loadChatsCount();
        loadMessagesCount();
        loadOrders();
        
        const isAdmin = currentUser.username === 'notsynzxx';
        const isSupport = currentUser.username === 'risha';
        
        // === АДМИН/ПОДДЕРЖКА ===
        if (isAdmin) {
            if (profilePrefix) { 
                profilePrefix.textContent = adminModeEnabled ? '' : 'Administrator';
                profilePrefix.style.display = adminModeEnabled ? 'none' : 'inline';
            }
            if (dropdownPrefix) { 
                dropdownPrefix.textContent = adminModeEnabled ? '' : 'Administrator';
                dropdownPrefix.style.display = adminModeEnabled ? 'none' : 'block';
            }
            if (mobileMenuPrefix) {
                mobileMenuPrefix.textContent = adminModeEnabled ? '' : 'Administrator';
                mobileMenuPrefix.style.display = adminModeEnabled ? 'none' : 'inline';
            }
            if (adminMode) {
                adminMode.style.display = 'flex';
                adminMode.innerHTML = `<i class="fas fa-user-shield"></i> ${adminModeEnabled ? '🟢 Режим проверки ВКЛ' : 'Режим проверки'}`;
            }
            if (complaintsItem) complaintsItem.style.display = 'flex';
            if (moderationItem) moderationItem.style.display = 'flex';
            if (adminAddBalance) adminAddBalance.style.display = 'flex';
            if (adminPanel) adminPanel.style.display = 'flex';
            loadComplaints();
            loadPendingAds();
        } else if (isSupport) {
            if (profilePrefix) { 
                profilePrefix.textContent = 'Support';
                profilePrefix.style.display = 'inline';
            }
            if (dropdownPrefix) { 
                dropdownPrefix.textContent = 'Support';
                dropdownPrefix.style.display = 'block';
            }
            if (mobileMenuPrefix) {
                mobileMenuPrefix.textContent = 'Support';
                mobileMenuPrefix.style.display = 'inline';
            }
            if (adminMode) adminMode.style.display = 'none';
            if (complaintsItem) complaintsItem.style.display = 'flex';
            if (moderationItem) moderationItem.style.display = 'none';
            if (adminAddBalance) adminAddBalance.style.display = 'flex';
            if (adminPanel) adminPanel.style.display = 'none';
            loadComplaints();
        } else {
            if (profilePrefix) profilePrefix.style.display = 'none';
            if (dropdownPrefix) dropdownPrefix.style.display = 'none';
            if (mobileMenuPrefix) mobileMenuPrefix.style.display = 'none';
            if (adminMode) adminMode.style.display = 'none';
            if (complaintsItem) complaintsItem.style.display = 'none';
            if (moderationItem) moderationItem.style.display = 'none';
            if (adminAddBalance) adminAddBalance.style.display = 'none';
            if (adminPanel) adminPanel.style.display = 'none';
        }
        if (sellBtn) sellBtn.style.display = 'flex';
        if (mobileSellBtn) mobileSellBtn.style.display = 'flex';
        
    } else {
        console.log('🔴 Пользователь НЕ авторизован, показываем кнопки входа');
        
        // === ДЕСКТОП ===
        if (authContainer) authContainer.style.display = 'flex';
        if (userProfile) userProfile.style.display = 'none';
        
        // === МОБИЛЬНЫЙ ===
        if (mobileAuthContainer) {
            mobileAuthContainer.style.display = 'flex';
            console.log('✅ mobileAuthContainer показан');
        }
        if (mobileProfile) {
            mobileProfile.style.display = 'none';
            console.log('✅ mobileProfile скрыт');
        }
        
        // ПОКАЗЫВАЕМ КНОПКИ ВХОДА/РЕГИСТРАЦИИ
        if (mobileLoginBtn) {
            mobileLoginBtn.style.display = 'flex';
            console.log('✅ mobileLoginBtn показан');
        }
        if (mobileRegisterBtn) {
            mobileRegisterBtn.style.display = 'flex';
            console.log('✅ mobileRegisterBtn показан');
        }
        
        // СКРЫВАЕМ КНОПКУ "ПРОДАТЬ"
        if (sellBtn) sellBtn.style.display = 'none';
        if (mobileSellBtn) mobileSellBtn.style.display = 'none';
        
        // Скрываем админ-пункты
        document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
        if (chatsItem) chatsItem.style.display = 'none';
        if (messagesItem) messagesItem.style.display = 'none';
        if (ordersItem) ordersItem.style.display = 'none';
        
        // Очищаем мобильную аватарку
        if (mobileProfileAvatar) {
            mobileProfileAvatar.src = '';
            mobileProfileAvatar.alt = 'avatar';
        }
        if (mobileProfileName) {
            mobileProfileName.textContent = '';
        }
        if (mobileProfileBalance) {
            mobileProfileBalance.textContent = '';
        }
        if (mobileMenuAvatar) {
            mobileMenuAvatar.src = '';
        }
    }
    
    updateUITexts();
}

async function loginUser(username, password) {
    try {
        console.log('🔐 Попытка входа:', username);
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Ошибка входа');
        currentUser = data.user;
        authToken = data.token;
        adminModeEnabled = false;
        localStorage.setItem('synzxx_user', JSON.stringify(currentUser));
        localStorage.setItem('synzxx_token', authToken);
        updateUI();
        closeModal('authModal');
        showNotification(t('welcome') + ' ' + (currentUser.name || currentUser.username) + '!', 'success');
        console.log('✅ Вход выполнен:', username);
        return true;
    } catch (error) {
        console.error('❌ Ошибка входа:', error);
        showNotification('❌ ' + error.message, 'error');
        return false;
    }
}

async function registerUser(username, password, password2, name) {
    if (password !== password2) {
        showNotification('❌ Пароли не совпадают!', 'error');
        return false;
    }
    if (password.length < 4) {
        showNotification('❌ Пароль должен быть минимум 4 символа!', 'error');
        return false;
    }
    try {
        console.log('📝 Попытка регистрации:', username);
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, password2, name, email: '' })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Ошибка регистрации');
        showNotification(t('registration_success'), 'success');
        switchAuthMode('login');
        console.log('✅ Регистрация успешна:', username);
        return true;
    } catch (error) {
        console.error('❌ Ошибка регистрации:', error);
        showNotification('❌ ' + error.message, 'error');
        return false;
    }
}

function logoutUser() {
    currentUser = null;
    authToken = null;
    adminModeEnabled = false;
    localStorage.removeItem('synzxx_user');
    localStorage.removeItem('synzxx_token');
    updateUI();
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown) dropdown.classList.remove('show');
    const mobileMenu = document.getElementById('mobileProfileMenu');
    if (mobileMenu) mobileMenu.classList.remove('show');
    document.getElementById('mobileProfileArrow')?.classList.remove('open');
    showNotification(t('logout_notify'), 'info');
}

// ========================================
// МОДАЛКИ
// ========================================

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

function switchAuthMode(mode) {
    const title = document.getElementById('authTitle');
    const submitBtn = document.getElementById('authSubmitBtn');
    const extraFields = document.querySelectorAll('.auth-extra-fields');
    const toggleLink = document.getElementById('toggleAuthLink');
    const form = document.getElementById('authForm');
    if (mode === 'login') {
        if (title) title.textContent = t('login_title');
        if (submitBtn) submitBtn.textContent = t('login');
        extraFields.forEach(el => el.style.display = 'none');
        if (toggleLink) toggleLink.innerHTML = t('no_account') + ' <span style="color:#60a5fa;">' + t('register') + '</span>';
        if (form) form.dataset.mode = 'login';
    } else {
        if (title) title.textContent = t('register_title');
        if (submitBtn) submitBtn.textContent = t('register');
        extraFields.forEach(el => el.style.display = 'block');
        if (toggleLink) toggleLink.innerHTML = t('has_account') + ' <span style="color:#60a5fa;">' + t('login') + '</span>';
        if (form) form.dataset.mode = 'register';
    }
}

// ========================================
// ОБЪЯВЛЕНИЯ
// ========================================

function renderAds() {
    const grid = document.getElementById('adsGrid');
    if (!grid) return;
    const adsCount = document.getElementById('adsCount');
    if (!ads || ads.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:rgba(255,255,255,0.2);">
            <p>${t('no_ads')}</p>
            <button onclick="if(currentUser){openModal('createModal')}else{showNotification(t('need_auth'),'warning');openModal('authModal')}" style="margin-top:16px;padding:12px 24px;background:#6366f1;border:none;border-radius:12px;color:#fff;cursor:pointer;font-size:14px;font-family:inherit;">
                <i class="fas fa-plus"></i> ${t('post_ad')}
            </button>
        </div>`;
        if (adsCount) adsCount.textContent = t('no_ads');
        return;
    }
    grid.innerHTML = ads.map(ad => `
        <div class="ad-card" onclick="openAdDetail(${ad.id})" style="background:rgba(255,255,255,0.03);border-radius:12px;overflow:hidden;cursor:pointer;transition:all 0.3s ease;border:1px solid rgba(255,255,255,0.06);">
            <img src="${ad.image || 'https://via.placeholder.com/400x300/6366f1/ffffff?text=' + encodeURIComponent(ad.title)}" alt="${ad.title}" style="width:100%;height:200px;object-fit:cover;" onerror="this.src='https://via.placeholder.com/400x300/6366f1/ffffff?text=Товар'">
            <div style="padding:16px;">
                <div style="font-size:20px;font-weight:700;color:#60a5fa;">${ad.displayPrice || Number(ad.price).toLocaleString() + ' ₽'}</div>
                <div style="font-size:16px;font-weight:500;margin:8px 0;color:#fff;">${ad.title}</div>
                <div style="display:flex;justify-content:space-between;color:rgba(255,255,255,0.3);font-size:14px;">
                    <span><i class="fas fa-map-marker-alt"></i> ${ad.city || t('city')}</span>
                    <span><i class="fas fa-eye"></i> ${ad.views || 0}</span>
                </div>
                ${ad.category === 'keys' ? `<div style="margin-top:6px;font-size:12px;color:#f59e0b;"><i class="fas fa-key"></i> Ключ для игр</div>` : ''}
                <div class="seller-rating" data-seller-id="${ad.user_id}" style="margin-top:8px;font-size:13px;color:rgba(255,255,255,0.5);">
                    <i class="fas fa-star" style="color:#f59e0b;"></i> <span class="rating-value">...</span>
                </div>
            </div>
        </div>
    `).join('');
    if (adsCount) adsCount.textContent = `${ads.length} объявлений`;
    ads.forEach(ad => {
        loadAndDisplaySellerRating(ad.user_id, document.querySelector(`.seller-rating[data-seller-id="${ad.user_id}"]`));
    });
}

async function loadAndDisplaySellerRating(sellerId, container) {
    if (!container) return;
    try {
        const response = await fetch(`${API_URL}/reviews/user/${sellerId}`);
        if (!response.ok) throw new Error('Ошибка загрузки');
        const data = await response.json();
        const avg = data.average || 0;
        const count = data.count || 0;
        const starHtml = avg > 0 ? `<i class="fas fa-star" style="color:#f59e0b;"></i> ${avg.toFixed(1)} (${count})` : 'Нет отзывов';
        container.innerHTML = starHtml;
    } catch (e) {
        container.innerHTML = '⭐ 0.0';
    }
}

function renderAdsFiltered(filtered) {
    const grid = document.getElementById('adsGrid');
    if (!grid) return;
    if (!filtered || filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:rgba(255,255,255,0.2);"><p>${t('no_ads')}</p></div>`;
        return;
    }
    grid.innerHTML = filtered.map(ad => `
        <div class="ad-card" onclick="openAdDetail(${ad.id})" style="background:rgba(255,255,255,0.03);border-radius:12px;overflow:hidden;cursor:pointer;transition:all 0.3s ease;border:1px solid rgba(255,255,255,0.06);">
            <img src="${ad.image || 'https://via.placeholder.com/400x300/6366f1/ffffff?text=' + encodeURIComponent(ad.title)}" alt="${ad.title}" style="width:100%;height:200px;object-fit:cover;" onerror="this.src='https://via.placeholder.com/400x300/6366f1/ffffff?text=Товар'">
            <div style="padding:16px;">
                <div style="font-size:20px;font-weight:700;color:#60a5fa;">${ad.displayPrice || Number(ad.price).toLocaleString() + ' ₽'}</div>
                <div style="font-size:16px;font-weight:500;margin:8px 0;color:#fff;">${ad.title}</div>
                <div style="display:flex;justify-content:space-between;color:rgba(255,255,255,0.3);font-size:14px;">
                    <span><i class="fas fa-map-marker-alt"></i> ${ad.city || t('city')}</span>
                    <span><i class="fas fa-eye"></i> ${ad.views || 0}</span>
                </div>
                ${ad.category === 'keys' ? `<div style="margin-top:6px;font-size:12px;color:#f59e0b;"><i class="fas fa-key"></i> Ключ для игр</div>` : ''}
                <div class="seller-rating" data-seller-id="${ad.user_id}" style="margin-top:8px;font-size:13px;color:rgba(255,255,255,0.5);">
                    <i class="fas fa-star" style="color:#f59e0b;"></i> <span class="rating-value">...</span>
                </div>
            </div>
        </div>
    `).join('');
    filtered.forEach(ad => {
        loadAndDisplaySellerRating(ad.user_id, document.querySelector(`.seller-rating[data-seller-id="${ad.user_id}"]`));
    });
}

async function loadAds() {
    if (adsLoaded) { renderAds(); return; }
    if (isLoading) return;
    isLoading = true;
    loadAttempts++;
    try {
        const adsCount = document.getElementById('adsCount');
        if (adsCount) adsCount.textContent = t('loading');
        const response = await fetch(`${API_URL}/ads`);
        if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
        ads = await response.json();
        adsLoaded = true;
        loadAttempts = 0;
        renderAds();
    } catch (error) {
        adsLoaded = false;
        const grid = document.getElementById('adsGrid');
        if (grid) {
            grid.innerHTML = `
                <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:rgba(255,255,255,0.3);">
                    <p>${t('error_load')}</p>
                    <p style="font-size:12px;color:rgba(255,255,255,0.2);margin-top:8px;">${error.message}</p>
                    <button onclick="loadAds()" style="margin-top:16px;padding:12px 24px;background:#6366f1;border:none;border-radius:12px;color:#fff;cursor:pointer;font-size:14px;font-family:inherit;">
                        <i class="fas fa-sync"></i> ${t('retry')}
                    </button>
                </div>
            `;
        }
        const adsCount = document.getElementById('adsCount');
        if (adsCount) adsCount.textContent = 'Ошибка';
    } finally {
        isLoading = false;
    }
}

// ========================================
// КАТЕГОРИИ
// ========================================
document.addEventListener('click', function(e) {
    const catItem = e.target.closest('.category-item');
    if (catItem) {
        document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
        catItem.classList.add('active');
        const category = catItem.dataset.category;
        currentCategory = category;
        if (category === 'all') {
            if (adsLoaded && ads.length > 0) renderAds(); else loadAds();
        } else {
            if (adsLoaded && ads.length > 0) {
                const filtered = ads.filter(ad => ad.category === category);
                renderAdsFiltered(filtered);
            } else {
                loadAds().then(() => {
                    const filtered = ads.filter(ad => ad.category === category);
                    renderAdsFiltered(filtered);
                });
            }
        }
    }
});

// ========================================
// ДЕТАЛЬНАЯ КАРТОЧКА
// ========================================
window.openAdDetail = async function(id) {
    try {
        const response = await fetch(`${API_URL}/ads/${id}`);
        if (!response.ok) throw new Error('Не найдено');
        const ad = await response.json();
        
        const listView = document.getElementById('adsListView');
        const detailView = document.getElementById('adDetailView');
        const detailCard = document.getElementById('adDetailCard');
        const sidebar = document.getElementById('categoriesSidebar');
        const mainContent = document.getElementById('mainContent');
        
        if (sidebar) { sidebar.classList.add('hidden'); sidebar.classList.remove('open'); }
        if (mainContent) mainContent.classList.add('expanded');
        if (listView) listView.style.display = 'none';
        if (detailView) { detailView.style.display = 'block'; detailView.style.animation = 'fadeSlide 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; }
        
        let imageUrl = ad.image;
        if (!imageUrl || imageUrl === 'null' || imageUrl === 'undefined') {
            imageUrl = 'https://via.placeholder.com/800x500/6366f1/ffffff?text=' + encodeURIComponent(ad.title);
        }
        
        let sellerRating = { average: 0, count: 0 };
        try {
            const revRes = await fetch(`${API_URL}/reviews/user/${ad.user_id}`);
            if (revRes.ok) sellerRating = await revRes.json();
        } catch (e) {}
        
        const ratingHtml = sellerRating.count > 0
            ? `<i class="fas fa-star" style="color:#f59e0b;"></i> ${sellerRating.average.toFixed(1)} (${sellerRating.count} отзывов)`
            : 'Нет отзывов';
        
        if (detailCard) {
            detailCard.innerHTML = `
                <div style="position:relative;border-radius:12px;overflow:hidden;background:rgba(255,255,255,0.02);">
                    <img src="${imageUrl}" alt="${ad.title}" style="width:100%;max-height:450px;object-fit:cover;display:block;" onerror="this.src='https://via.placeholder.com/800x500/6366f1/ffffff?text=Товар'">
                    <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,0.7));padding:30px 20px 20px;">
                        <div style="font-size:32px;font-weight:700;color:#60a5fa;">${ad.displayPrice || Number(ad.price).toLocaleString() + ' ₽'}</div>
                    </div>
                </div>
                <div style="padding:24px 0;">
                    <div style="font-size:24px;font-weight:700;color:#fff;">${ad.title}</div>
                    <div style="display:flex;gap:20px;color:rgba(255,255,255,0.3);font-size:14px;margin:12px 0;">
                        <span><i class="fas fa-map-marker-alt"></i> ${ad.city || t('city')}</span>
                        <span><i class="fas fa-eye"></i> ${ad.views || 0} ${t('views_count')}</span>
                        <span><i class="fas fa-user"></i> ${ad.user_name || 'Продавец'}</span>
                        <span>⭐ ${ratingHtml}</span>
                        ${ad.category === 'keys' ? `<span style="color:#f59e0b;"><i class="fas fa-key"></i> Ключ для игр</span>` : ''}
                    </div>
                    <div style="color:rgba(255,255,255,0.6);font-size:16px;line-height:1.8;margin:16px 0;padding:20px;background:rgba(255,255,255,0.03);border-radius:12px;border:1px solid rgba(255,255,255,0.04);">
                        ${ad.description || t('no_description')}
                        ${ad.delivery_time ? `<div style="margin-top:10px;color:#f59e0b;font-size:14px;"><i class="fas fa-clock"></i> Время доставки: ${ad.delivery_time} мин</div>` : ''}
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px;">
                        <button onclick="openContactModal('${ad.phone || '+7 (999) 123-45-67'}', ${ad.user_id}, '${ad.user_name || 'Продавец'}')" style="padding:16px;background:linear-gradient(135deg,#22c55e,#16a34a);border:none;border-radius:12px;color:white;font-weight:700;font-size:16px;cursor:pointer;transition:transform 0.2s,box-shadow 0.3s;display:flex;align-items:center;justify-content:center;gap:10px;font-family:inherit;">
                            <i class="fas fa-phone"></i> ${t('contact')}
                        </button>
                        <button onclick="buyAd(${ad.id})" style="padding:16px;background:linear-gradient(135deg,#f59e0b,#d97706);border:none;border-radius:12px;color:#fff;font-weight:700;font-size:16px;cursor:pointer;transition:transform 0.2s,box-shadow 0.3s;display:flex;align-items:center;justify-content:center;gap:10px;font-family:inherit;">
                            <i class="fas fa-shopping-cart"></i> ${t('buy')}
                        </button>
                        <button onclick="openComplaintModal(${ad.id})" style="grid-column:1/-1;padding:16px;background:rgba(239,68,68,0.1);border:1px solid rgba(239,68,68,0.2);border-radius:12px;color:#ef4444;font-weight:600;font-size:16px;cursor:pointer;transition:background 0.3s;display:flex;align-items:center;justify-content:center;gap:10px;font-family:inherit;">
                            <i class="fas fa-flag"></i> ${t('complain')}
                        </button>
                    </div>
                </div>
            `;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        showNotification('Ошибка загрузки объявления', 'error');
    }
};

// ========================================
// ПОКУПКА
// ========================================
async function buyAd(adId) {
    if (!currentUser) { showNotification(t('need_auth'), 'warning'); openModal('authModal'); return; }
    const ad = ads.find(a => a.id === adId);
    if (!ad) { showNotification('Товар не найден', 'error'); return; }
    if (ad.user_id === currentUser.id) { showNotification(t('buy_own'), 'error'); return; }
    if (ad.category === 'keys') {
        currentBuyAdId = adId;
        openModal('emailModal');
        document.getElementById('emailInput').value = '';
        return;
    }
    if (!confirm(`${t('buy_confirm')} "${ad.title}" ${t('buy_confirm_text')} ${ad.displayPrice || ad.price + ' ₽'}?`)) return;
    await processBuy(adId);
}

async function processBuyWithEmail(adId, email) {
    try {
        const ad = ads.find(a => a.id === adId);
        if (!ad) { showNotification('Товар не найден', 'error'); return; }
        const response = await fetch(`${API_URL}/buy/${adId}`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken, 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Ошибка покупки');
        showNotification('✅ Ключ отправлен на почту ' + email, 'success');
        await loadAds();
        await loadOrders();
        document.getElementById('backToAds')?.click();
        setTimeout(() => openChatWithUser(ad.user_id, ad.user_name || t('profile')), 500);
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

async function processBuy(adId) {
    try {
        const ad = ads.find(a => a.id === adId);
        if (!ad) { showNotification('Товар не найден', 'error'); return; }
        const response = await fetch(`${API_URL}/buy/${adId}`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Ошибка покупки');
        showNotification(t('order_created'), 'success');
        await loadAds();
        await loadOrders();
        document.getElementById('backToAds')?.click();
        setTimeout(() => openChatWithUser(ad.user_id, ad.user_name || t('profile')), 500);
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

// ========================================
// EMAIL МОДАЛКА
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('emailModal')) {
        const emailModal = document.createElement('div');
        emailModal.className = 'modal';
        emailModal.id = 'emailModal';
        emailModal.innerHTML = `
            <div class="modal-content glass-effect" style="max-width:420px;text-align:center;">
                <span class="modal-close" id="emailModalClose">&times;</span>
                <div style="font-size:48px;margin-bottom:12px;">✉️</div>
                <h2 style="font-size:22px;color:#fff;">${t('enter_email')}</h2>
                <p style="color:rgba(255,255,255,0.4);font-size:14px;margin-bottom:20px;">Для получения ключа для игры</p>
                <div class="form-group">
                    <input type="email" id="emailInput" placeholder="example@mail.com" style="width:100%;padding:12px 16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;font-size:15px;color:#fff;font-family:inherit;">
                </div>
                <button onclick="confirmEmailBuy()" class="btn btn-primary btn-full" style="padding:14px;background:linear-gradient(135deg,#f59e0b,#d97706);border:none;border-radius:12px;color:#fff;font-weight:700;font-size:16px;cursor:pointer;width:100%;font-family:inherit;">
                    <i class="fas fa-arrow-right"></i> ${t('next')}
                </button>
            </div>
        `;
        document.body.appendChild(emailModal);
        document.getElementById('emailModalClose').onclick = () => closeModal('emailModal');
        emailModal.onclick = (e) => { if (e.target === this) closeModal('emailModal'); };
        document.getElementById('emailInput').addEventListener('keypress', (e) => { if (e.key === 'Enter') confirmEmailBuy(); });
    }
});

function confirmEmailBuy() {
    const email = document.getElementById('emailInput').value.trim();
    if (!email || !email.includes('@') || !email.includes('.')) {
        showNotification('Введите корректный email!', 'warning');
        return;
    }
    closeModal('emailModal');
    const ad = ads.find(a => a.id === currentBuyAdId);
    if (!ad) return;
    if (!confirm(`${t('buy_confirm')} "${ad.title}" ${t('buy_confirm_text')} ${ad.displayPrice || ad.price + ' ₽'}?`)) return;
    processBuyWithEmail(currentBuyAdId, email);
}

// ========================================
// КОНТАКТЫ И ЧАТЫ
// ========================================
function openContactModal(phone, sellerId, sellerName) {
    const phoneDisplay = document.getElementById('contactPhoneNumber');
    if (phoneDisplay) phoneDisplay.textContent = phone || 'Номер не указан';
    currentChatPartner = { id: sellerId, name: sellerName || 'Продавец' };
    openModal('contactModal');
}

async function loadChatsCount() {
    if (!currentUser) return;
    try {
        const response = await fetch(`${API_URL}/chats`, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!response.ok) throw new Error('Ошибка загрузки');
        chatsData = await response.json();
        const unread = chatsData.reduce((sum, c) => sum + (c.unread || 0), 0);
        const badge = document.getElementById('chatsBadge');
        if (badge) {
            if (unread > 0) { badge.textContent = unread; badge.style.display = 'inline'; }
            else badge.style.display = 'none';
        }
        return chatsData;
    } catch (e) { return []; }
}

async function loadChats() {
    if (!currentUser) return;
    try {
        const response = await fetch(`${API_URL}/chats`, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!response.ok) throw new Error('Ошибка загрузки');
        chatsData = await response.json();
        renderChats();
        return chatsData;
    } catch (e) { return []; }
}

function renderChats() {
    const container = document.getElementById('chatsList');
    if (!container) return;
    if (!chatsData || chatsData.length === 0) {
        container.innerHTML = `<p style="color:rgba(255,255,255,0.3);text-align:center;padding:20px;">💬 ${t('no_chats')}</p>`;
        return;
    }
    container.innerHTML = chatsData.map(c => `
        <div onclick="openChat(${c.id})" style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:12px;cursor:pointer;background:rgba(255,255,255,0.02);margin-bottom:4px;transition:background 0.2s;">
            <div style="position:relative;flex-shrink:0;">
                <img src="${c.other?.avatar || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(c.other?.name || 'U') + '&background=6366f1&color=fff&size=64'}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,0.06);">
                ${c.unread > 0 ? `<span style="position:absolute;top:-4px;right:-4px;background:#ef4444;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:20px;min-width:20px;text-align:center;">${c.unread}</span>` : ''}
            </div>
            <div style="flex:1;min-width:0;">
                <div style="font-weight:600;font-size:15px;color:#fff;">${c.other?.name || 'Пользователь'}</div>
                <div style="font-size:13px;color:rgba(255,255,255,0.4);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c.lastMessage || 'Нет сообщений'}</div>
            </div>
            <div style="font-size:11px;color:rgba(255,255,255,0.2);flex-shrink:0;">${c.lastMessageTime ? new Date(c.lastMessageTime).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : ''}</div>
        </div>
    `).join('');
}

async function openChat(chatId) {
    currentChatId = chatId;
    const chat = chatsData.find(c => c.id === chatId);
    if (!chat) return;
    openModal('chatModal');
    try {
        const response = await fetch(`${API_URL}/chats/${chatId}/messages`, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!response.ok) throw new Error('Ошибка загрузки');
        const messages = await response.json();
        renderChatMessages(messages, chat);
        await loadChatsCount();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

function renderChatMessages(messages, chat) {
    const container = document.getElementById('chatMessagesContainer');
    if (!container) return;
    const other = chat?.other || { name: 'Пользователь' };
    let html = `
        <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:12px;">
            <div style="display:flex;align-items:center;gap:10px;">
                <i class="fas fa-user-circle" style="font-size:28px;color:#60a5fa;"></i>
                <span style="font-size:16px;font-weight:600;">${other?.name || 'Пользователь'}</span>
            </div>
            <button onclick="closeChatModal()" style="background:none;border:none;color:rgba(255,255,255,0.3);font-size:20px;cursor:pointer;padding:4px 8px;font-family:inherit;">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;max-height:400px;overflow-y:auto;padding:4px;" id="chatMessagesList">
    `;
    if (!messages || messages.length === 0) {
        html += `<p style="color:rgba(255,255,255,0.3);text-align:center;padding:20px;">${t('start_chat')}</p>`;
    } else {
        messages.forEach(m => {
            const isSent = m.sender_id === currentUser?.id;
            html += `
                <div style="max-width:75%;padding:10px 14px;border-radius:12px;${isSent ? 'background:linear-gradient(135deg,#007bff,#6366f1);margin-left:auto;border-bottom-right-radius:4px;' : 'background:rgba(255,255,255,0.06);margin-right:auto;border-bottom-left-radius:4px;'}">
                    <div style="font-size:14px;word-wrap:break-word;">${m.content}</div>
                    <div style="font-size:10px;color:rgba(255,255,255,0.3);margin-top:4px;text-align:right;">${new Date(m.created_at).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</div>
                </div>
            `;
        });
    }
    html += `
        </div>
        <div style="display:flex;gap:10px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.06);">
            <input type="text" id="chatInput" placeholder="${t('write_message')}" style="flex:1;padding:12px 16px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;font-size:14px;color:#fff;outline:none;font-family:inherit;" onkeypress="if(event.key==='Enter') sendChatMessage()">
            <button onclick="sendChatMessage()" id="chatSendBtn" style="padding:12px 18px;background:linear-gradient(135deg,#007bff,#6366f1);border:none;border-radius:12px;color:#fff;cursor:pointer;font-size:16px;min-width:48px;font-family:inherit;">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    `;
    container.innerHTML = html;
    const messagesList = document.getElementById('chatMessagesList');
    if (messagesList) messagesList.scrollTop = messagesList.scrollHeight;
}

function closeChatModal() {
    closeModal('chatModal');
    currentChatId = null;
    loadChats();
}

async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    if (!input || !input.value.trim()) return;
    const content = input.value.trim();
    input.value = '';
    try {
        const response = await fetch(`${API_URL}/chats/${currentChatId}/messages`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken, 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });
        if (!response.ok) throw new Error('Ошибка отправки');
        await openChat(currentChatId);
        await loadChatsCount();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

async function openChatWithUser(userId, userName) {
    if (!currentUser) { showNotification(t('need_auth'), 'warning'); openModal('authModal'); return; }
    try {
        const response = await fetch(`${API_URL}/chats`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken, 'Content-Type': 'application/json' },
            body: JSON.stringify({ otherUserId: userId })
        });
        if (!response.ok) throw new Error('Ошибка создания чата');
        const chat = await response.json();
        await loadChats();
        await openChat(chat.id);
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

// ========================================
// СООБЩЕНИЯ
// ========================================
async function loadMessagesCount() {
    if (!currentUser) return;
    try {
        const response = await fetch(`${API_URL}/messages`, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!response.ok) throw new Error('Ошибка загрузки');
        messagesData = await response.json();
        const unread = messagesData.filter(m => !m.read && m.from_admin).length;
        const badge = document.getElementById('messagesBadge');
        if (badge) {
            if (unread > 0) { badge.textContent = unread; badge.style.display = 'inline'; }
            else badge.style.display = 'none';
        }
    } catch (e) {}
}

async function loadMessages() {
    if (!currentUser) return;
    try {
        const response = await fetch(`${API_URL}/messages`, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!response.ok) throw new Error('Ошибка загрузки сообщений');
        messagesData = await response.json();
        renderMessages();
    } catch (error) { console.error(error); }
}

function renderMessages() {
    const container = document.getElementById('messagesList');
    if (!container) return;
    if (!messagesData || messagesData.length === 0) {
        container.innerHTML = `<p style="color:rgba(255,255,255,0.3);text-align:center;padding:20px;">📭 ${t('no_messages')}</p>`;
        return;
    }
    container.innerHTML = messagesData.map(m => `
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:14px;margin-bottom:12px;${m.from_admin ? 'border-left:3px solid #6366f1;' : 'border-left:3px solid #22c55e;'}">
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;">
                <span style="font-weight:600;">${m.from_admin ? '🛡️ Администратор' : '👤 ' + (m.sender_name || 'Пользователь')}</span>
                <span style="color:rgba(255,255,255,0.3);font-size:12px;">${new Date(m.created_at).toLocaleString()}</span>
            </div>
            ${m.title ? `<div style="font-size:16px;font-weight:700;color:#ef4444;margin:4px 0;">${m.title}</div>` : ''}
            <div style="color:rgba(255,255,255,0.7);font-size:14px;line-height:1.6;white-space:pre-wrap;">${m.content.replace(/\n/g, '<br>')}</div>
        </div>
    `).join('');
}

// ========================================
// ЗАКАЗЫ И ОТЗЫВЫ
// ========================================
async function loadOrders(filter) {
    if (!currentUser) return;
    try {
        let url = `${API_URL}/orders`;
        if (filter) url += `?status=${filter}`;
        const response = await fetch(url, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!response.ok) throw new Error('Ошибка загрузки заказов');
        ordersData = await response.json();
        return ordersData;
    } catch (error) { return []; }
}

function renderOrders(filter) {
    const container = document.getElementById('ordersList');
    if (!container) return;
    let filtered = ordersData;
    if (filter && filter !== 'all') filtered = ordersData.filter(o => o.status === filter);
    if (!filtered || filtered.length === 0) {
        container.innerHTML = `<p style="color:rgba(255,255,255,0.3);text-align:center;padding:20px;">📦 ${t('no_orders')}</p>`;
        return;
    }
    
    container.innerHTML = filtered.map(o => {
        const isBuyer = o.buyer_id === currentUser?.id;
        const isSeller = o.seller_id === currentUser?.id;
        const statusMap = {
            'pending': '⏳ Ожидает оплаты',
            'buyer_sent': '💰 СРЕДСТВА ОТПРАВЛЕНЫ!',
            'confirmed': '✅ Подтверждён',
            'cancelled': '❌ Отменён',
            'dispute': '⚖️ Спор открыт'
        };
        
        let actions = '';
        if (isBuyer && o.status === 'pending') {
            actions += `
                <button onclick="buyerSentMoney(${o.id})" style="padding:8px 16px;font-size:13px;border:none;border-radius:10px;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;cursor:pointer;font-family:inherit;margin-right:10px;">
                    <i class="fas fa-money-bill-wave"></i> ${t('i_sent_money')}
                </button>
                <button onclick="cancelOrder(${o.id})" style="padding:8px 16px;font-size:13px;border:none;border-radius:10px;background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;cursor:pointer;font-family:inherit;">
                    <i class="fas fa-times"></i> ${t('cancel_order')}
                </button>
            `;
        }
        if (isBuyer && o.status === 'buyer_sent') {
            actions = `<div style="font-size:13px;color:#f59e0b;">💰 Средства отправлены! Ожидайте подтверждения</div>`;
        }
        if (isSeller && o.status === 'buyer_sent') {
            actions += `
                <button onclick="confirmOrder(${o.id})" style="padding:8px 16px;font-size:13px;border:none;border-radius:10px;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;cursor:pointer;font-family:inherit;margin-right:10px;">
                    <i class="fas fa-check"></i> ${t('confirm_order')}
                </button>
                <button onclick="sellerDidNotReceive(${o.id})" style="padding:8px 16px;font-size:13px;border:none;border-radius:10px;background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;cursor:pointer;font-family:inherit;">
                    <i class="fas fa-times-circle"></i> ${t('i_did_not_receive')}
                </button>
            `;
        }
        if (isSeller && o.status === 'pending') {
            actions = `<div style="font-size:13px;color:rgba(255,255,255,0.4);">⏳ Ожидание оплаты от покупателя</div>`;
        }
        if (isSeller && o.status === 'confirmed') {
            actions = `<div style="font-size:13px;color:#22c55e;">✅ Заказ выполнен!</div>`;
        }
        if (o.status === 'dispute' && currentUser?.username === 'risha') {
            actions += `
                <div style="margin-top:10px;padding:10px;background:rgba(239,68,68,0.1);border-radius:8px;border:1px solid rgba(239,68,68,0.2);">
                    <div style="font-weight:600;color:#ef4444;margin-bottom:8px;">⚖️ РАЗБИРАТЕЛЬСТВО СПОРА</div>
                    <div style="display:flex;gap:10px;flex-wrap:wrap;">
                        <button onclick="closeDispute(${o.id}, 'closed')" style="padding:8px 16px;font-size:13px;border:none;border-radius:10px;background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;cursor:pointer;font-family:inherit;">
                            <i class="fas fa-check-circle"></i> ${t('question_closed')}
                        </button>
                        <button onclick="openTransferModal(${o.id})" style="padding:8px 16px;font-size:13px;border:none;border-radius:10px;background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;cursor:pointer;font-family:inherit;">
                            <i class="fas fa-exchange-alt"></i> ${t('transfer_money')}
                        </button>
                    </div>
                </div>
            `;
        }
        
        let reviewBlock = '';
        if (isBuyer && o.status === 'confirmed') {
            reviewBlock = `
                <div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.06);">
                    <button onclick="openReviewModal(${o.id}, ${o.ad_id}, ${o.seller_id})" style="padding:8px 16px;font-size:13px;border:none;border-radius:10px;background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;cursor:pointer;font-family:inherit;">
                        <i class="fas fa-star"></i> ${t('leave_review')}
                    </button>
                </div>
            `;
        }
        
        return `
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;margin-bottom:12px;">
                <div style="display:flex;justify-content:space-between;align-items:start;">
                    <div>
                        <div style="font-weight:600;font-size:16px;">${o.ad_title}</div>
                        <div style="color:#60a5fa;font-weight:600;font-size:14px;">${o.ad_price} ₽</div>
                        <div style="font-size:13px;color:rgba(255,255,255,0.4);margin-top:4px;">
                            ${isBuyer ? t('you_buyer') : isSeller ? t('you_seller') : ''}
                        </div>
                        ${o.email ? `<div style="font-size:12px;color:#f59e0b;margin-top:4px;"><i class="fas fa-envelope"></i> ${o.email}</div>` : ''}
                    </div>
                    <div style="text-align:right;">
                        <div style="font-size:13px;font-weight:600;color:${o.status === 'confirmed' ? '#22c55e' : o.status === 'cancelled' ? '#ef4444' : o.status === 'buyer_sent' ? '#f59e0b' : o.status === 'dispute' ? '#ef4444' : '#f59e0b'};">
                            ${statusMap[o.status] || o.status}
                        </div>
                        <div style="font-size:11px;color:rgba(255,255,255,0.2);margin-top:4px;">
                            ${new Date(o.created_at).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                ${actions ? `<div style="margin-top:10px;">${actions}</div>` : ''}
                ${reviewBlock}
                ${o.status === 'confirmed' && !isSeller ? `
                    <div style="margin-top:10px;font-size:13px;color:#22c55e;">
                        ✅ ${t('order_completed')}
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

// ========================================
// ОТЗЫВЫ (РЕЙТИНГИ)
// ========================================
let currentReviewOrderId = null;
let currentReviewAdId = null;
let currentReviewSellerId = null;
let selectedRating = 0;

function openReviewModal(orderId, adId, sellerId) {
    currentReviewOrderId = orderId;
    currentReviewAdId = adId;
    currentReviewSellerId = sellerId;
    selectedRating = 0;
    
    const starsContainer = document.getElementById('reviewStars');
    if (starsContainer) starsContainer.innerHTML = '';
    
    const commentInput = document.getElementById('reviewComment');
    if (commentInput) commentInput.value = '';
    
    const submitBtn = document.getElementById('reviewSubmitBtn');
    if (submitBtn) submitBtn.disabled = false;
    
    openModal('reviewModal');
    renderStars(0);
}

function renderStars(rating) {
    const container = document.getElementById('reviewStars');
    if (!container) return;
    
    let html = '';
    for (let i = 1; i <= 5; i++) {
        const color = i <= rating ? '#f59e0b' : 'rgba(255,255,255,0.2)';
        html += `<i class="fas fa-star" data-rating="${i}" style="font-size:28px;cursor:pointer;color:${color};transition:color 0.2s;margin-right:6px;" onclick="selectRating(${i})"></i>`;
    }
    container.innerHTML = html;
}

function selectRating(rating) {
    selectedRating = rating;
    renderStars(rating);
}

async function submitReview() {
    if (selectedRating < 1) {
        showNotification(t('select_stars') || 'Выберите количество звёзд', 'warning');
        return;
    }
    
    const comment = document.getElementById('reviewComment')?.value.trim() || '';
    const submitBtn = document.getElementById('reviewSubmitBtn');
    
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Отправка...';
    }
    
    try {
        console.log('📤 Отправка отзыва...');
        console.log('  ad_id:', currentReviewAdId);
        console.log('  seller_id:', currentReviewSellerId);
        console.log('  rating:', selectedRating);
        console.log('  comment:', comment);
        
        const response = await fetch(`${API_URL}/reviews`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + authToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ad_id: currentReviewAdId,
                seller_id: currentReviewSellerId,
                rating: selectedRating,
                comment: comment
            })
        });
        
        const data = await response.json();
        console.log('📥 Ответ сервера:', data);
        
        if (!response.ok) {
            throw new Error(data.error || t('review_error') || 'Ошибка отправки отзыва');
        }
        
        showNotification(t('review_sent') || '✅ Отзыв отправлен!', 'success');
        closeModal('reviewModal');
        await loadOrders();
        renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
        if (document.querySelector(`.seller-rating[data-seller-id="${currentReviewSellerId}"]`)) {
            loadAndDisplaySellerRating(currentReviewSellerId, document.querySelector(`.seller-rating[data-seller-id="${currentReviewSellerId}"]`));
        }
    } catch (error) {
        console.error('❌ Ошибка отправки отзыва:', error);
        showNotification('❌ ' + error.message, 'error');
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = t('send_review') || 'Отправить отзыв';
        }
    }
}

// ========================================
// ЗАГРУЗКА АВАТАРА
// ========================================
async function uploadAvatar(file) {
    if (!currentUser) {
        showNotification(t('need_auth'), 'warning');
        return;
    }
    
    const formData = new FormData();
    formData.append('avatar', file);
    
    try {
        console.log('📤 Загрузка аватара...');
        console.log('  файл:', file.name, file.size, file.type);
        
        const response = await fetch(`${API_URL}/upload-avatar`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + authToken
            },
            body: formData
        });
        
        const data = await response.json();
        console.log('📥 Ответ сервера:', data);
        
        if (!response.ok) {
            throw new Error(data.error || 'Ошибка загрузки аватара');
        }
        
        if (data.success && data.avatar) {
            currentUser.avatar = data.avatar;
            localStorage.setItem('synzxx_user', JSON.stringify(currentUser));
            updateUI();
            showNotification('✅ Аватар обновлён!', 'success');
        } else {
            throw new Error('Не удалось загрузить аватар');
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки аватара:', error);
        showNotification('❌ ' + error.message, 'error');
    }
}

// ========================================
// ФУНКЦИИ ДЛЯ ЗАКАЗОВ
// ========================================
async function buyerSentMoney(orderId) {
    if (!confirm('Вы точно отправили средства продавцу?')) return;
    try {
        const response = await fetch(`${API_URL}/orders/${orderId}/buyer-sent`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!response.ok) {
            if (response.status === 404) {
                showNotification('💰 Средства отправлены!', 'success');
                const order = ordersData.find(o => o.id === orderId);
                if (order) order.status = 'buyer_sent';
                await loadOrders();
                renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
                return;
            }
            throw new Error('Ошибка');
        }
        showNotification('💰 Средства отправлены!', 'success');
        await loadOrders();
        renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

async function sellerDidNotReceive(orderId) {
    if (!confirm(t('call_support') + '?')) return;
    try {
        const response = await fetch(`${API_URL}/orders/${orderId}/dispute`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!response.ok) {
            if (response.status === 404) {
                showNotification(t('support_notified'), 'success');
                const order = ordersData.find(o => o.id === orderId);
                if (order) order.status = 'dispute';
                await loadOrders();
                renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
                return;
            }
            throw new Error('Ошибка');
        }
        showNotification(t('support_notified'), 'success');
        await loadOrders();
        renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

async function closeDispute(orderId, action) {
    if (!confirm('Вы уверены?')) return;
    try {
        const response = await fetch(`${API_URL}/orders/${orderId}/close-dispute`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken, 'Content-Type': 'application/json' },
            body: JSON.stringify({ action })
        });
        if (!response.ok) {
            if (response.status === 404) {
                showNotification('✅ Спор закрыт', 'success');
                const order = ordersData.find(o => o.id === orderId);
                if (order) order.status = 'confirmed';
                await loadOrders();
                renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
                return;
            }
            throw new Error('Ошибка');
        }
        showNotification('✅ Спор закрыт', 'success');
        await loadOrders();
        renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

function openTransferModal(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (!order) return;
    const seller = usersData?.find(u => u.id === order.seller_id);
    if (!seller) return;
    const modal = document.createElement('div');
    modal.className = 'modal show';
    modal.id = 'transferModal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content glass-effect" style="max-width:450px;">
            <span class="modal-close" onclick="closeModal('transferModal')">&times;</span>
            <h2 style="font-size:22px;color:#fff;text-align:center;">${t('transfer_to_seller')}</h2>
            <div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:16px;margin:16px 0;">
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
                    <span style="color:rgba(255,255,255,0.5);">${t('seller_nick')}:</span>
                    <span style="color:#60a5fa;font-weight:600;">${seller.name || seller.username}</span>
                </div>
                <div style="display:flex;justify-content:space-between;padding:8px 0;">
                    <span style="color:rgba(255,255,255,0.5);">${t('product_cost')}:</span>
                    <span style="color:#f59e0b;font-weight:600;">${order.ad_price} ₽</span>
                </div>
            </div>
            <button onclick="transferMoneyToSeller(${orderId})" class="btn btn-primary btn-full" style="padding:14px;background:linear-gradient(135deg,#f59e0b,#d97706);border:none;border-radius:12px;color:#fff;font-weight:700;font-size:16px;cursor:pointer;width:100%;font-family:inherit;">
                <i class="fas fa-exchange-alt"></i> ${t('transfer')}
            </button>
        </div>
    `;
    document.body.appendChild(modal);
}

async function transferMoneyToSeller(orderId) {
    try {
        const response = await fetch(`${API_URL}/orders/${orderId}/transfer`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!response.ok) {
            if (response.status === 404) {
                showNotification('✅ Деньги переведены продавцу', 'success');
                closeModal('transferModal');
                document.getElementById('transferModal')?.remove();
                const order = ordersData.find(o => o.id === orderId);
                if (order) order.status = 'confirmed';
                await loadOrders();
                renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
                return;
            }
            throw new Error('Ошибка перевода');
        }
        showNotification('✅ Деньги переведены продавцу', 'success');
        closeModal('transferModal');
        document.getElementById('transferModal')?.remove();
        await loadOrders();
        renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

async function confirmOrder(orderId) {
    if (!confirm(t('confirm_order_text'))) return;
    try {
        const response = await fetch(`${API_URL}/orders/${orderId}/confirm`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!response.ok) throw new Error('Ошибка');
        showNotification(t('order_confirmed'), 'success');
        await loadOrders();
        renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
        await loadAds();
        updateUI();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

async function cancelOrder(orderId) {
    if (!confirm(t('cancel_order_text'))) return;
    try {
        const response = await fetch(`${API_URL}/orders/${orderId}/cancel`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!response.ok) throw new Error('Ошибка');
        showNotification(t('order_cancelled'), 'error');
        await loadOrders();
        renderOrders(document.querySelector('.orders-filter .active')?.dataset?.filter || 'all');
        await loadAds();
        updateUI();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

// ========================================
// ЖАЛОБЫ
// ========================================
async function loadComplaints() {
    if (!currentUser || (currentUser.username !== 'risha' && currentUser.username !== 'notsynzxx')) return;
    try {
        const response = await fetch(`${API_URL}/complaints`, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!response.ok) throw new Error('Ошибка загрузки жалоб');
        complaintsData = await response.json();
        const badge = document.getElementById('complaintsBadge');
        if (badge) {
            if (complaintsData.length > 0) { badge.textContent = complaintsData.length; badge.style.display = 'inline'; }
            else badge.style.display = 'none';
        }
    } catch (e) {}
}

function renderComplaints() {
    const container = document.getElementById('complaintsList');
    if (!container) return;
    if (!complaintsData || complaintsData.length === 0) {
        container.innerHTML = `<p style="color:rgba(255,255,255,0.3);text-align:center;padding:20px;">${t('no_active_complaints')}</p>`;
        return;
    }
    container.innerHTML = complaintsData.map(c => `
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;margin-bottom:12px;">
            <div style="font-weight:600;color:#ef4444;font-size:15px;">⚠️ ${t('complaint_reason')}: ${c.reason}</div>
            <div style="color:rgba(255,255,255,0.5);font-size:14px;margin:4px 0 8px;padding:8px 12px;background:rgba(255,255,255,0.03);border-radius:8px;border-left:3px solid rgba(239,68,68,0.3);">${t('complaint_comment')}: ${c.comment || t('complaint_empty')}</div>
            <div style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,0.03);padding:10px 12px;border-radius:10px;margin:8px 0 12px;border:1px solid rgba(255,255,255,0.06);">
                <img src="${c.ad_image || 'https://via.placeholder.com/50x50/6366f1/ffffff?text=Т'}" style="width:50px;height:50px;object-fit:cover;border-radius:8px;">
                <div style="flex:1;">
                    <div style="font-weight:500;color:#fff;font-size:14px;">${c.ad_title}</div>
                    <div style="font-size:14px;color:#60a5fa;font-weight:600;">${c.ad_price}</div>
                    <div style="font-size:12px;color:rgba(255,255,255,0.3);">От: ${c.user_name}</div>
                </div>
            </div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
                <button onclick="deleteAdViaComplaint(${c.id})" style="padding:8px 16px;font-size:13px;border:none;border-radius:10px;background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;cursor:pointer;font-family:inherit;">
                    <i class="fas fa-trash"></i> ${t('delete_ad')}
                </button>
                <button onclick="resolveComplaint(${c.id}, 'false')" style="padding:8px 16px;font-size:13px;border:none;border-radius:10px;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;cursor:pointer;font-family:inherit;">
                    <i class="fas fa-check"></i> ${t('false_complaint')}
                </button>
            </div>
        </div>
    `).join('');
}

async function deleteAdViaComplaint(complaintId) {
    if (!confirm(t('delete_ad') + '?')) return;
    try {
        const response = await fetch(`${API_URL}/complaints/${complaintId}/delete-ad`, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!response.ok) throw new Error('Ошибка удаления');
        showNotification(t('ad_deleted'), 'success');
        await loadComplaints();
        renderComplaints();
        await loadAds();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

async function resolveComplaint(complaintId, status) {
    try {
        const response = await fetch(`${API_URL}/complaints/${complaintId}`, {
            method: 'PUT',
            headers: { 'Authorization': 'Bearer ' + authToken, 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        if (!response.ok) throw new Error('Ошибка');
        showNotification(t('complaint_resolved'), 'success');
        await loadComplaints();
        renderComplaints();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

function openComplaintModal(adId) {
    complaintAdId = adId;
    openModal('complaintModal');
    const form = document.getElementById('complaintForm');
    if (form) form.reset();
}

document.addEventListener('submit', async function(e) {
    if (e.target.id === 'complaintForm') {
        e.preventDefault();
        if (!currentUser) { showNotification(t('need_auth'), 'warning'); closeModal('complaintModal'); openModal('authModal'); return; }
        const reason = document.querySelector('input[name="complaintReason"]:checked')?.value;
        const comment = document.getElementById('complaintComment')?.value;
        if (!reason) { showNotification(t('select_reason'), 'warning'); return; }
        try {
            const response = await fetch(`${API_URL}/complaints`, {
                method: 'POST',
                headers: { 'Authorization': 'Bearer ' + authToken, 'Content-Type': 'application/json' },
                body: JSON.stringify({ ad_id: complaintAdId, reason, comment })
            });
            if (!response.ok) throw new Error('Ошибка отправки жалобы');
            showNotification(t('complaint_sent'), 'success');
            closeModal('complaintModal');
            e.target.reset();
        } catch (error) {
            showNotification('❌ ' + error.message, 'error');
        }
    }
});

// ========================================
// МОДЕРАЦИЯ
// ========================================
async function loadPendingAds() {
    if (!currentUser || currentUser.username !== 'notsynzxx') return;
    try {
        const response = await fetch(`${API_URL}/pending-ads`, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!response.ok) throw new Error('Ошибка загрузки');
        pendingAdsData = await response.json();
        renderModeration();
    } catch (e) {}
}

function renderModeration() {
    const container = document.getElementById('moderationList');
    if (!container) return;
    if (!pendingAdsData || pendingAdsData.length === 0) {
        container.innerHTML = `<p style="color:rgba(255,255,255,0.3);text-align:center;padding:20px;">${t('no_pending_ads')}</p>`;
        return;
    }
    container.innerHTML = pendingAdsData.map(ad => `
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:16px;margin-bottom:12px;">
            <div style="display:flex;gap:16px;flex-wrap:wrap;">
                <img src="${ad.image || 'https://via.placeholder.com/100x100/6366f1/ffffff?text=' + encodeURIComponent(ad.title)}" style="width:100px;height:100px;object-fit:cover;border-radius:8px;flex-shrink:0;" onerror="this.src='https://via.placeholder.com/100x100/6366f1/ffffff?text=Товар'">
                <div style="flex:1;min-width:200px;">
                    <div style="font-weight:600;font-size:16px;">${ad.title}</div>
                    <div style="color:#60a5fa;font-weight:600;font-size:15px;">${ad.displayPrice || Number(ad.price).toLocaleString() + ' ₽'}</div>
                    <div style="color:rgba(255,255,255,0.4);font-size:13px;margin:4px 0;">
                        <i class="fas fa-user"></i> ${ad.user_name || 'Пользователь'}
                        <span style="margin-left:12px;"><i class="fas fa-tag"></i> ${ad.category || 'Без категории'}</span>
                        ${ad.delivery_time ? `<span style="margin-left:12px;color:#f59e0b;"><i class="fas fa-clock"></i> ${ad.delivery_time} мин</span>` : ''}
                    </div>
                    <div style="color:rgba(255,255,255,0.5);font-size:13px;margin:4px 0;">${ad.description || t('no_description')}</div>
                </div>
            </div>
            <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;">
                <button onclick="approveAd(${ad.id})" style="padding:10px 20px;font-size:14px;border:none;border-radius:10px;background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;cursor:pointer;font-family:inherit;">
                    <i class="fas fa-check"></i> ${t('approve')}
                </button>
                <button onclick="rejectAd(${ad.id})" style="padding:10px 20px;font-size:14px;border:none;border-radius:10px;background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;cursor:pointer;font-family:inherit;">
                    <i class="fas fa-times"></i> ${t('reject')}
                </button>
            </div>
        </div>
    `).join('');
}

async function approveAd(adId) {
    if (!confirm('Вы уверены, что хотите одобрить это объявление?')) return;
    try {
        const response = await fetch(`${API_URL}/approve-ad/${adId}`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!response.ok) throw new Error('Ошибка одобрения');
        showNotification(t('ad_approved'), 'success');
        await loadPendingAds();
        await loadAds();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

async function rejectAd(adId) {
    const reason = prompt(t('reject_reason'));
    if (reason === null) return;
    if (!reason.trim()) { showNotification('Пожалуйста, укажите причину отклонения!', 'warning'); return; }
    try {
        const response = await fetch(`${API_URL}/reject-ad/${adId}`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken, 'Content-Type': 'application/json' },
            body: JSON.stringify({ reason: reason.trim() })
        });
        if (!response.ok) throw new Error('Ошибка отклонения');
        showNotification(t('ad_rejected'), 'success');
        await loadPendingAds();
        await loadAds();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

// ========================================
// ПОПОЛНЕНИЕ БАЛАНСА
// ========================================
async function searchUsers() {
    const query = document.getElementById('adminUserSearch')?.value.trim();
    const container = document.getElementById('adminUserResults');
    const form = document.getElementById('adminBalanceForm');
    if (!container) return;
    if (!query) { container.innerHTML = ''; if (form) form.style.display = 'none'; return; }
    if (!currentUser || (currentUser.username !== 'risha' && currentUser.username !== 'notsynzxx')) {
        container.innerHTML = `<p style="color:rgba(255,255,255,0.3);padding:10px;">Требуются права администратора</p>`;
        return;
    }
    try {
        const response = await fetch(`${API_URL}/users`, { headers: { 'Authorization': 'Bearer ' + authToken } });
        if (!response.ok) throw new Error('Ошибка поиска');
        usersData = await response.json();
        const filtered = usersData.filter(u => u.username.toLowerCase().includes(query.toLowerCase()) || (u.name && u.name.toLowerCase().includes(query.toLowerCase())));
        if (!filtered || filtered.length === 0) {
            container.innerHTML = `<p style="color:rgba(255,255,255,0.3);padding:10px;">${t('users_not_found')}</p>`;
            if (form) form.style.display = 'none';
            return;
        }
        container.innerHTML = filtered.map(u => `
            <div onclick="selectUserAdmin(${u.id}, '${u.username}')" style="padding:10px 14px;background:rgba(255,255,255,0.03);border-radius:8px;cursor:pointer;margin-bottom:6px;border:1px solid rgba(255,255,255,0.04);font-family:inherit;transition:background 0.2s;" 
                 onmouseover="this.style.background='rgba(255,255,255,0.06)'" onmouseout="this.style.background='rgba(255,255,255,0.03)'">
                <div style="font-weight:500;">${u.name || u.username}</div>
                <div style="font-size:13px;color:rgba(255,255,255,0.3);">@${u.username} | ${t('balance')}: ${u.balance || 0} ₽</div>
            </div>
        `).join('');
    } catch (error) {
        container.innerHTML = `<p style="color:rgba(255,255,255,0.3);padding:10px;">❌ ${error.message}</p>`;
    }
}

function selectUserAdmin(id, username) {
    selectedUserId = id;
    const display = document.getElementById('adminSelectedUser');
    const form = document.getElementById('adminBalanceForm');
    const results = document.getElementById('adminUserResults');
    if (display) { display.value = username; display.style.color = '#60a5fa'; }
    if (form) form.style.display = 'block';
    if (results) results.innerHTML = '';
}

async function addBalanceToUser() {
    if (!selectedUserId) { showNotification(t('select_user'), 'warning'); return; }
    const amount = parseInt(document.getElementById('adminBalanceAmount')?.value);
    if (!amount || amount <= 0) { showNotification('Введите корректную сумму!', 'warning'); return; }
    try {
        const response = await fetch(`${API_URL}/admin/add-balance`, {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + authToken, 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: document.getElementById('adminSelectedUser').value, amount })
        });
        if (!response.ok) throw new Error('Ошибка пополнения');
        showNotification(`${t('balance_added')} ${document.getElementById('adminSelectedUser').value} пополнен на ${amount} ₽`, 'success');
        document.getElementById('adminBalanceAmount').value = '';
        document.getElementById('adminSelectedUser').value = '';
        document.getElementById('adminBalanceForm').style.display = 'none';
        document.getElementById('adminUserResults').innerHTML = '';
        selectedUserId = null;
        await updateUI();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

// ========================================
// АДМИН-ПАНЕЛЬ
// ========================================
let adminUsers = [];
let adminAds = [];
let adminOrders = [];
let adminReviews = [];

async function loadAdminData() {
    if (!currentUser || currentUser.username !== 'notsynzxx') return;
    try {
        const [usersRes, adsRes, ordersRes, reviewsRes] = await Promise.all([
            fetch(`${API_URL}/admin/users`, { headers: { 'Authorization': 'Bearer ' + authToken } }),
            fetch(`${API_URL}/admin/ads`, { headers: { 'Authorization': 'Bearer ' + authToken } }),
            fetch(`${API_URL}/admin/orders`, { headers: { 'Authorization': 'Bearer ' + authToken } }),
            fetch(`${API_URL}/admin/reviews`, { headers: { 'Authorization': 'Bearer ' + authToken } })
        ]);
        if (usersRes.ok) adminUsers = await usersRes.json();
        if (adsRes.ok) adminAds = await adsRes.json();
        if (ordersRes.ok) adminOrders = await ordersRes.json();
        if (reviewsRes.ok) adminReviews = await reviewsRes.json();
        renderAdminPanel();
    } catch (error) { console.error('Ошибка загрузки админ-данных:', error); }
}

function renderAdminPanel() {
    const container = document.getElementById('adminPanelContent');
    if (!container) return;
    let html = `<h3>Пользователи (${adminUsers.length})</h3><table class="admin-table"><tr><th>ID</th><th>Логин</th><th>Имя</th><th>Баланс</th><th>Админ</th><th>Действия</th></tr>`;
    adminUsers.forEach(u => {
        html += `<tr>
            <td>${u.id}</td>
            <td>${u.username}</td>
            <td>${u.name}</td>
            <td>${u.balance}</td>
            <td>${u.is_admin ? '✅' : '❌'}</td>
            <td>
                <button onclick="toggleAdmin(${u.id})">${u.is_admin ? 'Снять' : 'Назначить'}</button>
                <button onclick="deleteUser(${u.id})" class="danger">Удалить</button>
            </td>
        </tr>`;
    });
    html += `</table>`;
    container.innerHTML = html;
}

async function toggleAdmin(userId) {
    if (!confirm('Изменить права администратора?')) return;
    try {
        const response = await fetch(`${API_URL}/admin/users/${userId}/toggle-admin`, {
            method: 'PUT',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!response.ok) throw new Error('Ошибка');
        showNotification('✅ Права обновлены', 'success');
        await loadAdminData();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

async function deleteUser(userId) {
    if (!confirm('Удалить пользователя?')) return;
    try {
        const response = await fetch(`${API_URL}/admin/users/${userId}`, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + authToken }
        });
        if (!response.ok) throw new Error('Ошибка');
        showNotification('✅ Пользователь удалён', 'success');
        await loadAdminData();
    } catch (error) {
        showNotification('❌ ' + error.message, 'error');
    }
}

function toggleCategoryFields(category) {
    const phoneGroup = document.getElementById('phoneGroup');
    const deliveryGroup = document.getElementById('deliveryGroup');
    const deliveryInput = document.getElementById('deliveryTime');
    if (category === 'keys') {
        if (phoneGroup) phoneGroup.style.display = 'none';
        if (deliveryGroup) deliveryGroup.style.display = 'block';
        if (deliveryInput) { deliveryInput.min = 1; deliveryInput.max = 1440; deliveryInput.placeholder = 'Введите время в минутах (1-1440)'; }
    } else {
        if (phoneGroup) phoneGroup.style.display = 'block';
        if (deliveryGroup) deliveryGroup.style.display = 'none';
    }
}

// ========================================
// ГЛОБАЛЬНАЯ ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ МОБИЛЬНОГО МЕНЮ
// ========================================
function closeMobileMenu() {
    const menu = document.getElementById('mobileProfileMenu');
    if (menu) menu.classList.remove('show');
    const arrow = document.getElementById('mobileProfileArrow');
    if (arrow) arrow.classList.remove('open');
}

// ========================================
// ИНИЦИАЛИЗАЦИЯ
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SYNZXX инициализация...');
    
    const savedUser = localStorage.getItem('synzxx_user');
    const savedToken = localStorage.getItem('synzxx_token');
    if (savedUser && savedToken) {
        try {
            currentUser = JSON.parse(savedUser);
            authToken = savedToken;
            console.log('✅ Сессия восстановлена для:', currentUser.username);
        } catch (e) {
            localStorage.removeItem('synzxx_user');
            localStorage.removeItem('synzxx_token');
        }
    }

    // === КНОПКИ АВТОРИЗАЦИИ ===
    document.getElementById('loginBtn')?.addEventListener('click', (e) => { e.preventDefault(); switchAuthMode('login'); openModal('authModal'); });
    document.getElementById('registerBtn')?.addEventListener('click', (e) => { e.preventDefault(); switchAuthMode('register'); openModal('authModal'); });

    // === МОБИЛЬНЫЕ КНОПКИ ===
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');
    
    if (mobileLoginBtn) {
        mobileLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🟢 Мобильная кнопка "Войти" нажата');
            switchAuthMode('login');
            openModal('authModal');
        });
        mobileLoginBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            console.log('🟢 Мобильная кнопка "Войти" нажата (touch)');
            switchAuthMode('login');
            openModal('authModal');
        });
    }
    
    if (mobileRegisterBtn) {
        mobileRegisterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🟢 Мобильная кнопка "Регистрация" нажата');
            switchAuthMode('register');
            openModal('authModal');
        });
        mobileRegisterBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            console.log('🟢 Мобильная кнопка "Регистрация" нажата (touch)');
            switchAuthMode('register');
            openModal('authModal');
        });
    }
    
    document.getElementById('mobileSellBtn')?.addEventListener('click', (e) => {
        e.preventDefault();
        if (!currentUser) { showNotification(t('need_auth'), 'warning'); openModal('authModal'); return; }
        openModal('createModal');
        document.getElementById('selectedCategoryName').textContent = 'Выберите категорию';
        document.getElementById('adCategory').value = '';
        toggleCategoryFields('');
    });

    // === МОБИЛЬНАЯ ПАНЕЛЬ - СТРЕЛКА ===
    const mobileProfileBtn = document.getElementById('mobileProfileBtn');
    if (mobileProfileBtn) {
        mobileProfileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const menu = document.getElementById('mobileProfileMenu');
            const arrow = document.getElementById('mobileProfileArrow');
            if (menu) {
                menu.classList.toggle('show');
                if (arrow) arrow.classList.toggle('open');
            }
        });
        mobileProfileBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const menu = document.getElementById('mobileProfileMenu');
            const arrow = document.getElementById('mobileProfileArrow');
            if (menu) {
                menu.classList.toggle('show');
                if (arrow) arrow.classList.toggle('open');
            }
        });
    }

    // === ЗАКРЫТИЕ МОБИЛЬНОГО МЕНЮ ===
    document.getElementById('mobileMenuClose')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('mobileProfileMenu')?.classList.remove('show');
        document.getElementById('mobileProfileArrow')?.classList.remove('open');
    });
    document.getElementById('mobileMenuClose')?.addEventListener('touchend', function(e) {
        e.preventDefault();
        document.getElementById('mobileProfileMenu')?.classList.remove('show');
        document.getElementById('mobileProfileArrow')?.classList.remove('open');
    });

    // Закрытие при клике вне
    document.addEventListener('click', function(e) {
        const menu = document.getElementById('mobileProfileMenu');
        const btn = document.getElementById('mobileProfileBtn');
        if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('show');
            document.getElementById('mobileProfileArrow')?.classList.remove('open');
        }
    });
    document.addEventListener('touchend', function(e) {
        const menu = document.getElementById('mobileProfileMenu');
        const btn = document.getElementById('mobileProfileBtn');
        if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove('show');
            document.getElementById('mobileProfileArrow')?.classList.remove('open');
        }
    });

    // === МОДАЛКИ ===
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.onclick = function() { const modal = this.closest('.modal'); if (modal) closeModal(modal.id); };
        btn.addEventListener('touchend', function(e) {
            e.preventDefault();
            const modal = this.closest('.modal');
            if (modal) closeModal(modal.id);
        });
    });
    document.querySelectorAll('.modal').forEach(modal => {
        modal.onclick = function(e) { if (e.target === this) closeModal(this.id); };
        modal.addEventListener('touchend', function(e) {
            if (e.target === this) closeModal(this.id);
        });
    });

    // === АВТОРИЗАЦИЯ ===
    document.getElementById('authForm')?.addEventListener('submit', async function(e) {
        e.preventDefault();
        const mode = this.dataset.mode || 'login';
        const username = document.getElementById('authUsername')?.value.trim();
        const password = document.getElementById('authPassword')?.value;
        if (mode === 'login') {
            await loginUser(username, password);
        } else {
            const password2 = document.getElementById('authPassword2')?.value;
            const name = document.getElementById('authName')?.value.trim();
            await registerUser(username, password, password2, name || username);
        }
    });
    document.getElementById('toggleAuthLink')?.addEventListener('click', function(e) {
        e.preventDefault();
        const form = document.getElementById('authForm');
        const mode = form?.dataset?.mode === 'login' ? 'register' : 'login';
        switchAuthMode(mode);
    });

    // === ПРОФИЛЬ ===
    document.getElementById('profileBtn')?.addEventListener('click', function(e) {
        e.stopPropagation();
        document.getElementById('profileDropdown')?.classList.toggle('show');
    });
    document.getElementById('profileBtn')?.addEventListener('touchend', function(e) {
        e.stopPropagation();
        document.getElementById('profileDropdown')?.classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('profileDropdown');
        const btn = document.getElementById('profileBtn');
        if (dropdown && btn && !dropdown.contains(e.target) && !btn.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });

    // === ПУНКТЫ МЕНЮ ===
    document.getElementById('dropdownChangeName')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        openModal('changeNameModal');
    });
    document.getElementById('dropdownChats')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        openModal('chatsModal');
        loadChats();
    });
    document.getElementById('dropdownMessages')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        openModal('messagesModal');
        loadMessages();
    });
    document.getElementById('dropdownOrders')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        openModal('ordersModal');
        renderOrders('all');
    });
    document.getElementById('dropdownModeration')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        openModal('moderationModal');
        loadPendingAds();
    });
    document.getElementById('dropdownComplaints')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        openModal('complaintsModal');
        renderComplaints();
    });
    document.getElementById('dropdownAddBalance')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        openModal('adminAddBalanceModal');
        document.getElementById('adminUserSearch').value = '';
        document.getElementById('adminUserResults').innerHTML = '';
        document.getElementById('adminSelectedUser').value = '';
        document.getElementById('adminBalanceForm').style.display = 'none';
        selectedUserId = null;
    });
    document.getElementById('dropdownAdminPanel')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        openModal('adminPanelModal');
        loadAdminData();
    });
    document.getElementById('dropdownTheme')?.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('synzxx_theme', isLight ? 'light' : 'dark');
        document.querySelectorAll('.theme-toggle').forEach(el => el.classList.toggle('active', isLight));
    });
    document.getElementById('dropdownLanguage')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        openModal('languageModal');
    });
    document.getElementById('dropdownLogout')?.addEventListener('click', function() {
        document.getElementById('profileDropdown')?.classList.remove('show');
        logoutUser();
    });

    // === ПРОДАЖА ===
    document.getElementById('sellBtn')?.addEventListener('click', function() {
        if (!currentUser) { showNotification(t('need_auth'), 'warning'); openModal('authModal'); return; }
        openModal('createModal');
        document.getElementById('selectedCategoryName').textContent = 'Выберите категорию';
        document.getElementById('adCategory').value = '';
        toggleCategoryFields('');
    });

    // === НАЗАД ===
    document.getElementById('backToAds')?.addEventListener('click', function() {
        document.getElementById('adDetailView').style.display = 'none';
        document.getElementById('adsListView').style.display = 'block';
        document.getElementById('categoriesSidebar')?.classList.remove('hidden');
        document.getElementById('mainContent')?.classList.remove('expanded');
    });

    // === КАТЕГОРИИ ===
    document.getElementById('toggleCategories')?.addEventListener('click', function() {
        document.getElementById('categoriesSidebar')?.classList.toggle('open');
    });

    // === КОНТАКТЫ ===
    document.getElementById('contactChatBtn')?.addEventListener('click', function() {
        if (!currentUser) { showNotification(t('need_auth'), 'warning'); closeModal('contactModal'); openModal('authModal'); return; }
        closeModal('contactModal');
        openChatWithUser(currentChatPartner.id, currentChatPartner.name);
    });
    document.getElementById('contactCallBtn')?.addEventListener('click', function() {
        const phone = document.getElementById('contactPhoneNumber')?.textContent;
        if (phone && phone !== 'Номер не указан') window.location.href = 'tel:' + phone.replace(/\D/g, '');
    });

    // === ФИЛЬТРЫ ЗАКАЗОВ ===
    document.querySelectorAll('.orders-filter .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.orders-filter .btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderOrders(this.dataset.filter);
        });
    });

    // === АДМИН: ПОИСК ===
    document.getElementById('adminUserSearch')?.addEventListener('input', function() {
        clearTimeout(this._searchTimeout);
        this._searchTimeout = setTimeout(searchUsers, 500);
    });
    document.getElementById('adminBalanceSubmit')?.addEventListener('click', addBalanceToUser);

    // === ЯЗЫК ===
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', function() { setLanguage(this.dataset.lang); });
    });

    // === КНОПКИ ЦЕНЫ ===
    const priceFixed = document.getElementById('priceFixedBtn');
    const priceHour = document.getElementById('priceHourBtn');
    const priceNegotiable = document.getElementById('priceNegotiableBtn');
    const priceInput = document.getElementById('adPrice');
    const priceDisplay = document.getElementById('priceDisplay');
    if (priceFixed && priceHour && priceNegotiable) {
        function updatePriceButtons(activeBtn) {
            document.querySelectorAll('.price-type-btn').forEach(b => b.classList.remove('active'));
            if (activeBtn) { activeBtn.classList.add('active'); activeBtn.style.background = 'rgba(99,102,241,0.15)'; activeBtn.style.color = '#60a5fa'; }
            document.querySelectorAll('.price-type-btn:not(.active)').forEach(b => { b.style.background = 'transparent'; b.style.color = 'rgba(255,255,255,0.5)'; });
        }
        priceFixed.addEventListener('click', function() { priceType = 'fixed'; priceInput.disabled = false; priceInput.style.opacity = '1'; priceInput.placeholder = 'Введите цену'; priceInput.value = ''; priceDisplay.textContent = '₽'; updatePriceButtons(this); });
        priceHour.addEventListener('click', function() { priceType = 'hour'; priceInput.disabled = false; priceInput.style.opacity = '1'; priceInput.placeholder = 'Введите цену за час'; priceInput.value = ''; priceDisplay.textContent = '₽/час'; updatePriceButtons(this); });
        priceNegotiable.addEventListener('click', function() { priceType = 'negotiable'; priceInput.disabled = true; priceInput.style.opacity = '0.5'; priceInput.placeholder = 'ДОГОВОРНАЯ'; priceInput.value = ''; priceDisplay.textContent = 'ДОГОВОРНАЯ'; updatePriceButtons(this); });
    }

    // === ВЫБОР КАТЕГОРИИ ===
    const categorySelect = document.getElementById('categorySelect');
    const categoryDropdown = document.getElementById('categoryDropdown');
    if (categorySelect && categoryDropdown) {
        categorySelect.addEventListener('click', function(e) { e.stopPropagation(); categoryDropdown.classList.toggle('show'); this.classList.toggle('open'); });
        document.querySelectorAll('.category-option').forEach(opt => {
            opt.addEventListener('click', function() {
                const value = this.dataset.value;
                const name = this.textContent.trim();
                document.getElementById('adCategory').value = value;
                document.getElementById('selectedCategoryName').textContent = name;
                document.querySelectorAll('.category-option').forEach(o => o.classList.remove('selected'));
                this.classList.add('selected');
                categoryDropdown.classList.remove('show');
                categorySelect.classList.remove('open');
                toggleCategoryFields(value);
            });
        });
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.category-select-wrapper')) {
                categoryDropdown.classList.remove('show');
                categorySelect.classList.remove('open');
            }
        });
    }

    // === ЗАГРУЗКА ФОТО ===
    const fileInput = document.getElementById('adImage');
    const preview = document.getElementById('imagePreview');
    if (fileInput && preview) {
        fileInput.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    preview.innerHTML = `<img src="${event.target.result}" alt="Preview" style="max-width:100%;max-height:200px;border-radius:8px;object-fit:contain;">`;
                    preview.classList.add('has-image');
                    preview.style.padding = '6px';
                    preview.style.borderColor = 'rgba(34,197,94,0.3)';
                };
                reader.readAsDataURL(this.files[0]);
            } else {
                preview.innerHTML = `<i class="fas fa-cloud-upload-alt"></i><span>Нажмите или перетащите фото</span>`;
                preview.classList.remove('has-image');
                preview.style.padding = '24px 16px';
                preview.style.borderColor = 'rgba(255,255,255,0.08)';
            }
        });
        preview.addEventListener('dragover', function(e) { e.preventDefault(); this.style.borderColor = 'rgba(0,123,255,0.5)'; this.style.background = 'rgba(0,123,255,0.05)'; });
        preview.addEventListener('dragleave', function(e) { e.preventDefault(); this.style.borderColor = 'rgba(255,255,255,0.08)'; this.style.background = 'rgba(255,255,255,0.03)'; });
        preview.addEventListener('drop', function(e) {
            e.preventDefault();
            this.style.borderColor = 'rgba(255,255,255,0.08)';
            this.style.background = 'rgba(255,255,255,0.03)';
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                fileInput.files = e.dataTransfer.files;
                fileInput.dispatchEvent(new Event('change'));
            }
        });
        preview.addEventListener('click', function() { fileInput.click(); });
    }

    // === ТЕЛЕФОН ===
    document.getElementById('adPhone')?.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        if (value.length === 0) { this.value = ''; return; }
        if (value.length > 11) value = value.substring(0, 11);
        let formatted = '+7';
        if (value.length > 1) formatted += ' (' + value.substring(1, 4);
        if (value.length > 4) formatted += ') ' + value.substring(4, 7);
        if (value.length > 7) formatted += '-' + value.substring(7, 9);
        if (value.length > 9) formatted += '-' + value.substring(9, 11);
        this.value = formatted;
    });

    // === КНОПКА + РЯДОМ С БАЛАНСОМ ===
    document.getElementById('addBalanceBtn')?.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!currentUser) { showNotification(t('need_auth'), 'warning'); openModal('authModal'); return; }
        openModal('addBalanceModal');
    });

    // === ЗАГРУЗКА АВАТАРА ===
    document.getElementById('avatarInput')?.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            uploadAvatar(this.files[0]);
        }
    });
    document.querySelectorAll('.profile-avatar, .dropdown-avatar, .mobile-profile-avatar').forEach(el => {
        el.addEventListener('click', function() {
            document.getElementById('avatarInput')?.click();
        });
    });

    // === ОТПРАВКА ФОРМЫ ОБЪЯВЛЕНИЯ ===
    const adForm = document.getElementById('adForm');
    if (adForm) {
        adForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            if (!currentUser) { showNotification(t('need_auth'), 'warning'); openModal('authModal'); return; }
            const title = document.getElementById('adTitle')?.value.trim();
            const price = document.getElementById('adPrice')?.value.trim();
            const category = document.getElementById('adCategory')?.value;
            const description = document.getElementById('adDescription')?.value.trim();
            const phone = document.getElementById('adPhone')?.value.trim();
            const city = document.getElementById('adCity')?.value.trim();
            const deliveryTime = document.getElementById('deliveryTime')?.value;
            
            if (!title) { showNotification('Введите название товара!', 'warning'); return; }
            if (!price && priceType !== 'negotiable') { showNotification('Введите цену товара!', 'warning'); return; }
            if (!category) { showNotification(t('select_category_alert'), 'warning'); return; }
            if (category === 'keys') {
                if (!deliveryTime || parseInt(deliveryTime) < 1 || parseInt(deliveryTime) > 1440) {
                    showNotification('Введите время доставки от 1 до 1440 минут!', 'warning');
                    return;
                }
            } else {
                if (!phone) { showNotification('Введите номер телефона!', 'warning'); return; }
                const phoneClean = phone.replace(/\D/g, '');
                if (!/^7\d{10}$/.test(phoneClean) && !/^8\d{10}$/.test(phoneClean)) {
                    showNotification(t('phone_format'), 'warning');
                    return;
                }
            }
            
            const submitBtn = document.getElementById('publishBtn');
            const originalText = submitBtn?.textContent || 'Опубликовать';
            if (submitBtn) { submitBtn.textContent = t('send_to_moderation'); submitBtn.disabled = true; }
            try {
                const formData = new FormData();
                formData.append('title', title);
                formData.append('price', priceType === 'negotiable' ? '0' : price);
                formData.append('category', category);
                formData.append('description', description);
                if (phone) formData.append('phone', phone.replace(/\D/g, ''));
                formData.append('city', city || '');
                formData.append('priceType', priceType);
                if (deliveryTime) formData.append('deliveryTime', deliveryTime);
                const file = document.getElementById('adImage')?.files[0];
                if (file) formData.append('image', file);
                
                const response = await fetch(`${API_URL}/ads`, {
                    method: 'POST',
                    headers: { 'Authorization': 'Bearer ' + authToken },
                    body: formData
                });
                const data = await response.json();
                if (!response.ok) throw new Error(data.error || 'Ошибка публикации');
                showNotification(t('ad_sent'), 'success');
                closeModal('createModal');
                adForm.reset();
                document.getElementById('imagePreview').innerHTML = `<i class="fas fa-cloud-upload-alt"></i><span>Нажмите или перетащите фото</span>`;
                document.getElementById('imagePreview').classList.remove('has-image');
                document.getElementById('imagePreview').style.padding = '24px 16px';
                document.getElementById('imagePreview').style.borderColor = 'rgba(255,255,255,0.08)';
                toggleCategoryFields('');
                priceType = 'fixed';
                document.querySelectorAll('.price-type-btn').forEach(b => { b.classList.remove('active'); b.style.background = 'transparent'; b.style.color = 'rgba(255,255,255,0.5)'; });
                document.getElementById('priceFixedBtn').classList.add('active');
                document.getElementById('priceFixedBtn').style.background = 'rgba(99,102,241,0.15)';
                document.getElementById('priceFixedBtn').style.color = '#60a5fa';
                document.getElementById('adPrice').disabled = false;
                document.getElementById('adPrice').style.opacity = '1';
                document.getElementById('adPrice').placeholder = 'Введите цену';
                document.getElementById('priceDisplay').textContent = '₽';
                await loadAds();
            } catch (error) {
                showNotification('❌ ' + error.message, 'error');
            } finally {
                if (submitBtn) { submitBtn.textContent = originalText; submitBtn.disabled = false; }
            }
        });
    }

    // === ЗАПУСК ===
    updateUI();
    loadAds();
    
    // Восстановление темы
    const savedTheme = localStorage.getItem('synzxx_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelectorAll('.theme-toggle').forEach(el => el.classList.add('active'));
    }
});