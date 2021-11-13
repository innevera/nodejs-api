/** Convert Function Types to Swagger */

const ModelConverter = (schema) => { 
    const obj = {...schema};
    Object.keys(obj).map( (key) => {
        obj[key] = converter(obj[key]);
    });
    return obj;
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
