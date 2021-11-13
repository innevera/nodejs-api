/** Convert Mongoose Schema to Swagger Schema */

const ModelConverter = (schema) => { 
    Object.keys(schema).map( (key) => {
        schema[key] = converter(schema[key]);
    });
    return obj = {
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
