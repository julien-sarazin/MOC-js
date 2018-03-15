function hasProperty(data, property) {

}

function hasProperties(data, properties) {

    var fields = [];
    for (var property of properties) {

        let p = property.split('.', 10);

        if (data[p] === undefined) {

            fields.push(property);
        }
        
    }
    return fields;
}

function whitelist(data, properties) {

    var allProperties = [];

    properties.forEach(prop => {
        const prp = prop.split('.');
        allProperties = allProperties.concat(prp);
    });

    for (var x in data) {
        if (!allProperties.find(property => x == property))
            delete data[x];
    }
    return data;
}

function blacklist(data, properties) {

    var allProperties = [];

    properties.forEach(prop => {
        const prp = prop.split('.');
        allProperties = allProperties.concat(prp);
    });

    for (var x in data) {
        if (allProperties.find(property => x == property))
            delete data[x];
    }

    return data;
}


module.exports = {
    hasProperty,
    hasProperties,
    whitelist,
    blacklist
};
