const httpStatus = require('http-status')
const logger = require('../scripts/logger/Users')
const validate = (schema) => (req, res, next) => {
    const { value, error } = schema.validate(req.body)
    if (error) {
        const errorMessage = error.details?.map(detail => detail.message).join(', ')
        res.status(httpStatus.BAD_REQUEST).json({ error: errorMessage })
        logger.error({             
            message: error
        })
        return
    }
    Object.assign(req, value)
    return next()
}

module.exports = validate