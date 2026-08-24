document.addEventListener('DOMContentLoaded', () => {

    /* ======================================================================
       THAI / ENGLISH LANGUAGE SWITCHER
       ====================================================================== */
    const languageToggle = document.getElementById('language-toggle');
    const thaiTranslations = {
        'WELCOME PORTFOLIO': 'ยินดีต้อนรับสู่พอร์ตโฟลิโอ',
        'Home': 'หน้าแรก', 'About Me': 'เกี่ยวกับฉัน', 'Education': 'การศึกษา',
        'Skills': 'ทักษะ', 'Projects': 'ผลงาน', 'Contact': 'ติดต่อ',
        'Download Resume': 'ดาวน์โหลดเรซูเม่', 'Available for Internship': 'พร้อมสำหรับการฝึกงาน',
        'Welcome': 'ยินดีต้อนรับสู่', 'Portfolio': 'พอร์ตโฟลิโอ',
        'Computer Science Student': 'นักศึกษาวิทยาการคอมพิวเตอร์',
        'Seeking an': 'กำลังมองหา', 'IT Support Internship': 'ตำแหน่งฝึกงาน IT Support',
        'Computer Science student building practical foundations in PC hardware, software troubleshooting, user support, and basic networking.': 'นักศึกษาวิทยาการคอมพิวเตอร์ที่กำลังพัฒนาพื้นฐานด้านฮาร์ดแวร์คอมพิวเตอร์ การแก้ไขปัญหาซอฟต์แวร์ การช่วยเหลือผู้ใช้งาน และระบบเครือข่ายเบื้องต้น',
        'View My Work': 'ดูผลงาน', 'INTRODUCTION': 'แนะนำตัว',
        'Thanawith Seajamsil': 'ธนวิชญ์ เสือจำศิล',
        'I am Thanawith Seajamsil, a Computer Science student with a strong passion and dedication for': 'ผม ธนวิชญ์ เสือจำศิล นักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจและตั้งใจพัฒนาตนเองด้าน',
        'IT Support and System Administration': 'IT Support และการดูแลระบบ',
        'Throughout my academic journey, I have gained solid knowledge of computer systems, hardware diagnostics, basic networking, and software installation. I frequently take responsibility for fixing computer issues for peers and during university events, helping me build practical troubleshooting skills.': 'ระหว่างการศึกษา ผมได้เรียนรู้ระบบคอมพิวเตอร์ การตรวจสอบฮาร์ดแวร์ เครือข่ายเบื้องต้น และการติดตั้งซอฟต์แวร์ รวมถึงฝึกแก้ปัญหาคอมพิวเตอร์ให้เพื่อนและในกิจกรรมของมหาวิทยาลัย',
        "I am an enthusiastic learner who is quick to adopt new tools and technologies. I possess strong interpersonal skills, patience under pressure, and a user-centric mindset. I am actively seeking an internship opportunity to apply my skills to real-world tasks and support your organization's IT department.": 'ผมพร้อมเรียนรู้เครื่องมือและเทคโนโลยีใหม่ มีความอดทน รับฟังผู้ใช้งาน และกำลังมองหาโอกาสฝึกงานเพื่อนำความรู้ไปใช้กับงานจริงในฝ่ายไอที',
        "Bachelor's Degree in Computer Science": 'ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์',
        'Current Student': 'กำลังศึกษา', 'Desired Role': 'ตำแหน่งที่สนใจ',
        'Technical Intern': 'นักศึกษาฝึกงานสายเทคนิค', '5 Completed': 'ผลงาน 5 ชิ้น',
        'Developed': 'พัฒนาแล้ว', 'Availability': 'สถานะ', 'Ready to Intern': 'พร้อมฝึกงาน',
        'Available': 'พร้อมเริ่มงาน', 'Academic Background': 'ประวัติการศึกษา',
        '2020 / NOW': '2020 / ปัจจุบัน', '2023 — Present': '2023 — ปัจจุบัน',
        "Bachelor's Degree": 'ระดับปริญญาตรี',
        'Currently studying Computer Science with a focus on computer systems, software development, databases, networking, and web technologies.': 'กำลังศึกษาสาขาวิทยาการคอมพิวเตอร์ โดยเรียนรู้ระบบคอมพิวเตอร์ การพัฒนาซอฟต์แวร์ ฐานข้อมูล เครือข่าย และเทคโนโลยีเว็บ',
        'Computer Science': 'วิทยาการคอมพิวเตอร์', 'Japanese Language Arts': 'แผนการเรียนศิลป์ภาษาญี่ปุ่น',
        'Studied in the Japanese Language Arts program, developing foundational Japanese communication, reading, writing, and cultural understanding. The program also strengthened discipline, teamwork, adaptability, and confidence in learning new languages.': 'ศึกษาในแผนการเรียนศิลป์ภาษาญี่ปุ่น พัฒนาพื้นฐานการสื่อสาร การอ่าน การเขียน และความเข้าใจวัฒนธรรมญี่ปุ่น พร้อมฝึกวินัย การทำงานร่วมกับผู้อื่น และการปรับตัว',
        'Japanese Language': 'ภาษาญี่ปุ่น', 'Japanese Culture': 'วัฒนธรรมญี่ปุ่น',
        'Technical Skills': 'ทักษะด้านเทคนิค',
        'Basic technical skills developed through coursework, personal projects, and hands-on practice.': 'ทักษะพื้นฐานที่พัฒนาจากการเรียน โปรเจกต์ส่วนตัว และการฝึกปฏิบัติ',
        'Hardware': 'ฮาร์ดแวร์', 'Software': 'ซอฟต์แวร์', 'Network': 'เครือข่าย',
        'Web & Programming': 'เว็บและการเขียนโปรแกรม', 'Basic': 'พื้นฐาน',
        'Used in Projects': 'เคยใช้ในโปรเจกต์',
        'PC Assembly & Upgrade': 'ประกอบและอัปเกรดคอมพิวเตอร์',
        'RAM, SSD, HDD & Internal Diagnostics': 'ตรวจสอบ RAM, SSD, HDD และอุปกรณ์ภายใน',
        'PC Cleaning & Maintenance': 'ทำความสะอาดและบำรุงรักษาคอมพิวเตอร์',
        'Windows & Basic App Installation': 'ติดตั้ง Windows และโปรแกรมพื้นฐาน',
        'Basic Software Troubleshooting': 'แก้ไขปัญหาซอฟต์แวร์เบื้องต้น',
        'Microsoft Office (Word, Excel, PPT)': 'Microsoft Office (Word, Excel, PPT)',
        'Remote Technical Support (AnyDesk/TeamViewer)': 'ช่วยเหลือทางไกล (AnyDesk/TeamViewer)',
        'Basic Data Backup & Recovery': 'สำรองและกู้คืนข้อมูลเบื้องต้น',
        'IP Address Configuration (Static IP, Subnet)': 'ตั้งค่า IP Address (Static IP, Subnet)',
        'Internet Connection Troubleshooting': 'แก้ไขปัญหาการเชื่อมต่ออินเทอร์เน็ต',
        'CLI Commands (ipconfig, ping, tracert)': 'คำสั่ง CLI (ipconfig, ping, tracert)',
        'SQL Fundamentals': 'พื้นฐาน SQL', 'Featured Projects': 'ผลงานที่โดดเด่น',
        'Software projects and tools related to troubleshooting, inventory, and IT service delivery.': 'โปรเจกต์ซอฟต์แวร์และเครื่องมือที่เกี่ยวข้องกับการแก้ไขปัญหาและการให้บริการด้านไอที',
        'Web Application': 'เว็บแอปพลิเคชัน', 'UI/UX Design': 'การออกแบบ UI/UX',
        'Portfolio Website': 'เว็บไซต์พอร์ตโฟลิโอ',
        'Template Customization & Static Website': 'การปรับแต่งเทมเพลตและเว็บไซต์แบบ Static',
        'A web application for reporting IT issues, tracking SLA repair tickets, and managing staff dashboards.': 'เว็บแอปสำหรับแจ้งปัญหาไอที ติดตาม Ticket ตาม SLA และจัดการแดชบอร์ดของเจ้าหน้าที่',
        'A mobile cake-ordering prototype covering sign-up, menu browsing, product details, cart management, and checkout with a friendly pastel interface.': 'ต้นแบบแอปสั่งเค้กบนมือถือ ครอบคลุมการสมัครสมาชิก ดูเมนู รายละเอียดสินค้า ตะกร้า และชำระเงิน ด้วยโทนสีพาสเทล',
        'A ticketing portal for employees to report IT incidents and technicians to manage assignments and status.': 'ระบบ Ticket สำหรับให้พนักงานแจ้งปัญหาไอที และให้เจ้าหน้าที่จัดการผู้รับผิดชอบกับสถานะงาน',
        'A responsive bilingual portfolio website presenting my profile, education, technical skills, projects, resume, and contact information.': 'เว็บไซต์พอร์ตโฟลิโอแบบ Responsive และสองภาษา สำหรับนำเสนอข้อมูลส่วนตัว การศึกษา ทักษะด้านเทคนิค ผลงาน เรซูเม่ และช่องทางติดต่อ',
        'A responsive personal portfolio designed to introduce my background and present practical work for IT Support internship applications. It includes Thai–English language switching, education, technical skills, project galleries, a downloadable resume, and a working contact form.': 'เว็บไซต์พอร์ตโฟลิโอส่วนตัวแบบ Responsive สำหรับแนะนำประวัติและนำเสนอผลงานเพื่อสมัครฝึกงานด้าน IT Support ประกอบด้วยระบบสลับภาษาไทย–อังกฤษ การศึกษา ทักษะ แกลเลอรีผลงาน ดาวน์โหลดเรซูเม่ และแบบฟอร์มติดต่อที่ใช้งานได้',
        'Visit Portfolio': 'เยี่ยมชม Portfolio',
        'A task management application featuring clean state handling, task tracking, and an intuitive responsive UI.': 'แอปจัดการงานที่มีการจัดการสถานะ ติดตามงาน และรองรับหน้าจอหลายขนาด',
        'A multi-page cafe website adapted from a third-party template and customized with Nomad Cafe branding, content, imagery, menus, and promotions.': 'เว็บไซต์ร้านกาแฟหลายหน้า พัฒนาต่อยอดจากเทมเพลตภายนอกและปรับแบรนด์ เนื้อหา รูปภาพ เมนู และโปรโมชันให้เป็น Nomad Cafe',
        'Details': 'รายละเอียด', 'View Details': 'ดูรายละเอียด', 'Visit Site': 'เยี่ยมชมเว็บไซต์',
        'View Prototype': 'ดู Prototype', 'Contact Me': 'ติดต่อฉัน',
        'For internship opportunities or project inquiries, contact me directly or send a message using the form.': 'หากมีโอกาสฝึกงานหรือต้องการสอบถามเกี่ยวกับผลงาน สามารถติดต่อโดยตรงหรือส่งข้อความผ่านแบบฟอร์มได้',
        'Direct Contact': 'ช่องทางติดต่อ', 'Email': 'อีเมล', 'Resume': 'เรซูเม่',
        'Download PDF': 'ดาวน์โหลด PDF',
        'Computer Science student ready to learn and develop technical support skills.': 'นักศึกษาวิทยาการคอมพิวเตอร์ที่พร้อมเรียนรู้และพัฒนาทักษะด้าน Technical Support',
        '- Designed and developed by': '- ออกแบบและพัฒนาโดย',
        'Currently seeking an IT Support internship and opportunities to gain hands-on experience in a real working environment.': 'กำลังมองหาโอกาสฝึกงานด้าน IT Support เพื่อเรียนรู้และเก็บประสบการณ์จากสภาพแวดล้อมการทำงานจริง',
        'Send a Message': 'ส่งข้อความ', 'Name': 'ชื่อ', 'Email Address': 'อีเมลผู้ส่ง',
        'Subject': 'หัวข้อ', 'Message Details': 'รายละเอียดข้อความ', 'Send Message': 'ส่งข้อความ',
        'Please enter your name': 'กรุณากรอกชื่อ',
        'Please enter a valid email address': 'กรุณากรอกอีเมลให้ถูกต้อง',
        'Please enter a subject': 'กรุณากรอกหัวข้อ',
        'Please enter your message': 'กรุณากรอกข้อความ',
        'Message sent successfully! I will reply to you as soon as possible.': 'ส่งข้อความสำเร็จแล้ว ผมจะตอบกลับโดยเร็วที่สุด',
        'Unable to send your message. Please try again later.': 'ไม่สามารถส่งข้อความได้ กรุณาลองใหม่อีกครั้ง',
        'Overview & Objective:': 'ภาพรวมและวัตถุประสงค์:', 'Key Features:': 'คุณสมบัติหลัก:',
        'Technologies Used:': 'เครื่องมือและเทคโนโลยีที่ใช้:',
        'A web-based IT Service Desk application designed to streamline computer repair reporting, track SLA urgency levels, manage repair ticket queues, and visualize status metrics.': 'เว็บแอป IT Service Desk สำหรับรับแจ้งปัญหาคอมพิวเตอร์ ติดตามระดับความเร่งด่วนตาม SLA จัดการคิวงาน และแสดงสถิติสถานะ',
        'Designed an interactive mobile ordering experience for a cake cafe in Figma. The interface uses a soft pastel color palette, clear visual hierarchy, consistent components, and simple navigation from account creation to checkout.': 'ออกแบบต้นแบบประสบการณ์สั่งเค้กบนมือถือด้วย Figma โดยใช้โทนสีพาสเทล ลำดับข้อมูลที่ชัดเจน คอมโพเนนต์ที่สม่ำเสมอ และการนำทางตั้งแต่สมัครสมาชิกจนถึงชำระเงิน',
        'Welcome, login, and account registration flows.': 'ขั้นตอนหน้าต้อนรับ เข้าสู่ระบบ และสมัครสมาชิก',
        'Visual cake menu and product-detail screens.': 'หน้าเมนูเค้กและรายละเอียดสินค้า',
        'Quantity selection, cart, delivery, payment, and checkout flow.': 'ขั้นตอนเลือกจำนวน ตะกร้า การจัดส่ง การชำระเงิน และยืนยันคำสั่งซื้อ',
        'Clickable interactions linking the main user journey.': 'เชื่อมโยง Interaction ตามเส้นทางหลักของผู้ใช้งาน',
        'An incident management system designed based on basic ITIL processes to help employees report technical difficulties and allow IT personnel to queue, assign, and track work progress.': 'ระบบจัดการ Incident ตามแนวคิด ITIL เบื้องต้น สำหรับให้พนักงานแจ้งปัญหาและให้ฝ่ายไอทีจัดคิว มอบหมาย และติดตามงาน',
        'This project began with an existing third-party website template. I studied its structure and then customized the layout, branding, copy, images, menu content, seasonal offers, and event pages to create a new static website for Nomad Cafe.': 'โปรเจกต์นี้เริ่มจากเทมเพลตเว็บไซต์ของบุคคลอื่น จากนั้นศึกษาโครงสร้างและปรับ Layout แบรนด์ ข้อความ รูปภาพ เมนู โปรโมชันตามฤดูกาล และหน้ากิจกรรม เพื่อสร้างเว็บไซต์ Static สำหรับ Nomad Cafe'
    };

    const translatableTextNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            if (!parent || parent.closest('script, style, svg') || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });
    while (walker.nextNode()) {
        const node = walker.currentNode;
        translatableTextNodes.push({ node, original: node.nodeValue });
    }

    const translatableFields = [...document.querySelectorAll('input[placeholder], textarea[placeholder]')].map(element => ({
        element,
        original: element.placeholder
    }));
    const placeholderTranslations = {
        'Enter your full name': 'กรอกชื่อ-นามสกุล', 'example@domain.com': 'example@domain.com',
        'e.g. Internship Inquiry': 'เช่น สอบถามเกี่ยวกับการฝึกงาน', 'Write your message here...': 'เขียนข้อความที่นี่...'
    };

    const applyLanguage = language => {
        const isThai = language === 'th';
        document.documentElement.lang = isThai ? 'th' : 'en';
        translatableTextNodes.forEach(({ node, original }) => {
            const normalized = original.trim().replace(/\s+/g, ' ');
            const translated = thaiTranslations[normalized];
            if (isThai && translated) {
                const leading = original.match(/^\s*/)?.[0] || '';
                const trailing = original.match(/\s*$/)?.[0] || '';
                node.nodeValue = `${leading}${translated}${trailing}`;
            } else {
                node.nodeValue = original;
            }
        });
        translatableFields.forEach(({ element, original }) => {
            element.placeholder = isThai ? (placeholderTranslations[original] || original) : original;
        });
        if (languageToggle) {
            languageToggle.textContent = isThai ? 'EN' : 'TH';
            languageToggle.setAttribute('aria-label', isThai ? 'Switch to English language' : 'เปลี่ยนเป็นภาษาไทย');
            languageToggle.title = isThai ? 'English' : 'ภาษาไทย';
        }
        localStorage.setItem('portfolio-language', language);
    };

    let currentLanguage = localStorage.getItem('portfolio-language') === 'th' ? 'th' : 'en';
    applyLanguage(currentLanguage);
    languageToggle?.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'th' : 'en';
        applyLanguage(currentLanguage);
    });
    const localizedText = (english, thai) => document.documentElement.lang === 'th' ? thai : english;

    /* ======================================================================
       PAGE LOADING SCENE
       ====================================================================== */
    const pageLoader = document.getElementById('page-loader');
    if (pageLoader) {
        document.body.classList.add('page-loading');
        const loaderStartedAt = performance.now();
        let loaderClosed = false;

        const closePageLoader = () => {
            if (loaderClosed) return;
            loaderClosed = true;
            const elapsed = performance.now() - loaderStartedAt;
            const minimumDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300;
            const remaining = Math.max(0, minimumDuration - elapsed);

            window.setTimeout(() => {
                pageLoader.classList.add('is-hidden');
                document.body.classList.remove('page-loading');
                pageLoader.addEventListener('transitionend', () => pageLoader.remove(), { once: true });
            }, remaining);
        };

        if (document.readyState === 'complete') {
            closePageLoader();
        } else {
            window.addEventListener('load', closePageLoader, { once: true });
        }

        // Safety fallback if an external font or icon request stalls.
        window.setTimeout(closePageLoader, 1500);
    }

    /* ==========================================================================
       LUCIDE ICONS INITIALIZATION
       ========================================================================== */
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    /* ======================================================================
       PROJECT TECHNOLOGY BRAND ICONS
       ====================================================================== */
    const technologyIcons = [
        { match: 'html', slug: 'html5', color: 'E34F26', label: 'H5' },
        { match: 'css', slug: 'css', color: '663399', label: 'C3' },
        { match: 'javascript', slug: 'javascript', color: 'F7DF1E', label: 'JS' },
        { match: 'chart.js', slug: 'chartdotjs', color: 'FF6384', label: 'CJ' },
        { match: 'bootstrap', slug: 'bootstrap', color: '7952B3', label: 'B' },
        { match: 'next.js', slug: 'nextdotjs', color: 'FFFFFF', label: 'N' },
        { match: 'react', slug: 'react', color: '61DAFB', label: 'R' },
        { match: 'typescript', slug: 'typescript', color: '3178C6', label: 'TS' },
        { match: 'tailwind', slug: 'tailwindcss', color: '06B6D4', label: 'TW' },
        { match: 'supabase', slug: 'supabase', color: '3FCF8E', label: 'S' },
        { match: 'prisma', slug: 'prisma', color: 'FFFFFF', label: 'P' },
        { match: 'vercel', slug: 'vercel', color: 'FFFFFF', label: 'V' },
        { match: 'figma', slug: 'figma', color: 'F24E1E', label: 'F' },
        { match: 'responsive ui', slug: null, color: null, label: '↔' },
        { match: 'ui design', slug: null, color: null, label: 'UI' },
        { match: 'prototype', slug: null, color: null, label: '◇' },
        { match: 'localstorage', slug: null, color: null, label: 'DB' },
        { match: 'web storage', slug: null, color: null, label: 'DB' }
    ];

    document.querySelectorAll('.project-tech > span').forEach(tag => {
        const technologyName = tag.textContent.trim().toLowerCase();
        const iconData = technologyIcons.find(item => technologyName.includes(item.match));
        if (!iconData || tag.querySelector('.tech-brand-icon')) return;

        const icon = document.createElement('span');
        icon.className = 'tech-brand-icon';
        icon.setAttribute('aria-hidden', 'true');

        const fallback = document.createElement('span');
        fallback.className = 'tech-icon-fallback';
        fallback.textContent = iconData.label;

        if (iconData.slug) {
            const image = document.createElement('img');
            image.src = `https://cdn.simpleicons.org/${iconData.slug}/${iconData.color}`;
            image.alt = '';
            image.loading = 'lazy';
            image.decoding = 'async';
            image.addEventListener('error', () => icon.classList.add('icon-failed'));
            icon.append(image, fallback);
        } else {
            icon.classList.add('icon-failed');
            icon.append(fallback);
        }
        tag.prepend(icon);
    });

    /* ==========================================================================
       NAVIGATION BAR: MOBILE MENU TOGGLE
       ========================================================================== */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            
            // Toggle hamburger icon between menu and close (x)
            const isOpened = navMenu.classList.contains('open');
            if (isOpened) {
                menuIcon.setAttribute('data-lucide', 'x');
            } else {
                menuIcon.setAttribute('data-lucide', 'menu');
            }
            // Re-render only the menu icon
            lucide.createIcons({
                attrs: {
                    id: 'menu-icon'
                }
            });
        });

        // Close mobile menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons({
                    attrs: {
                        id: 'menu-icon'
                    }
                });
            });
        });
    }

    /* ==========================================================================
       NAVIGATION BAR: STICKY ON SCROLL
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    /* ==========================================================================
       SCROLLSPY: ACTIVE LINK ON SCROLL
       ========================================================================== */
    const sections = document.querySelectorAll('section[id]');
    
    function scrollSpy() {
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        
        let currentSectionId = 'hero'; // fallback
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // 120px offset for sticky header
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Check if we are at the very bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            currentSectionId = 'contact';
        }
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentSectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', scrollSpy);
    // Run scrollSpy on load
    scrollSpy();

    /* ==========================================================================
       BACK TO TOP BUTTON
       ========================================================================== */
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* ==========================================================================
       INTERSECTION OBSERVER: FADE-IN ANIMATION & SKILL BARS
       ========================================================================== */
    const fadeElements = document.querySelectorAll('.fade-in');
    const skillCards = document.querySelectorAll('.skills-category-card');

    // Observer options
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    // Fade-in observer
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                entry.target.addEventListener('transitionend', () => {
                    entry.target.classList.add('animation-complete');
                }, { once: true });
                observer.unobserve(entry.target); // Stop observing once it appears
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });

    // Section reveals: animate headings, content blocks, and cards in sequence.
    const revealGroups = [
        '#about .section-title, #about .about-info, #about .about-card',
        '#education .education-eyebrow, #education .education-title, #education .education-card',
        '#skills .section-title, #skills .section-subtitle, #skills .skills-category-card',
        '#projects .section-title, #projects .section-subtitle, #projects .project-card',
        '#contact .contact-header, #contact .contact-form-panel'
    ];

    revealGroups.forEach(selector => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.classList.add('reveal-on-scroll');
            element.style.setProperty('--reveal-delay', `${Math.min(index * 90, 450)}ms`);
            fadeObserver.observe(element);
        });
    });

    // Add a soft pointer-following glow to interactive cards on precise pointers.
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.querySelectorAll('.about-card, .education-card, .skills-category-card, .project-card, .contact-form-panel').forEach(card => {
            card.classList.add('motion-card');
            card.addEventListener('pointermove', event => {
                const rect = card.getBoundingClientRect();
                card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
                card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
            });
        });
    }

    // Skill Bars: Animate to width on visibility
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-bar-fill');
                progressBars.forEach(bar => {
                    // Extract target percentage from inline style or attribute
                    const widthVal = bar.style.width;
                    bar.style.width = '0'; // reset
                    setTimeout(() => {
                        bar.style.width = widthVal; // animate to target
                        bar.style.transition = 'width 1.5s cubic-bezier(0.1, 0.8, 0.2, 1)';
                    }, 50);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillCards.forEach(card => {
        // Save initial widths first and reset to 0
        const fills = card.querySelectorAll('.skill-bar-fill');
        fills.forEach(fill => {
            fill.setAttribute('data-target-width', fill.style.width);
            fill.style.width = '0%';
        });
        skillObserver.observe(card);
    });

    /* ==========================================================================
       PROJECT DETAIL MODALS (OPEN / CLOSE)
       ========================================================================== */
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    const modalCloseBtns = document.querySelectorAll('.modal-close');

    // Open Modal
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectType = btn.getAttribute('data-project');
            const targetModal = document.getElementById(`modal-${projectType}`);
            
            if (targetModal) {
                targetModal.classList.add('open');
                document.body.style.overflow = 'hidden'; // Disable scroll on background
            }
        });
    });

    // Close Modal helper
    function closeModal(modal) {
        modal.classList.remove('open');
        document.body.style.overflow = ''; // Restore scroll
    }

    // Close Modal on Close button click
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentModal = btn.closest('.modal-overlay');
            if (parentModal) {
                closeModal(parentModal);
            }
        });
    });

    // Close Modal on Overlay click
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay);
            }
        });
    });

    // Close Modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalOverlays.forEach(overlay => {
                if (overlay.classList.contains('open')) {
                    closeModal(overlay);
                }
            });
        }
    });

    /* ==========================================================================
       CONTACT FORM VALIDATION & SUBMISSION
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const formSubmitBtn = document.getElementById('form-submit-btn');
    const formSuccessAlert = document.getElementById('form-success-alert');
    const formErrorAlert = document.getElementById('form-error-alert');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Elements
            const nameInput = document.getElementById('form-name');
            const emailInput = document.getElementById('form-email');
            const subjectInput = document.getElementById('form-subject');
            const messageInput = document.getElementById('form-message');

            let isValid = true;

            // Reset validation states
            resetValidation(nameInput);
            resetValidation(emailInput);
            resetValidation(subjectInput);
            resetValidation(messageInput);
            formSuccessAlert.style.display = 'none';
            formErrorAlert.style.display = 'none';

            // Validate Name
            if (!nameInput.value.trim()) {
                setInvalid(nameInput, localizedText('Please enter your name', 'กรุณากรอกชื่อ'));
                isValid = false;
            }

            // Validate Email
            const emailValue = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailValue) {
                setInvalid(emailInput, localizedText('Please enter your email address', 'กรุณากรอกอีเมล'));
                isValid = false;
            } else if (!emailPattern.test(emailValue)) {
                setInvalid(emailInput, localizedText('Please enter a valid email address (e.g. name@domain.com)', 'กรุณากรอกอีเมลให้ถูกต้อง เช่น name@domain.com'));
                isValid = false;
            }

            // Validate Subject
            if (!subjectInput.value.trim()) {
                setInvalid(subjectInput, localizedText('Please enter a subject', 'กรุณากรอกหัวข้อ'));
                isValid = false;
            }

            // Validate Message
            if (!messageInput.value.trim()) {
                setInvalid(messageInput, localizedText('Please enter your message', 'กรุณากรอกข้อความ'));
                isValid = false;
            }

            // Submit validated data to FormSubmit for email delivery.
            if (isValid) {
                // Capture values before disabling the controls. Disabled fields are
                // intentionally excluded from FormData by the browser.
                const formData = new FormData(contactForm);

                // Disable submit button and inputs
                toggleFormElements(true);
                
                // Save original button content
                const originalBtnHTML = formSubmitBtn.innerHTML;
                formSubmitBtn.innerHTML = `<span class="spinner"></span> ${localizedText('Sending message...', 'กำลังส่งข้อความ...')}`;
                formSubmitBtn.style.opacity = '0.7';

                try {
                    const response = await fetch('https://formsubmit.co/ajax/thanawithseajamsil@gmail.com', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json'
                        },
                        body: formData
                    });

                    if (!response.ok) {
                        throw new Error('Message delivery failed');
                    }

                    formSuccessAlert.style.display = 'flex';
                    contactForm.reset();
                    formSuccessAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                    setTimeout(() => {
                        formSuccessAlert.style.display = 'none';
                    }, 6000);
                } catch (error) {
                    formErrorAlert.style.display = 'flex';
                    formErrorAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } finally {
                    formSubmitBtn.innerHTML = originalBtnHTML;
                    formSubmitBtn.style.opacity = '';
                    toggleFormElements(false);
                }
            }
        });

        // Helper: Remove invalid status
        function resetValidation(inputElement) {
            const formGroup = inputElement.closest('.form-group');
            if (formGroup) {
                formGroup.classList.remove('invalid');
            }
        }

        // Helper: Set invalid status
        function setInvalid(inputElement, errorMessageText) {
            const formGroup = inputElement.closest('.form-group');
            if (formGroup) {
                formGroup.classList.add('invalid');
                const errorSpan = formGroup.querySelector('.error-msg');
                if (errorSpan) {
                    errorSpan.textContent = errorMessageText;
                }
            }
        }

        // Helper: Toggle inputs enable/disable
        function toggleFormElements(disable) {
            const inputs = contactForm.querySelectorAll('input, textarea, button');
            inputs.forEach(el => {
                if (disable) {
                    el.setAttribute('disabled', 'disabled');
                } else {
                    el.removeAttribute('disabled');
                }
            });
        }
    }

    /* ==========================================================================
       IMAGE CAROUSELS IMPLEMENTATION
       ========================================================================== */
    function initCarousel(containerId, slideSelector, prevBtnSelector, nextBtnSelector, indicatorSelector = null) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const slides = container.querySelectorAll(slideSelector);
        const prevBtn = container.querySelector(prevBtnSelector);
        const nextBtn = container.querySelector(nextBtnSelector);
        const indicators = indicatorSelector ? container.querySelectorAll(indicatorSelector) : [];
        const track = container.querySelector('.carousel-track');
        
        let currentIndex = 0;
        const totalSlides = slides.length;
        if (totalSlides === 0) return;
        
        function showSlide(index) {
            if (index < 0) {
                currentIndex = totalSlides - 1;
            } else if (index >= totalSlides) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            
            if (track) {
                track.style.transform = `translate3d(-${currentIndex * 100}%, 0, 0)`;
            }
            
            slides.forEach((slide, i) => {
                if (i === currentIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            if (indicators.length > 0) {
                indicators.forEach((indicator, i) => {
                    if (i === currentIndex) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                });
            }
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showSlide(currentIndex + 1);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showSlide(currentIndex - 1);
            });
        }
        
        if (indicators.length > 0) {
            indicators.forEach(indicator => {
                indicator.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const slideIndex = parseInt(indicator.getAttribute('data-slide'));
                    showSlide(slideIndex);
                });
            });
        }
        
        // Touch Swipe Support for Mobile & Touchscreens
        let touchStartX = 0;
        let touchEndX = 0;

        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX - 40) {
                showSlide(currentIndex + 1);
            } else if (touchEndX > touchStartX + 40) {
                showSlide(currentIndex - 1);
            }
        }, { passive: true });
        
        let autoPlayInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 4000);
        
        container.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        container.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => {
                showSlide(currentIndex + 1);
            }, 4000);
        });
    }
    
    initCarousel('helpdesk-carousel', '.carousel-slide', '.carousel-prev', '.carousel-next', '.indicator');
    initCarousel('modal-helpdesk-carousel', '.modal-img', '.modal-carousel-prev', '.modal-carousel-next');
    initCarousel('todo-carousel', '.carousel-slide', '.carousel-prev', '.carousel-next', '.indicator');
    initCarousel('modal-todo-carousel', '.modal-img', '.modal-carousel-prev', '.modal-carousel-next');
    initCarousel('nomad-cafe-carousel', '.carousel-slide', '.carousel-prev', '.carousel-next', '.indicator');
    initCarousel('modal-nomad-cafe-carousel', '.modal-img', '.modal-carousel-prev', '.modal-carousel-next');
    initCarousel('cake-cafe-carousel', '.carousel-slide', '.carousel-prev', '.carousel-next', '.indicator');
    initCarousel('modal-cake-cafe-carousel', '.modal-img', '.modal-carousel-prev', '.modal-carousel-next');

    /* ==========================================================================
       AUTO-UPDATING COPYRIGHT YEAR
       ========================================================================== */
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
