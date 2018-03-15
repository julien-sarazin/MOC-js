function hasProperties(data, properties) {

    // var fields = [];
  
    // for (var property of properties) {

    //     //let p = property.split('.', 10);

    //     if (data[property] === undefined) {

    //         fields.push(property);
    //     }   
    // }

    // return fields;

    console.log(data.length);

    var fields = [];

    allProperties = splitProperties(properties);
    //console.log(allProperties);

    for (var property of allProperties) {

    }

    return fields;



}

function whitelist(data, properties) {

    var allProperties = splitProperties(properties);

    for (var key in data) {
        if (!allProperties.find(property => key == property))
            delete data[key];
    }
    return data;
}

function blacklist(data, properties) {

    var allProperties = splitProperties(properties);
    for (var key in data) {

        for (property of allProperties) {
            if (key == property) {
                if (data[key])
                {
                    blacklist(data[key], properties);
                }
                else {
                    delete data[key];
                }
            }
        }
    }

    return data;
}

function splitProperties(properties) {
   
    var allProperties = [];

    properties.forEach(property => {
        const prop = property.split('.');
        allProperties = allProperties.concat(prop);
    });

    return allProperties;
}

module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
