const joi = require('joi')

//register schema
const joiUserSchema=joi.object({
    name:joi.string().required(),
    password: joi.string().required(),
    cpassword: joi.string().required(),
    phone:joi.number().required(),
    email: joi.string().email().required(),
    gender: joi.string().required(),
    address: joi.string().required(),
    admin:joi.boolean().optional(),
    blocked:joi.boolean().optional()
})

//login schema
const joiLoginSchema=joi.object({
    name:joi.string(),
    password:joi.string()

})

//product schema
const JoiProductSchema = joi.object({
    productName: joi.string().required(),
    category: joi.string().required(),
    price: joi.number().required(),
    actualPrice: joi.number(),
    productDescription: joi.string().required(),
  })


module.exports={joiUserSchema,joiLoginSchema,JoiProductSchema}
