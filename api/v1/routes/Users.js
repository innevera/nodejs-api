const express = require('express')
const router = express.Router();
/** Middlewares */
const validate = require('../middleware/validate')
    /** Validations */
const { validation } = require('../validations/Users')
    /** Controller */
const { index, create } = require('../controllers/Users')

/** GET */
router.get('/', index)

/** POST */
router.route('/').post(validate(validation.create), create)

/** EXPORT */
module.exports = router;