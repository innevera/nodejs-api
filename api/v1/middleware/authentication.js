const httpStatus = require('http-status');
const JWT = require('jsonwebtoken');

const authToken = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1] || null;
    if (token === null)
        return res.status(httpStatus.UNAUTHORIZED).send({
            error: {
                name: "JsonWebTokenError",
                message: req.t('auth.token_error')
            }
        });

    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (error, user) => {
        if (error)
            return res.status(httpStatus.FORBIDDEN).send({ error })

        req.user = user;
        next();
    });
}

module.exports = authToken;