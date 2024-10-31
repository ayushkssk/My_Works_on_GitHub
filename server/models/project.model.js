const sql = require("./db.js");

class Project {
    constructor(project) {
        this.title = project.title;
        this.description = project.description;
        this.github_link = project.githubLink;
        this.page_link = project.pageLink;
    }

    static async create(newProject) {
        try {
            const [result] = await sql.query(
                "INSERT INTO projects SET ?",
                newProject
            );
            return { id: result.insertId, ...newProject };
        } catch (err) {
            throw err;
        }
    }

    static async findAll() {
        try {
            const [projects] = await sql.query("SELECT * FROM projects");
            const [ratings] = await sql.query("SELECT * FROM ratings");
            
            return projects.map(project => {
                const projectRatings = ratings.filter(r => r.project_id === project.id);
                const averageRating = projectRatings.length 
                    ? projectRatings.reduce((acc, curr) => acc + curr.rating, 0) / projectRatings.length 
                    : 0;
                
                return {
                    ...project,
                    ratings: projectRatings,
                    averageRating
                };
            });
        } catch (err) {
            throw err;
        }
    }

    static async addRating(projectId, rating) {
        try {
            const [result] = await sql.query(
                "INSERT INTO ratings (project_id, rating) VALUES (?, ?)",
                [projectId, rating]
            );
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Project; 