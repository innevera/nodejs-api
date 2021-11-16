const express = require('express')
const router = express.Router();
/** Middlewares */
const validate = require('../middleware/validate')
/** Validations */
const { validation } = require('../validations/Users')
/** Controller */
const { index, create } = require('../controllers/Users')

/** Get */
router.get('/', index)

/** Post */
router.route('/').post(validate(validation.create), create)

/** Export */
module.exports = router;