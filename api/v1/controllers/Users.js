const { insert, list } = require('../services/Users')
const httpStatus = require('http-status');
const { cryptedPass } = require('../scripts/utils');

const index = (req, res) => {
    list().then(response => {
        res.contentType('application/json');
        res.status(httpStatus.OK).send({
            data: Object.values(response),
            isSuccess: true,
            isFatal: false
        })
    })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
        })
}

const create = (req, res) => {
    req.body.password = cryptedPass(req.body.password);
    insert(req.body)
        .then(response => {
            res.status(httpStatus.CREATED).send(response)
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
        })
}

module.exports = {
    index,
    create
}