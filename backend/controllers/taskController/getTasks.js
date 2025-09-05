const pool = require('../../db/db');


async function getTasks(req, res) {
    
    try {
        const user_id = req.user.id;
        console.log(user_id);
         
        const project_id = req.params.project_id;
        console.log(project_id);
        

        if (!project_id) {
            return res.status(400).json({ msg: "Project ID is required" });
        }

        const [projects] = await pool.execute(
            'SELECT * FROM projects WHERE id = ? AND user_id = ?',
            [project_id, user_id]
        );

        if (projects.length === 0) {
            return res.status(403).json({ msg: "Not authorized to view tasks of this project" });
        }

        const [tasks] = await pool.execute(
            'SELECT id, title, description, status, created_at FROM tasks WHERE project_id = ?',
            [project_id]
        );

        res.json({ tasks });

    } catch (err) {
        console.error("Error fetching tasks:", err);
        res.status(500).json({ msg: "Server error while fetching tasks" });
    }
}

module.exports = { getTasks };
    
    