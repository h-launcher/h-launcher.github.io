document.addEventListener('DOMContentLoaded', () => {
    console.log('HLauncher site loaded');

    // Add scroll effect for navbar
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(8, 12, 20, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.6)';
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(8, 12, 20, 0.95), rgba(8, 12, 20, 0.8))';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
        }
    });

    // Simple platform selector interaction on Download page (if exists)
    const platforms = document.querySelectorAll('.platform-card');
    if (platforms.length > 0) {
        platforms.forEach(p => {
            p.addEventListener('click', () => {
                platforms.forEach(other => other.classList.remove('active'));
                p.classList.add('active');
            });
        });
    }
    // Modal Logic
    const downloadBtn = document.querySelector('.btn-mega-download');
    // Only if we are on the download page and button exists
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            openSupportModal();
        });
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link (optional, for single-page feeling or anchor links)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

function openSupportModal() {
    const modal = document.getElementById('support-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

function closeSupportModal() {
    const modal = document.getElementById('support-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

// --- Internationalization (i18n) ---

const translations = {
    'ru': {
        'nav.home': 'Главная',
        'nav.blog': 'Блог',
        'nav.media': 'Медиа',
        'nav.community': 'Сообщество',
        'nav.download': 'Скачать',
        'hero.tagline': 'Приключения Ждут',
        'hero.sub': 'Самый продвинутый кастомный лаунчер для Hytale от MrVitalik.',
        'hero.cta': 'Скачать Сейчас',
        'news.title': 'Последние Новости',
        'news.view_all': 'Смотреть все →',
        'app.footer.privacy': 'Политика конфиденциальности',
        'app.footer.terms': 'Условия использования',
        'app.footer.contacts': 'Контакты',
        'app.footer.disclaimer': 'Не связано с Hypixel Studios. Hytale является торговой маркой Hypixel Studios.',
        'download.title': 'Начни Своё Приключение',
        'download.subtitle': 'Загрузите HLauncher и погрузитесь в мир Hytale с лучшими модами и оптимизацией.',
        'download.version': 'Версия',
        'download.updated': 'Обновлено',
        'download.btn_win': 'Скачать для Windows',
        'specs.title': 'Системные Требования',
        'specs.min': 'Минимальные требования',
        'specs.rec': 'Рекомендуемые требования',
        'specs.rec_badge': 'Рекомендуем',
        // News items
        'news.1.title': 'Хотфиксы: Январь 2026',
        'news.1.excerpt': 'Исправления теней, улучшенная стабильность серверов, правки компаса и другие важные изменения.',
        'news.2.title': 'Hytale Patch Notes - Update 2',
        'news.2.excerpt': 'Новая кастомизация, WorldGen V2, улучшения фермерства и вечные посевы.',
        'news.3.title': 'Hytale Patch Notes - Update 1',
        'news.3.excerpt': 'Первое обновление: Динозавры, изменения в крафте и новые визуальные эффекты.',
        'news.read_more': 'Читать статью',
        // Modal
        'modal.title': 'Понравился Лаунчер?',
        'modal.text': 'HLauncher — бесплатный проект с открытым кодом. Если вам нравится, поддержите разработку!',
        'modal.support': 'Поддержать на Ko-Fi',
        'modal.skip': 'Спасибо, я просто скачаю',
        // Secondary Pages
        'app.back_home': 'На главную',
        'app.back_blog': '← Вернуться в блог',
        'community.title': 'Сообщество',
        'community.coming_soon': 'Скоро Открытие',
        'community.text': 'Мы готовим платформу для общения, форумы и списки серверов. Следите за новостями!',
        'media.title': 'Медиа',
        'media.dev_title': 'В разработке',
        'media.text': 'Этот раздел находится в стадии активной разработки. Скоро здесь появятся скриншоты, видео и обои.',
        'blog.header.title': 'Блог Разработки',
        'blog.header.sub': 'Обновления, патчноуты и новости от команды.',
        'blog.sidebar.cat': 'Категории',
        'blog.cat.announcements': 'Анонсы',
        'blog.cat.patchnotes': 'Патчноуты',
        'blog.cat.community': 'Сообщество',
        'blog.cat.dev': 'Разработка',
        'blog.sidebar.archive': 'Архив',
        'date.jan26': 'Январь 2026',
        'date.dec25': 'Декабрь 2025',
        'date.nov25': 'Ноябрь 2025',
        'date.jan28': '28 Января 2026',
        'date.jan24': '24 Января 2026',
        'date.jan17': '17 Января 2026',
        'date.jan15': '15 Января 2026',
        'date.jan13': '13 Января 2026',
        'news.read_more_long': 'Читать далее',
        // Blog Excerpts (longer)
        'news.1.blog_excerpt': 'Мы исправили несколько проблем со стабильностью, о которых сообщало сообщество, касающихся интеграции шейдеров, а также улучшили работу серверов.',
        'news.2.blog_excerpt': 'Косметика, кастомизация, WorldGen V2, изменения в фермерстве и улучшенная стабильность. Узнайте подробности второго обновления!',
        'news.3.blog_excerpt': 'Добро пожаловать в первое обновление! Динозавры в подземных джунглях, новые звуки и баланс инвентаря.',
        'news.4.blog_excerpt': 'Момент настал, сегодня Hytale выходит в Ранний Доступ! Узнайте, что вас ждет в первой версии игры.',
        'news.4.title': 'Hytale наконец-то вышел!',
        // Categories / General
        'cat.perf': 'Производительность',
        'cat.stab': 'Стабильность',
        'cat.game': 'Геймплей',
        'cat.conn': 'Подключение',
        'cat.launch': 'Лаунчер',
        'cat.serv': 'Сервисы',
        'cat.world': 'Мир и Окружение',
        'cat.npc': 'NPC и Существа',
        'cat.craft': 'Крафт, Предметы и Фермерство',
        'cat.audio': 'Аудио и Визуал',
        'cat.ui': 'UI и Производительность',
        'cat.custom': 'Кастомизация',
        'cat.combat': 'Бой и Баланс',
        'cat.bugs': 'Исправления Багов',

        // Post 1
        'p1.title': 'Хотфиксы: Январь 2026',
        'p1.intro': 'Этот хотфикс решает наиболее критические проблемы, о которых сообщалось с момента запуска. Дополнительные исправления менее срочных проблем находятся в работе и будут включены в будущие патчи. Следите за обновлениями!',
        'p1.ul1': '<li>Исправлены проблемы с отображением теней.</li><li>Уменьшены подергивания и задержка ввода на видеокартах NVIDIA.</li>',
        'p1.ul2': '<li>Исправлено несколько вылетов, включая связанные с погодой, экипировкой брони и отключением от сервера.</li><li>Улучшена надежность входа и стабильность серверов.</li>',
        'p1.ul3': '<li>Исправлен компас, указывающий неверное направление.</li><li>Улучшена установка блоков в творческом режиме.</li><li>Улучшена логика телепортера для предотвращения бесконечной телепортации.</li><li>Исправлены осечки арбалета и другие взаимодействия.</li>',
        'p1.ul4': '<li>Общая стабильность серверов и улучшения сети.</li><li>Игра теперь переключается в оффлайн-режим при ошибке аутентификации вместо зависания.</li><li>Исправлены ошибки "invalid token", возникающие при рассинхронизации системного времени.</li>',
        'p1.ul5': '<li>Улучшена производительность клиента за счет оптимизации планирования фоновых задач.</li><li>Исправлена проблема, когда выброшенные предметы застревали внутри блоков.</li><li>Исправлен вылет сервера, который мог происходить в определенных ситуациях.</li>',
        'p1.ul6': '<li>Добавлено сообщение после загрузки сервера, если требуется аутентификация.</li><li>Клиент теперь переключается в оффлайн-режим, когда сессия становится недействительной.</li>',
        'p1.ul7': '<li>Исправлен вылет при выборе определенных причесок после выбора бровей в редакторе персонажа.</li><li>Исправлен вылет при создании скриншотов у пользователей с неанглоязычными именами папок.</li><li>Исправлена проблема, мешающая запуску игры на норвежских локалях.</li><li>Исправлен вылет при использовании вёдер. Внимание: это сломало некоторые верстаки, их нужно разрушить и поставить заново.</li><li>Предотвращена возможность привязки левой кнопки мыши к некоторым действиям.</li><li>Общие улучшения стабильности.</li>',
        'p1.ul8': '<li>Добавлено предупреждение, информирующее игроков, если время на их компьютере установлено неверно. Это исправляет некоторые проблемы с аутентификацией.</li><li>Исправлена проблема аутентификации, возникавшая периодически при входе.</li>',
        'p1.ul9': '<li>Исправлена уязвимость, позволявшая игрокам подделывать свои никнеймы (чисто визуально).</li><li>Улучшено кэширование патчей игры.</li><li>Улучшен сервис отправки электронной почты для обработки больших объемов писем.</li>',

        // Post 3
        'p3.intro': 'Добро пожаловать в первое обновление Hytale! Сегодня мы выпускаем новый контент наряду с рядом исправлений и улучшений качества жизни.',
        'p3.ul1': '<li>Добавлены динозавры и другие NPC в подземные джунгли (пока с временным поведением).</li><li>Канализации Опустошенных земель (Devastated Lands) получили правильные атмосферные эффекты.</li><li>Области под вулканами теперь используют вулканические эффекты.</li><li>Исправлено размещение сущностей и текстур в деревнях Феранов.</li>',
        'p3.ul2': '<li>Добавлено сопротивление отбрасыванию для NPC, у которых его не было.</li><li>Огненные NPC теперь иммунны к урону от огня.</li><li>Улучшено боевое поведение Кристального Земляного Голема.</li><li>Скелеты больше не получают урон от утопления.</li><li>Квибеки иммунны к урону от кактусов и ежевики.</li><li>Осторожные хищники (например, Лис) не будут атаковать игроков первыми.</li>',
        'p3.ul3': '<li>Рюкзак теперь легче получить: Базовый требует верстак Тир 1 (ранее Тир 2) и 8 Средней кожи (ранее 16).</li><li>Верстаки могут брать ресурсы из сундуков в радиусе 14 блоков (ранее 7).</li><li>Все сырые фрукты и овощи дают только Регенерацию I. Готовка дает больше бонусов.</li><li>Выброшенные предметы больше не застревают в блоках.</li><li>Кукуруза теперь дает 1 Эссенцию Жизни вместо 4.</li><li>Бревна теперь отображают тип древесины в подсказке (например, "Твердая древесина").</li>',
        'p3.ul4': '<li>Новые звуки ударов по камню и руде.</li><li>Лошади теперь имеют правильные звуки бега.</li><li>Звук горения факела заменен на более мягкий эмбиент.</li><li>Добавлены частицы при поедании фруктов.</li><li>Обновлены визуальные эффекты зелий здоровья (блеск, свечение).</li>',
        'p3.ul5': '<li>Спать теперь можно с 19:30.</li><li>Добавлена панель информации о Системе Воспоминаний.</li><li>Скриншот и переключение интерфейса больше нельзя назначить на кнопки мыши.</li><li>Игра предупреждает при запуске пре-релизных версий.</li><li>Поле зрения (FOV) при беге ограничено 160°.</li>',
        'p3.ul6': '<li>Новые типы глаз: Кошачьи, Демонические, Козьи, Рептилии.</li><li>Новые рты и цвет волос (Лавандовый).</li><li>Капюшон Перорожденного (Featherbound Hood) теперь корректно отображается.</li>',
        'p3.ul7': '<li>Атаки оружием теперь проверяют линию видимости (LoS).</li><li>Эффект горения наносит меньше урона (кроме лавы).</li><li>Кактус и ежевика наносят тип урона "Окружение".</li>',
        'p3.ul8': '<li>Исправлен расход стамины при смене слота во время заряженной атаки.</li><li>Исправлен парсинг аргументов в команде /replace.</li><li>Исправлен вылет при создании скриншотов с не-английскими путями.</li><li>Исправлен вылет при обновлении модели игрока.</li><li>Улучшена обработка ошибок токена сессии.</li>',

        // Post 4
        'p4.intro1': '<strong>Hytale наконец-то здесь!</strong><br>Момент настал, сегодня Hytale выходит в Ранний Доступ!',
        'p4.intro2': 'Когда мы выкупили Hytale в прошлом ноябре и стали независимой студией, мы обещали запустить игру без задержек, и мы сдержали это слово. Игра сейчас находится в Раннем Доступе в своей истинной форме: неотполированная и неполная, но за этими шероховатостями лежит фундамент для чего-то экстраординарного. Впервые Hytale находится в руках сообщества, чтобы помочь нам превратить его в игру мечты, которую вы все заслуживаете.',
        'p4.intro3': 'Прежде чем вы начнете, пожалуйста, помните:',
        'p4.ul1': '<li><strong>Ранний Доступ</strong> — многие функции всё ещё отсутствуют, и ожидаются баги.</li><li>Прошло всего два месяца с тех пор, как мы вернули Hytale — это всё время, которое у нас было на подготовку игры и пересборку команды с нуля.</li><li>Спрос превысил наши ожидания, что означает, что неделя запуска будет непростой, но мы всех пустим.</li>',
        'p4.blockquote': 'Нет копии Hytale, но хотите присоединиться к Раннему Доступу?<br>Купите Starter Edition всего за $19.99 USD.',
        'p4.intro4': 'Если вам не комфортно играть в незавершенную версию Раннего Доступа, это нормально. Мы будем здесь, когда вы будете готовы!',
        'p4.h_how': 'Как мы к этому пришли?',
        'p4.text_how': 'За последние несколько месяцев Hytale прошел путь от застоя в разработке к отмене, затем к возрождению, и теперь... релиз в Раннем Доступе! Это случилось благодаря тому, что сообщество оставалось сильным и работало вместе, создав движение #savehytale, что в конечном итоге убедило оригинальных основателей вернуться.',
        'p4.h_what': 'Что есть в Раннем Доступе сегодня?',
        'p4.h_avail': 'Доступно:',
        'p4.ul_avail': '<li><strong>Режим Исследования (Exploration Mode):</strong> Бесконечный процедурно генерируемый мир. Исследуйте, стройте, выращивайте урожай и играйте с друзьями.</li><li><strong>Творческий Режим (Creative Mode):</strong> Инструменты внутри игры и отдельные утилиты для создания контента.</li><li><strong>Поддержка Модов:</strong> У Hytale обширные возможности для моддинга с первого дня.</li><li><strong>Мультиплеер:</strong> Для всех режимов.</li>',
        'p4.h_missing': 'Пока ОТСУТСТВУЕТ (но будет позже):',
        'p4.ul_missing': '<li><strong>Режим Приключения (Adventure Mode):</strong> Сюжет, глубокая прогрессия, данжи с боссами.</li><li><strong>Официальные Мини-игры:</strong> Социальные игры и соревновательные режимы.</li><li><strong>World Gen V2:</strong> Полный, восстановленный мир Orbis (пока доступен частично через порталы).</li><li><strong>Социальные функции:</strong> Списки друзей и гильдии.</li>',
        'p4.h_features': 'Ключевые особенности',
        'p4.h_gateway': 'The Ancient Gateway (Древний Портал)',
        'p4.text_gateway': 'Устройство, позволяющее отправляться в нестабильные временные миры, называемые Фрагментами Орбиса. Это позволяет взглянуть на возможности генерации World Gen 2.',
        'p4.h_memories': 'Система Воспоминаний (Memories)',
        'p4.text_memories': 'Награждает вас за исследование и взаимодействие с существами. Воспоминания нужно возвращать в Сердце Орбиса для разблокировки наград.',
        'p4.h_combat': 'Бой и Фермерство',
        'p4.text_combat': 'Веселый мобильный бой с разнообразным оружием и система фермерства с множеством культур.',
        'p4.h_thanks': 'Спасибо',
        'p4.text_thanks': 'Все мы в Hypixel Studios рады наконец выпустить Hytale для сообщества, которое пережило столько взлетов и падений. Ваш постоянный восторг сделал это возможным. Слов недостаточно, чтобы выразить нашу благодарность.',
        'p4.text_final': 'Большое спасибо от всей команды!'
    },
    'en': {
        'nav.home': 'Home',
        'nav.blog': 'Blog',
        'nav.media': 'Media',
        'nav.community': 'Community',
        'nav.download': 'Download',
        'hero.tagline': 'Adventures Await',
        'hero.sub': 'The most advanced custom Hytale launcher by MrVitalik.',
        'hero.cta': 'Download Now',
        'news.title': 'Latest News',
        'news.view_all': 'View All →',
        'app.footer.privacy': 'Privacy Policy',
        'app.footer.terms': 'Terms of Service',
        'app.footer.contacts': 'Contact',
        'app.footer.disclaimer': 'Not affiliated with Hypixel Studios. Hytale is a trademark of Hypixel Studios.',
        'download.title': 'Begin Your Adventure',
        'download.subtitle': 'Download HLauncher and immerse yourself in the world of Hytale with best mods and optimization.',
        'download.version': 'Version',
        'download.updated': 'Updated',
        'download.btn_win': 'Download for Windows',
        'specs.title': 'System Requirements',
        'specs.min': 'Minimum Requirements',
        'specs.rec': 'Recommended Requirements',
        'specs.rec_badge': 'Recommended',
        'news.1.title': 'Hotfixes: January 2026',
        'news.1.excerpt': 'Shadow fixes, improved server stability, compass adjustments, and other important changes.',
        'news.2.title': 'Hytale Patch Notes - Update 2',
        'news.2.excerpt': 'New customization, WorldGen V2, farming improvements, and eternal crops.',
        'news.3.title': 'Hytale Patch Notes - Update 1',
        'news.3.excerpt': 'First update: Dinosaurs, crafting changes, and new visual effects.',
        'news.read_more': 'Read Article',
        // Modal
        'modal.title': 'Enjoying the Launcher?',
        'modal.text': 'HLauncher is a free open-source project. If you like it, please consider supporting development!',
        'modal.support': 'Support on Ko-Fi',
        'modal.skip': 'Thanks, just downloading',
        // Secondary Pages
        'app.back_home': 'Back to Home',
        'app.back_blog': '← Back to Blog',
        'community.title': 'Community',
        'community.coming_soon': 'Coming Soon',
        'community.text': 'We are preparing a platform for communication, forums, and server lists. Stay tuned!',
        'media.title': 'Media',
        'media.dev_title': 'Under Development',
        'media.text': 'This section is under active development. Screenshots, videos, and wallpapers coming soon.',
        'blog.header.title': 'Development Blog',
        'blog.header.sub': 'Updates, patch notes, and news from the team.',
        'blog.sidebar.cat': 'Categories',
        'blog.cat.announcements': 'Announcements',
        'blog.cat.patchnotes': 'Patch Notes',
        'blog.cat.community': 'Community',
        'blog.cat.dev': 'Development',
        'blog.sidebar.archive': 'Archive',
        'date.jan26': 'January 2026',
        'date.dec25': 'December 2025',
        'date.nov25': 'November 2025',
        'date.jan28': 'January 28, 2026',
        'date.jan24': 'January 24, 2026',
        'date.jan17': 'January 17, 2026',
        'date.jan15': 'January 15, 2026',
        'date.jan13': 'January 13, 2026',
        'news.read_more_long': 'Read More',
        // Blog Excerpts
        'news.1.blog_excerpt': 'We addressed several stability issues reported by the community regarding shader integration and improved server performance.',
        'news.2.blog_excerpt': 'Cosmetics, customization, WorldGen V2, farming changes, and improved stability. Learn about the details of Update 2!',
        'news.3.blog_excerpt': 'Welcome to Update 1! Dinosaurs in the underground jungles, new sounds, and inventory balance.',
        'news.4.blog_excerpt': 'The moment has arrived, Hytale enters Early Access today! Find out what awaits you in the first version of the game.',
        'news.4.title': 'Hytale is Finally Here!',

        // Categories / General
        'cat.perf': 'Performance',
        'cat.stab': 'Stability',
        'cat.game': 'Gameplay',
        'cat.conn': 'Connectivity',
        'cat.launch': 'Launcher',
        'cat.serv': 'Services',
        'cat.world': 'World & Environment',
        'cat.npc': 'NPCs & Creatures',
        'cat.craft': 'Crafting, Items & Farming',
        'cat.audio': 'Audio & Visuals',
        'cat.ui': 'UI & Performance',
        'cat.custom': 'Customization',
        'cat.combat': 'Combat & Balance',
        'cat.bugs': 'Bug Fixes',

        // Post 1
        'p1.title': 'Hotfixes: January 2026',
        'p1.intro': 'This hotfix addresses the most critical issues reported since launch. Additional fixes for less urgent issues are in the works and will be included in future patches. Stay tuned!',
        'p1.ul1': '<li>Fixed recurring shadow rendering issues.</li><li>Reduced micro-stuttering and input lag on NVIDIA GPUs.</li>',
        'p1.ul2': '<li>Fixed several crashes, including those related to weather, armoring up, and server disconnects.</li><li>Improved login reliability and server uptime.</li>',
        'p1.ul3': '<li>Fixed compass pointing in the wrong direction.</li><li>Improved block placement consistency in Creative Mode.</li><li>Refined teleporter logic to prevent infinite looping.</li><li>Fixed crossbow misfires and other interaction bugs.</li>',
        'p1.ul4': '<li>General server stability and networking improvements.</li><li>Game now gracefully switches to offline mode on auth failure instead of hanging.</li><li>Fixed "invalid token" errors caused by system time desync.</li>',
        'p1.ul5': '<li>Improved client performance by optimizing background task scheduling.</li><li>Fixed an issue where dropped items would get stuck inside blocks.</li><li>Fixed a rare server crash scenario.</li>',
        'p1.ul6': '<li>Added a prompt after server load if authentication is required.</li><li>Client now switches to offline mode when session becomes invalid.</li>',
        'p1.ul7': '<li>Fixed crash when selecting specific hairstyles after eyebrows in character creator.</li><li>Fixed crash when taking screenshots for users with non-English folder names.</li><li>Fixed launch issues on Norwegian system locales.</li><li>Fixed crash when using buckets. Note: this broke some crafting stations; please break and replace them.</li><li>Prevented binding Left Mouse Button to certain actions.</li><li>General stability improvements.</li>',
        'p1.ul8': '<li>Added specific warning if system time is incorrect, resolving some auth issues.</li><li>Fixed an authentication loop bug occurring periodically.</li>',
        'p1.ul9': '<li>Fixed cosmetic vulnerability allowing players to spoof nicknames (visual only).</li><li>Improved game patch caching.</li><li>Enhanced email delivery service for high volume.</li>',

        // Post 3
        'p3.intro': 'Welcome to the first Hytale update! Today we are releasing new content alongside a range of fixes and quality of life improvements.',
        'p3.ul1': '<li>Added dinosaurs and other NPCs to the Underground Jungle (using temporary behavior for now).</li><li>Devastated Lands sewers now have proper atmospheric effects.</li><li>Areas under volcanoes now use volcanic effects.</li><li>Fixed entity and texture placement in Feran villages.</li>',
        'p3.ul2': '<li>Added knockback resistance to NPCs that were missing it.</li><li>Fire NPCs are now immune to fire damage.</li><li>Improved combat behavior of the Crystal Earth Golem.</li><li>Skeletons no longer take drowning damage.</li><li>Kweebecs are immune to cactus and bramble damage.</li><li>Cautious predators (e.g. Fox) will not attack players first.</li>',
        'p3.ul3': '<li>Backpack is now easier to obtain: Basic requires Tier 1 Workbench (previously Tier 2) and 8 Medium Leather (previously 16).</li><li>Workbenches can now pull resources from chests within a 14 block radius (previously 7).</li><li>All raw fruits and vegetables give only Regeneration I. Cooking provides more bonuses.</li><li>Dropped items no longer get stuck in blocks.</li><li>Corn now gives 1 Life Essence instead of 4.</li><li>Logs now display wood type in tooltip (e.g. "Hardwood").</li>',
        'p3.ul4': '<li>New sounds for hitting stone and ore.</li><li>Horses now have correct running sounds.</li><li>Torch burning sound replaced with softer ambient.</li><li>Added particles when eating fruit.</li><li>Updated visual effects for health potions (glint, glow).</li>',
        'p3.ul5': '<li>Sleeping is now possible from 19:30.</li><li>Added Memory System info panel.</li><li>Screenshot and UI toggle can no longer be bound to mouse buttons.</li><li>Game warns when launching pre-release versions.</li><li>Field of View (FOV) while sprinting is limited to 160°.</li>',
        'p3.ul6': '<li>New eye types: Cat, Demon, Goat, Reptile.</li><li>New mouths and hair color (Lavender).</li><li>Featherbound Hood now displays correctly.</li>',
        'p3.ul7': '<li>Weapon attacks now check Line of Sight (LoS).</li><li>Burning effect deals less damage (except lava).</li><li>Cactuses and brambles deal "Environment" damage type.</li>',
        'p3.ul8': '<li>Fixed stamina consumption when switching slots during charged attack.</li><li>Fixed argument parsing in /replace command.</li><li>Fixed crash when taking screenshots with non-English paths.</li><li>Fixed crash when updating player model.</li><li>Improved session token error handling.</li>',

        // Post 4
        'p4.intro1': '<strong>Hytale is finally here!</strong><br>The moment has arrived, today Hytale enters Early Access!',
        'p4.intro2': 'When we acquired Hytale last November and became an independent studio, we promised to launch the game without delays, and we kept that word. The game is now in Early Access in its true form: unpolished and incomplete, but beneath these rough edges lies the foundation for something extraordinary. For the first time, Hytale is in the hands of the community to help us turn it into the dream game you all deserve.',
        'p4.intro3': 'Before you start, please remember:',
        'p4.ul1': '<li><strong>Early Access</strong> — many features are still missing, and bugs are expected.</li><li>It has been only two months since we reclaimed Hytale — that’s all the time we had to prepare the game and rebuild the team from scratch.</li><li>Demand exceeded our expectations, meaning launch week will be challenging, but we will get everyone in.</li>',
        'p4.blockquote': 'No copy of Hytale, but want to join Early Access?<br>Buy Starter Edition for just $19.99 USD.',
        'p4.intro4': 'If you are not comfortable playing an incomplete Early Access version, that is okay. We will be here when you are ready!',
        'p4.h_how': 'How did we get here?',
        'p4.text_how': 'Over the last few months, Hytale went from development stagnation to cancellation, then to rebirth, and now... Early Access release! This happened because the community remained strong and worked together, creating the #savehytale movement, which ultimately convinced the original founders to return.',
        'p4.h_what': 'What is in Early Access today?',
        'p4.h_avail': 'Available:',
        'p4.ul_avail': '<li><strong>Exploration Mode:</strong> Infinite procedurally generated world. Explore, build, farm, and play with friends.</li><li><strong>Creative Mode:</strong> In-game tools and separate utilities for content creation.</li><li><strong>Mod Support:</strong> Hytale has extensive modding capabilities from day one.</li><li><strong>Multiplayer:</strong> For all modes.</li>',
        'p4.h_missing': 'Currently MISSING (but coming later):',
        'p4.ul_missing': '<li><strong>Adventure Mode:</strong> Story, deep progression, dungeons with bosses.</li><li><strong>Official Minigames:</strong> Social games and competitive modes.</li><li><strong>World Gen V2:</strong> Full, restored world of Orbis (partially available via portals for now).</li><li><strong>Social Features:</strong> Friend lists and guilds.</li>',
        'p4.h_features': 'Key Features',
        'p4.h_gateway': 'The Ancient Gateway',
        'p4.text_gateway': 'A device allowing travel to unstable timeline worlds called Orbis Fragments. This allows a glimpse into World Gen 2 generation capabilities.',
        'p4.h_memories': 'Memory System',
        'p4.text_memories': 'Rewards you for exploring and interacting with creatures. Memories need to be returned to the Heart of Orbis to unlock rewards.',
        'p4.h_combat': 'Combat and Farming',
        'p4.text_combat': 'Fun mobile combat with diverse weapons and a farming system with many crops.',
        'p4.h_thanks': 'Thank You',
        'p4.text_thanks': 'All of us at Hypixel Studios are excited to finally release Hytale to the community that has endured so many ups and downs. Your constant excitement made this possible. Words are not enough to express our gratitude.',
        'p4.text_final': 'A big thank you from the whole team!'
    }
};

let currentLang = 'ru';

function detectLanguage() {
    const saved = localStorage.getItem('hlauncher_lang');
    if (saved) return saved;
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.startsWith('en') ? 'en' : 'ru';
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('hlauncher_lang', lang);
    document.documentElement.lang = lang;

    // Update content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Update toggles state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// Init i18n
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLanguage();
    setLanguage(lang);

    // Helper to bind dynamically (delegation)
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.lang-btn')) {
            const btn = e.target.closest('.lang-btn');
            e.preventDefault();
            setLanguage(btn.dataset.lang);
        }
    });
});


