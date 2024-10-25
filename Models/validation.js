const joi = require('joi')

const joiUserSchema=joi.object({
    username:joi.string().required(),
    password: joi.string().required(),
    cpassword: joi.string().required(),
    phone:joi.number().required(),
    email: joi.string().email().required(),
    gender: joi.string().required(),
    address: joi.string().required(),
    admin:joi.boolean().optional(),
    blocked:joi.boolean().optional()
})
module.exports={joiUserSchema}
