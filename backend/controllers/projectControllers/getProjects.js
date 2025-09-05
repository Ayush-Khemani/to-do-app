const pool = require('../../db/db');


async function getProjects(req, res) {
    
    try {
        const user_id = req.user.id;
        // console.log(user_id);
        
        const [results] = await pool.execute('SELECT title from projects where user_id = ?', [user_id]);
        res.json({
            projects: results
        })
    }
    catch (err) {
        console.error("Error fetching projects:", err);
        res.status(500).json({ msg: "Server error while fetching projects" });
    }
    
    
}

module.exports = {getProjects};