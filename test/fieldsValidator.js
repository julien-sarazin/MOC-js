function hasProperties(data, properties) {

    var fields = [];

    if (data.length > 1) {
        allProperties = splitProperties(properties);

        var index = 0;
        for (var datas in data) {
            fields = fields.concat(filledArray(data[datas], allProperties, index));
            index++;
        }

        function filledArray(data, allProperties, index) {
            var fields = [];

            for (var field in data) {
                if (allProperties.find(property => property == field))
                    fields.push("[",index,"].",data[field]);

            }
            return fields;
        }
    } 
    else {
        for (var property of properties) {
            if (data[property])
                fields.push(property);
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

   properties.forEach(property => {
       allProperties.push(property.split('.'))
   });

    for (var property of allProperties) {

        if (data[property] != undefined)
            delete data[property];

        else if (property.length > 1){

            if (property.length == 2)
                delete data[property[0]][property[1]];
            else if (property.length == 3)
                delete data[property[0]][property[1]][property[2]];
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
