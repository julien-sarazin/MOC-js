function hasProperties(data, properties) {
    let missingFields = [];

    if (Array.isArray(data)) {
        data.forEach(obj => missingFields.push(hasProperties(obj, properties)));
        let originalLength = missingFields.length;
        for(let i = 0; i < originalLength; i+=1 ) {
            missingFields[i].forEach(field => missingFields.push(`[${i}].${field}`));
        }
        for(let i = 0; i < originalLength; i+=1 ) {
            missingFields.shift();
        }

        return missingFields;
    }

    properties.forEach(prop => {
        propies = prop.split('.');
        if(data.hasOwnProperty(propies[0])) {
            let p = propies[0];
            propies.shift();

            missingFields.concat(hasProperties(data[p], propies));
        } else {
            missingFields.push(propies.join('.'));
        }
    });

    return missingFields;
}

/*
* */

function whitelist(data, properties) {
    let newProperties = [];
    properties.forEach(property => {
        let propies = property.split('.');
        if (propies.length > 1) {
            newProperties.push(propies[0]);
            propies.shift();
            propies = propies.join('.');
            data[property] = whitelist(data[property], [propies]);
        } else {
            newProperties.push(property);
        }
    });

    for (let key in data) {
        if(data.hasOwnProperty(key))
            if(!newProperties.includes(key))
                delete data[key];
    }

    return data;
}

function blacklist(data, properties) {
    let newProperties = [];

    properties.forEach(property => {
       let propies = property.split('.');
       if (propies.length > 1) {
           let p = propies[0];
           propies.shift();
           propies  = propies.join('.');
           data[p] = blacklist(data[p], [propies]);
       } else
           newProperties.push(property);
    });

    newProperties.forEach(property => {
       if(data.hasOwnProperty(property))
           delete data[property];
    });

    return data;
}

module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
