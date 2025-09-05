const pool = require('../../db/db');


async function createTask(req, res) {
    // for the task we need: project_id, title, descrption 
    try {
        const user_id = req.user.id; 
        const { project_id, title, description } = req.body;


         if (!project_id || !title) {
            return res.status(400).json({ msg: "project_id and title are required" });
        }



        const [result] = await pool.execute(
            'INSERT INTO tasks (project_id, title, description, status) VALUES (?, ?, ?, ?)',
            [project_id, title, description || null, 'pending']
        );

        res.status(201).json({
            id: result.insertId,
            project_id,
            title,
            description,
            status: 'pending',
            msg: "Task created successfully"
        });



    }   catch(err) {
        console.error("Error creating task:", err);
        res.status(500).json({ msg: "Server error while creating task" });
    } 
}

module.exports = {createTask};