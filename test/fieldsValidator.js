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
    properties.forEach(prop => {
        if (!hasProperty(data, prop)) notFound.push(prop);
     });
    return notFound;
}

function whitelist(data, properties) {
    for (const i in data) {
        if (!isInObject(i, properties)) delete data[i];
    }
}

function isInObject(i, properties) {
    let props = [];
    properties.forEach(prop => {
        let split = prop.split('.');
        props.push(split);
    });
    return props.find(prop => {
        prop === i
    });
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
