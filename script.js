document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            header.style.padding = '15px 40px';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '20px 40px';
        }
    });

    // 2. Mobile Menu Toggle (Basic)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    mobileMenuBtn.addEventListener('click', () => {
        alert('모바일 메뉴 기능은 현재 준비 중입니다.');
    });

    // 3. Smooth Appearance on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.grid-item').forEach(item => {
        observer.observe(item);
    });

    // 4. Touch Interactions for Grid Items
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
            this.style.borderBottom = '4px solid #76b900';
        });

        item.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 5. Banner Controls (Mock functionality)
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    prevBtn.addEventListener('click', () => {
        console.log('Previous slide');
    });

    nextBtn.addEventListener('click', () => {
        console.log('Next slide');
    });

    // 6. Dynamic Hero Parallax
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroImg = document.querySelector('.hero-bg img');
        if (heroImg) {
            heroImg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});
