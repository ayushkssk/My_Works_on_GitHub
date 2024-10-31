const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const Project = require('./models/project.model.js');

// Get all projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new project
app.post('/api/projects', async (req, res) => {
    try {
        const project = new Project({
            title: req.body.title,
            description: req.body.description,
            githubLink: req.body.githubLink,
            pageLink: req.body.pageLink
        });
        
        const newProject = await Project.create(project);
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Add rating to a project
app.post('/api/projects/:id/ratings', async (req, res) => {
    try {
        const result = await Project.addRating(req.params.id, req.body.rating);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 