function hasProperties(data, properties) {

    var fields = [];

    if (data.length > 1) {
        allProperties = splitProperties(properties);

        var index = 0;
        for (var datas in data) {
            fields = fields.concat(filledArray(data[datas], allProperties, index));
            index++;
        }

        console.log(fields);

        function filledArray(data, allProperties, index) {
            var fields = [];
            console.log(data);
            for (var field in data) {
                console.log("debug 1.",index);
                if (allProperties.find(property => property == field)) {
                    console.log("debug");
                    fields.push("[",index,"].",data[field]);
                }
            }
            return fields;
        }
    } 
    else {
        for (var property of properties) {

            if (data[property]) {
                fields.push(property);
            }   
        }
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



   var allProperties = [];

   properties.forEach(property => llProperties.push(property.split('.') );

    for (var property of properties) {

        if (data[property] != undefined) {
            delete data[property];
        }
        else {

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
