const joi = require('joi')

const joiUserSchema=joi.object({
    username:joi.string().required(),
    password: joi.string().min(4).required(),
    cpassword: joi.string().min(4),
    email: joi.string().email(),
    admin:joi.boolean().optional(),
    blocked:joi.boolean().optional()
})
