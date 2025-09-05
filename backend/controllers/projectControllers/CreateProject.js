const pool = require('../../db/db');


async function createProject(req, res) {
    // How are we going to get user_id,through the JWT token.
    // title and description? from req.body

    try {
        const user_id = req.user.id; 
        const {title, description} = req.body;

        if (!title) {
            return res.status(400).json({ msg: "Project title is required" });
        }


        const [result] = await pool.execute('Insert into projects (user_id, title, description) values (?, ?, ?)', [user_id, title, description]);
        

        res.status(201).json({
            id: result.insertId,
            title,
            description,
            user_id,
            msg: "Project created successfully"
        });



    }   catch(err) {
        res.json({
            msg : err
        })
    } 
}

module.exports = {createProject};