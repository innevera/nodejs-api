/** Validation Tool */
const Joi = require('joi')

/** All Validation Objects */
const validation = {
    create: Joi.object({
        title: Joi.string().required().min(2),
        locale: Joi.number().required()
    })
}

/** Export Validations */
module.exports = {
    validation
}