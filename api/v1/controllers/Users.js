const { insert, list, total } = require('../services/Users')
const httpStatus = require('http-status');
const { useCrypto, usePaging } = require('../scripts/utils');


const index = (req, res) => {
    const query = req.query;
    const paging = usePaging(query);
    list(query, paging)
        .then(response => {
            /** Get Total Document Count */
            total(query).then(count => {
                res.status(httpStatus.OK).send({
                    Users: Object.values(response),
                    IsSuccess: true,
                    IsFatal: false,
                    Total: count,
                    Skip: paging?.skip || 0,
                    Limit: paging.limit,
                    Page: Number(query.page) || 1
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
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
        })
}

module.exports = {
    index,
    create
}