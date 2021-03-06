/** Validation Tool */
const Joi = require('joi')

/** All Validation Objects */
const validation = {
    create: Joi.object({
        name: Joi.string().required().min(2),
        surname: Joi.string().required().min(2),
        username: Joi.string().required().min(4),
        password: Joi.string().min(6),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }),
        phone: Joi.string(), // only TR phones
        media: Joi.string(),
        //role: Number,
    }),
    login: Joi.object({
        username: Joi.string().required().min(4),
        password: Joi.string().required().min(6)
    })
}

/** Export Validations */
module.exports = {
    validation
}