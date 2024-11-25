// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const sunIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
        sunIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Toggle icon
    if (body.classList.contains('dark-theme')) {
        sunIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        sunIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', '');
    }
});

// Demo Fill functionality
const demoFillBtn = document.getElementById('demoFill');
demoFillBtn.addEventListener('click', () => {
    document.getElementById('projectName').value = 'Portfolio Website';
    document.getElementById('projectDescription').value = 'A responsive portfolio website built with HTML, CSS, and JavaScript';
    document.getElementById('pageLink').value = 'https://myportfolio.com';
}); 