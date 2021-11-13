const { insert, list } = require('../services/Users')
const httpStatus = require('http-status');

const index = (req, res) => {
    list().then(resp => {
        res.contentType('application/json');
        res.status(httpStatus.OK).send({
            isSuccess: true,
            isFatal: false,
            ...resp
        })
    })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
        })
}

const create = (req, res) => {
    insert(req.body)
        .then(resp => {
            res.status(httpStatus.CREATED).send(resp)
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
        })
}

module.exports = {
    index,
    create
}