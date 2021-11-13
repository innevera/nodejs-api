const express = require('express')
const router = express.Router();
/** Middlewares */
const validate = require('../middleware/validate')
/** Validations */
const schema = require('../validations/Users')
/** Controller */
const { index, create } = require('../controllers/Users')

/** GET */
router.get('/', index)

/** POST */
router.route('/').post(validate(schema.createValidation), create)

/** EXPORT */
module.exports = router;