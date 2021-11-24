/** Tools */
const httpStatus = require('http-status');
/** Services */
const { insert, list, userLogin, total } = require('../services/Users');
/** Utils */
const { generateToken, refreshToken } = require('../scripts/utils/useJWT');
const { useCrypto, usePaging } = require('../scripts/utils');
const { GET_SUCCESS, NOT_FOUND } = require('../scripts/utils/useResponseStatus');
/** Logger */
const logger = require('../scripts/logger/Users');

/** Get all users as a list */
const index = (req, res) => {
    const query = req.query;
    const paging = usePaging(query);
    list(query, paging)
        .then(response => {
            /** Get Total Document Count */
            total(query)
                .then(count => {
                    res.status(httpStatus.OK).send({
                        Users: Object.values(response),
                        ...GET_SUCCESS({ query, paging, count })
                    })

                    logger.info({
                        message: req.body
                    })

                })
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
            logger.error({
                message: req.body
            })
        })
}

/** Login */
const login = (req, res) => {
    req.body.password = useCrypto(req.body.password);
    userLogin(req.body)
        .then(user => {
            if (!user) {
                return res.status(httpStatus.OK).send({
                    ...NOT_FOUND(req.t('user.not_found'))
                })
            }
            /** Create user object with access token and refresh token */
            user = {
                ...user.toObject(),
                tokens: {
                    access_token: generateToken({ ...user }),
                    refresh_token: refreshToken({ ...user })
                }
            }

            /** Delete "password" from user result object */
            delete user.password;
            res.status(httpStatus.OK).send({
                ...user,
                IsSuccess: true,
                IsFatal: false,
            })

            logger.info({
                message: req.body
            })
        })
        .catch(e => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
            logger.error({
                message: req.body
            })
        })
}

/** Create a new user */
const create = (req, res) => {
    req.body.password = useCrypto(req.body.password);
    insert(req.body)
        .then(response => {
            res.status(httpStatus.CREATED).send(response)
            logger.info({
                message: req.body
            })
        })
        .catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
            logger.error({
                message: req.body
            })
        })
}

/** Exports */
module.exports = {
    index,
    login,
    create
}