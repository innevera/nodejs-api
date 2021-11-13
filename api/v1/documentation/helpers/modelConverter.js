/** Function String => 'string' */
const ModelConverter = (schema) => { 
    const obj = {...schema};
    Object.keys(obj).map( (key, val) => {
        obj[key] = {type: converter(obj[key])};
    });
    return obj;
}

const converter = (val) => {
    switch(val){
        case String: case Date:
            return 'string';
        case Number:
            return 'integer';
        default:
            return 'object';
    }
}

module.exports = ModelConverter;
