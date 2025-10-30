// AOS Animation
AOS.init({ duration: 1000, once: true });

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) navbarCollapse.classList.remove('show');
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
