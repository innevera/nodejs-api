/** Validation Tool */
const Joi = require('joi')

/** All Validation Objects */
const validation = {
    create: Joi.object({
        name: Joi.string().required().min(2),
        surname: Joi.string().required().min(2),
        username: Joi.string().required().min(4),
        password: Joi.string().required().min(6),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(), // only TR phones
        media: Joi.string(),
        //role: Number,
    })
}

/** Export Validations */
module.exports = {
    validation
}