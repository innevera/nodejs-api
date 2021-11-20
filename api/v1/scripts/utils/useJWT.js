const JWT = require('jsonwebtoken');

const generateToken = user => {
    return JWT.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: "1w" });
}

const refreshToken = user => {
    return JWT.sign(user, process.env.REFRESH_TOKEN_SECRET_KEY)
}

module.exports = {
    generateToken, refreshToken
}