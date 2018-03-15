function hasProperty(data, property) {
    const propArray = property.split('.');
    let newData = data;

    for(const i in propArray) {
        let prop = propArray[i];
        newData = newData[prop];
        if (newData === undefined) return false;
    }
    return true;
}

function fillNotFound(data, isAnArray, props, array, i) {
    props.forEach(prop => { if (!hasProperty(data, prop)) array.push(isAnArray ? '[' + i + '].' + prop : prop); });
}

function hasProperties(data, properties) {
    const notFound = [];
    const dataIsAnArray = Array.isArray(data);

    if (dataIsAnArray) {
        let i = 0;
        data.forEach(obj => { fillNotFound(obj, true, properties, notFound, i); i++; })
    } else {
        fillNotFound(data, false, properties, notFound);
    }
    return notFound;
}

function isInObject(i, props, index) {
    for (const y in props) {
        let prop = props[y][index];
        if (prop && prop === i) return true;
    }
    return false;
}

function checkAndDelete(data, index, props) {
    for (const i in data) {
        if (typeof data[i] !== 'object' && !isInObject(i, props, index)) delete data[i];
        else if (typeof data[i] === 'object') checkAndDelete(data[i], index + 1, props);
    }
}

function whitelist(data, properties) {
    const props = [];

    for (const i in properties) {
        let prop = properties[i];
        let propArray = prop.split('.');
        props.push(propArray);
    }

    let index = 0;
    checkAndDelete(data, index, props);
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
                if(length === count) delete newData[prop];
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
