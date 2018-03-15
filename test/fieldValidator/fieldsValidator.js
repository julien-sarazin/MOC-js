function hasProperties(data, properties) {
    let containGivenProperties = true;
    let array = [];

    for(let object in data)

    return containGivenProperties === true ? [] : array;
}

function whitelist(data, properties) {
    for(let property in data){
        if(!(properties.includes(property)))
            delete data[property];
    }
    return data;
}

function blacklist(data, properties) {
    for(let property in data){
        if(properties.includes(property))
            delete data[property];
    }
    return data;
}

module.exports = {
    hasProperties,
    whitelist,
    blacklist
};