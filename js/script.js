// Highlight the input on focus
const searchInput = document.querySelector('input');

searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0 0 15px #ff6600';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
});

// Smooth scroll for anchor links (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
