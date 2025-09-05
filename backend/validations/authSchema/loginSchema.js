const zod = require('zod');

const loginSchema = zod.object({
    email : zod.email("Invalid email format"),
    password : zod.string().min(8, {error : "Password must be 8 characters long"})
    .regex(/[0-9]/, {error : "Password must contain at least one number" })
})


module.exports = {
    loginSchema
}