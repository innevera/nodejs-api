/** ExpressJS */
const express = require('express');
const router = express.Router();
/** Middlewares */
const authenticate = require("../middleware/authentication");
const validate = require('../middleware/validate');
/** Validations */
const { validation } = require('../validations/Blogs');
/** Controller */
const { index, create } = require('../controllers/Users');


/** Get */
router.route('/').get(authenticate, index);

/** Post */
router.route('/').post(authenticate, validate(validation.create), create);

/** Exports */
module.exports = router;