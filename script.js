// Mobile Menu Navigation Toggle
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-list li a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// Simple Scroll Animation for Service Boxes
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-box, .about-text, .about-img-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});