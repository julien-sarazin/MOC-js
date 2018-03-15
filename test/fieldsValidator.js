function hasProperties(data, properties) {
    let res = [];
    properties.forEach((element) => {
        let e = element.split('.');
        if(!data.hasOwnProperty(e[0])) {
            res.push(element);
        }
    });
    return res

}

function whitelist(data, properties) {
    for(var propertyName in data) {
        if(!properties.includes(propertyName))
            delete data[propertyName]
    }
    return data

}

function blacklist(data, properties) {
    properties.forEach((element) => {
        if(data.hasOwnProperty(element))
            delete data[element]
    });
    return data
}

module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
