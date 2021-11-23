const { insert, list, userLogin, total } = require('../services/Users');
const httpStatus = require('http-status');
const { generateToken, refreshToken } = require('../scripts/utils/useJWT');
const { useCrypto, usePaging } = require('../scripts/utils');
const { GET_SUCCESS } = require('../scripts/utils/useResponseStatus');
const logger = require('../scripts/logger/Users');

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

const login = (req, res) => {
    req.body.password = useCrypto(req.body.password);
    userLogin(req.body)
        .then(user => {
            if (!user) {
                return res.status(httpStatus.NOT_FOUND)
                    .send({ message: "User not found!" })
            }

            user = {
                ...user.toObject(),
                tokens: {
                    access_token: generateToken({ ...user }),
                    refresh_token: refreshToken({ ...user })
                }
            }
            delete user.password;
            res.status(httpStatus.OK).send(user)
        })
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
}

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

module.exports = {
    index,
    login,
    create
}