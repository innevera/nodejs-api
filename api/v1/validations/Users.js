const Joi = require('joi')

const validation = {
    create: Joi.object({
        name: Joi.string().required().min(2)
    })
}

module.exports = {
    validation
}