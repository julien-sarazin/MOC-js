function hasProperty(data, property) {
    let propArray = property.split('.');
    let newData = data;
    try{
        propArray.forEach(prop => {
            newData = newData[prop];
            if (newData === undefined) throw 0;
        });
    } catch(e){
        return false;
    }
    return true;
}

function hasProperties(data, properties) {
    let notFound = [];
    const dataIsAnArray = Array.isArray(data);
    if (dataIsAnArray) {
        let i = 0;
        data.forEach(obj => { fillNotFound(obj, dataIsAnArray, properties, notFound, i); i++; })
    } else {
        fillNotFound(data, dataIsAnArray, properties, notFound);
    }
    return notFound;
}

function fillNotFound(data, isAnArray, props, array, i) {
    props.forEach(prop => { if (!hasProperty(data, prop)) array.push(isAnArray ? '[' + i + '].' + prop : prop); });
}

function whitelist(data, properties) {
    let props = [];
    properties.forEach(prop => {
        let split = prop.split('.');
        split.forEach(e => props.push(e));
    });
    for (const i in data) { if (!isInObject(i, props)) delete data[i]; }
}

function isInObject(i, props) {
    try{
        props.forEach(prop => {
            if (prop === i) {
                throw true;
            }
        });
    } catch (e) {
        return true;
    }
    return false;
}

function blacklist(data, properties) {
    for (const i in properties) {
        const globalProp = properties[i];
        let propArray = globalProp.split('.');
        let length = propArray.length;

        if (length === 1) delete data[globalProp];
        else {
            let newData = data;
            let count = 1;
            for (const i in propArray) {
                const prop = propArray[i];
                if(length === count){
                    delete newData[prop]
                }
                newData = newData[prop];
                count++;
            }
        }
    }
}


module.exports = {
    hasProperty,
    hasProperties,
    whitelist,
    blacklist
};
