/** Validation Tool */
const Joi = require('joi')

/** All Validation Objects */
const validation = {
    create: Joi.object({
        name: Joi.string().required().min(2),
        password: Joi.string().required().min(6)
    })
}

/** Export Validations */
module.exports = {
    validation
}