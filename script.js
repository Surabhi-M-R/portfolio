document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Cursor effects on hover
    const hoverElements = document.querySelectorAll('a, button, .project-card, .about-card, .nav-link');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'var(--beige)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
            cursorFollower.style.borderColor = 'var(--beige)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'var(--accent)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.borderColor = 'var(--accent)';
        });
    });
    
    // Animate hero title words
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Animate skills progress bars
    const skillItems = document.querySelectorAll('.skill-item');
    
    function animateSkills() {
        skillItems.forEach(item => {
            const percent = item.getAttribute('data-percent');
            const progressBar = item.querySelector('.skill-progress');
            progressBar.style.width = percent + '%';
        });
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                if (entry.target.classList.contains('skills-container')) {
                    animateSkills();
                }
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav').classList.remove('active');
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    
    menuToggle.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('active');
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 3D tilt effect for profile image
    const imageWrapper = document.querySelector('.image-wrapper');
    
    if (imageWrapper) {
        imageWrapper.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            imageWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
        
        imageWrapper.addEventListener('mouseenter', () => {
            imageWrapper.style.transition = 'none';
            document.querySelector('.profile-photo').style.transform = 'translateZ(50px)';
            document.querySelector('.image-border').style.transform = 'translateZ(30px)';
        });
        
        imageWrapper.addEventListener('mouseleave', () => {
            imageWrapper.style.transition = 'all 0.5s ease';
            imageWrapper.style.transform = 'rotateY(0) rotateX(0)';
            document.querySelector('.profile-photo').style.transform = 'translateZ(30px)';
            document.querySelector('.image-border').style.transform = 'translateZ(15px)';
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});