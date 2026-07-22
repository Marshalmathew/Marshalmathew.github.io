document.addEventListener('DOMContentLoaded', () => {
    const orbs = document.querySelectorAll('.glow-orb');
    
    // Add subtle parallax effect to orbs on mousemove
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
            const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
            
            orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Add staggered fade in for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `fadeInUp 0.6s ease-out ${0.5 + (index * 0.2)}s forwards`;
    });
});
