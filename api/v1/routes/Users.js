/** ExpressJS */
const express = require('express');
const router = express.Router();
/** Middlewares */
const authenticate = require("../middleware/authentication");
const validate = require('../middleware/validate');
/** Validations */
const { validation } = require('../validations/Users');
/** Controller */
const { index, create, login } = require('../controllers/Users');


/** Get */
router.route('/').get(authenticate, index);

/** Post */
router.route('/').post(authenticate, validate(validation.create), create);

/** Login */
router.route("/login").post(validate(validation.login), login);

/** Exports */
module.exports = router;