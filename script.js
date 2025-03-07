// Add smooth scroll behavior to all sections
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent === 'Back to Top') return;
        const currentSection = e.target.closest('section') || e.target.closest('header');
        const nextSection = currentSection.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#000000';
        navbar.style.boxShadow = '0 2px 10px rgba(255, 105, 180, 0.3)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Image and content fade-in animation
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const fadeInElements = document.querySelectorAll('.img-container, .display-4, .lead, .btn-danger');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.8s ease';
    observer.observe(element);
});

// Button hover effects with smooth transition
document.querySelectorAll('.btn-danger').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.backgroundColor = 'transparent';
        button.style.color = '#FF69B4';
        button.style.boxShadow = '0 6px 20px rgba(255, 105, 180, 0.4)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.backgroundColor = '#FF69B4';
        button.style.color = 'white';
        button.style.boxShadow = '0 4px 15px rgba(255, 105, 180, 0.3)';
    });
});

// Prevent default form submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});
