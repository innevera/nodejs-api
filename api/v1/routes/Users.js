const express = require('express');
const router = express.Router();
/** Middlewares */
const validate = require('../middleware/validate');
/** Validations */
const { validation } = require('../validations/Users');
/** Controller */
const { index, create, login } = require('../controllers/Users');
/** Authentication */
const authenticate = require("../middleware/authentication");
/** Get */
router.route('/').get(authenticate, index);

/** Post */
router.route('/').post(validate(validation.create), create);

/** Login */
router.route("/login").post(login);

/** Export */
module.exports = router;