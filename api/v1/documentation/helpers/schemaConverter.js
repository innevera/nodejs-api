/** Convert Mongoose Schema to Swagger Schema */

const ModelConverter = (model) => { 
    const schema = model.schema.obj;
    Object.keys(schema).map( (key) => {
        schema[key] = converter(schema[key]);
    });
    return {
        type: "object",
        properties: {
            ...schema
        }
    };
}

const converter = (val) => {
    switch(val){
        case String: case Date:
            return {type: 'string'};
        case Number:
            return {type: 'integer'};
        case Boolean:
            return {type: 'boolean'};
        default:
            return {type: 'object'};
    }
}

module.exports = ModelConverter;
