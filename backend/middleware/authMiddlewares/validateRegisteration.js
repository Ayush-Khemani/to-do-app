const {registerationSchema} = require('../../validations/authSchema/registerationSchema');

function validateRegisteration(req, res, next) {
    const resp = registerationSchema.safeParse(req.body);

    if (!resp.success) {
        const errMsg = resp.error.issues.map(err => err.message);
        return res.status(400).json({msg : errMsg});
    }

    next();
}


module.exports = {
    validateRegisteration
}