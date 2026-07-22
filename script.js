document.addEventListener('DOMContentLoaded', () => {
    const orbs = document.querySelectorAll('.glow-orb');
    
    // Subtle parallax effect on background orbs
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

    // Staggered fade in for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `fadeInUp 0.6s ease-out ${0.5 + (index * 0.15)}s forwards`;
    });

    // Recruiter Role Lens Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterableItems = document.querySelectorAll('.project-card[data-roles], .timeline-item[data-roles], .tag[data-roles]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const selectedRole = btn.getAttribute('data-role');

            filterableItems.forEach(item => {
                const roles = item.getAttribute('data-roles') ? item.getAttribute('data-roles').split(' ') : [];
                
                if (selectedRole === 'all' || roles.includes(selectedRole)) {
                    item.classList.remove('filtered-out');
                } else {
                    item.classList.add('filtered-out');
                }
            });
        });
    });
});

