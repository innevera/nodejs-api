/** Function String => 'string' */
const ModelConverter = (schema) => { 
    const obj = {...schema};
    Object.keys(obj).map( (key, val) => {
        obj[key] = converter(obj[key]);
    });
    return obj;
}

const converter = (val) => {
    switch(val){
        case String:
            return {
                type: 'string'
            };
        case Number:
            return 'integer';
        case Date:
            return 'date';
        default:
            return 'object';
    }
}

module.exports = ModelConverter;
