const usePaging = (query) => {
    const { page, limit } = query;

    /** Initialize Paging Options */
    const paging = { limit: 3 };

    if (limit && !isNaN(limit))
        paging.limit = Number(limit);

    if (page && !isNaN(page))
        paging.skip = Number(page) * paging.limit

    return paging;
}

module.exports = usePaging;