const GET_SUCCESS = ({ query, paging, count }) => {
    return {
        IsSuccess: true,
        IsFatal: false,
        Total: count,
        Skip: paging?.skip || 0,
        Limit: paging.limit,
        Page: Number(query.page) || 1
    }
}

const DELETE_SUCCESS = (message) => {
    return {
        IsSuccess: true,
        IsFatal: false,
        Message: message
    }
}

const NOT_FOUND = (message) => {
    return {
        IsSuccess: false,
        IsFatal: false,
        Message: message
    }
}

module.exports = {
    GET_SUCCESS,
    DELETE_SUCCESS,
    NOT_FOUND
}