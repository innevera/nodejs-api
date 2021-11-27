/** Tools */
const httpStatus = require('http-status');
/** Services */
const { insert, list, total, removeBlog } = require('../services/Blogs');
/** Utils */
const { useCrypto, usePaging } = require('../scripts/utils');
const { GET_SUCCESS, NOT_FOUND } = require('../scripts/utils/useResponseStatus');
/** Logger */
// const logger = require('../scripts/logger/Blogs');

/** Get all blogs as a list */
const index = (req, res) => {
    const query = req.query;
    const paging = usePaging(query);
    list(query, paging)
        .then(response => {
            /** Get Total Document Count */
            total(query)
                .then(count => {
                    res.status(httpStatus.OK).send({
                        Blogs: Object.values(response),
                        ...GET_SUCCESS({ query, paging, count })
                    })

                    // logger.info({
                    //     message: req.body
                    // })

                })
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
            // logger.error({
            //     message: req.body
            // })
        })
}

/** Create a new blog */
const create = (req, res) => {
    req.body.password = useCrypto(req.body.password);
    insert(req.body)
        .then(response => {
            res.status(httpStatus.CREATED).send(response)
            // logger.info({
            //     message: req.body
            // })
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
            // logger.error({
            //     message: req.body
            // })
        })
}

/** Delete a new blog */
const remove = (req, res) => {
    req.body.password = useCrypto(req.body.password);
    removeBlog(req.body)
        .then(response => {
            res.status(httpStatus.OK).send(response)
            // logger.info({
            //     message: req.body
            // })
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
            // logger.error({
            //     message: req.body
            // })
        })
}

/** Exports */
module.exports = {
    index,
    create,
    remove
}