/** Convert Mongoose Schema to Swagger Schema */
const ModelConverter = (model) => {
    const schema = model.schema.obj;
    Object.keys(schema).map(key => {
        if (!['active', 'deleted'].includes(key))
            schema[key] = converter(schema[key]);
        else
            schema[key] = key == "active" ? {"$ref": '#/components/schemas/active'} : {"$ref": '#/components/schemas/deleted'};
    });
    return {
        type: "object",
        properties: {
            ...schema
        }
    };
}

const converter = (val) => {
    switch (val) {
        case String:
            return { type: 'string' }
        case Number:
            return { type: 'integer' }
        case Boolean:
            return { type: 'boolean' }
        case Array:
            return { type: 'array', items: { type: 'string' } }
        case Date:
            return { type: 'string', format: 'date-time' }
        case Object:
            return { type: 'object' }
        default:
            if (Object.keys(val).length && 'type' in val) {
                return converter(val.type);
            }
            return { type: 'object' }
    }
}

module.exports = ModelConverter;
