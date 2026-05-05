/**
 * DAWSON'S AWESOME - Main Site Logic
 * Handles UI interactions and form submissions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. STICKY NAVIGATION EFFECT
    // Shrinks the nav and increases opacity when the user scrolls
    const nav = document.querySelector('nav ul');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(0, 0, 0, 0.7)';
                nav.style.padding = '8px 30px';
                nav.style.gap = '6rem'; // Slightly tighter for a "compact" look
            } else {
                nav.style.background = 'rgba(0, 0, 0, 0.3)';
                nav.style.padding = '12px 40px';
                nav.style.gap = '10rem';
            }
        });
    }

    // 2. PRODUCT IMAGE 3D TILT (Shop Page)
    // Makes the sauce bottles follow the mouse slightly for a premium feel
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const img = card.querySelector('img');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate rotation (max 10 degrees)
            const rotateX = (centerY - y) / 10;
            const rotateY = (x - centerX) / 10;

            img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
        });

        card.addEventListener('mouseleave', () => {
            img.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });


});