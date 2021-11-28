const activeRef = {
    type: 'object',
    properties: {
        approve: { type: 'boolean' },
        updatedAt: { type: 'string', format: 'date-time' }
    }
}
const deletedRef = {
    type: 'object',
    properties: {
        approve: { type: 'boolean' },
        updatedAt: { type: 'string', format: 'date-time' }
    }
}

module.exports = {
    activeRef,
    deletedRef
}