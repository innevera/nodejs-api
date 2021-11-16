const CryptoJS = require('crypto-js');

const cryptedPass = (pwd) => {
    return CryptoJS.HmacSHA256(pwd, CryptoJS.HmacSHA1(pwd, process.env.PASSWORD_HASH).toString()).toString();
}

module.exports = {
    cryptedPass
}