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
});
