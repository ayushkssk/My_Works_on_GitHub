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

// Project form submission handling
const addProjectForm = document.getElementById('addProjectForm');
const projectsContainer = document.getElementById('projects');

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;
    const pageLink = document.getElementById('pageLink').value;
    
    // Create new project card
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <h3 class="project-name">${projectName}</h3>
        <p class="project-description">${projectDescription}</p>
        <a href="${pageLink}" class="project-link" target="_blank">View Project</a>
    `;
    
    projectsContainer.appendChild(projectCard);
});

// Projects data management
let projects = JSON.parse(localStorage.getItem('projects')) || [];

// Function to save projects to localStorage
function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Function to create project card element
function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <h3 class="project-name">${project.name}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-links">
            <a href="${project.pageLink}" class="project-link" target="_blank">View Project</a>
        </div>
    `;
    
    return projectCard;
} 