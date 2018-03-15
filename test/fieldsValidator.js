function hasProperty(data, property) {

}

function hasProperties(data, properties) {

    // var fields = [];
  
    // for (var property of properties) {

    //     //let p = property.split('.', 10);
    //     console.log(property);
    //     if (data[property] === undefined) {

    //         fields.push(property);
    //     }   
    // }
    // console.log("\n missing \n");
    // console.log(fields);
    // return fields;

    allProperties = splitProperties(properties);

    for (var property in allProperties) {
        if (!data.hasOwnProperty(properties)) {
            console.log("debug if : ", property);
            hasProperties(object, data[properties]);
        }
        else {
            console.log("debug else ", object);
        }
    }


 

}

function whitelist(data, properties) {

    var allProperties = splitProperties(properties);

    for (var x in data) {
        if (!allProperties.find(property => x == property))
            delete data[x];
    }
    return data;
}

function blacklist(data, properties) {

    var allProperties = splitProperties(properties);
    for (var x in data) {
        if (allProperties.find(property => x == property))
            delete data[x];
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
    hasProperty,
    hasProperties,
    whitelist,
    blacklist
};
