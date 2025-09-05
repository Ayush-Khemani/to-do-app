const bcrypt = require('bcrypt');
const {loginSchema} = require('../../validations/authSchema/loginSchema');


function validateLogin(req, res, next) {
    const resp = loginSchema.safeParse(req.body);

    if (!resp.success) {
        const err_msg =  resp.error.issues.map(err => err.message);

        return res.status(400).json({ errors : err_msg});
    }

    next();
}


async function checkLoginCredentials(req, res, next) {

    try {
        const [rows] = await pool.execute('SELECT * FROM users WHERE EMAIL = ?', [req.body.email]);

        if (rows.length === 0) {
            return res.status(401).json({msg : "Invalid Login Credentials"});
        }

        const user = rows[0];
        
        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) {

        return res.status(401).json({
            msg : "Invalid Login Credentials"
        })
        
        }

        // Attach the user to the req object
        req.user = {
            id : user.id,
            email : user.email,
        }
        next();
    

    }
    catch(err) {
        console.log("Login check failed", err);
        res.status(500).json({msg : "Server error during login check"});
        
    }
    
}



module.exports = {
    validateLogin,
    checkLoginCredentials
}