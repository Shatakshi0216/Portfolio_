document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    var typed = new Typed('#text', {
        strings: ['Problem Solver', 'Frontend Developer', 'Backend Developer'],
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });

    // Skills tab functionality
    const tabs = document.querySelectorAll(".tab");
    const skillsContainer = document.querySelectorAll(".skills-container > div");

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active-tab'));
            tab.classList.add('active-tab');

            const target = tab.getAttribute('data-target');
            skillsContainer.forEach(skill => {
                skill.classList.add('active');
                if (skill.classList.contains(target)) {
                    skill.classList.remove('active');
                }
            })
        })
    });

    // Smooth scroll to contact section
    const getInTouchBtn = document.querySelector('.get-in-touch-btn');
    getInTouchBtn.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});


