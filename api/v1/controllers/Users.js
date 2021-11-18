const { insert, list, total } = require('../services/Users')
const httpStatus = require('http-status');
const { useCrypto, usePaging } = require('../scripts/utils');
const { GET_SUCCESS } = require('../scripts/utils/useResponseStatus')
const logger = require('../scripts/logger/Users')

const index = (req, res) => {
    const query = req.query;
    const paging = usePaging(query);
    list(query, paging)
        .then(response => {
            /** Get Total Document Count */
            total(query).then(count => {
                res.status(httpStatus.OK).send({
                    Users: Object.values(response),
                    ...GET_SUCCESS({ query, paging, count })
                })
            })
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
        })
}

const create = (req, res) => {
    req.body.password = useCrypto(req.body.password);
    insert(req.body)
        .then(response => {
            res.status(httpStatus.CREATED).send(response)
            logger.log({
                level: 'info',
                message: req.body
            })
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
        })
}

module.exports = {
    index,
    create
}