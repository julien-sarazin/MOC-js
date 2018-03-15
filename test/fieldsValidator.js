function hasProperties(data, properties) {
    const missingFields = [];
    properties.forEach(prop => {
       propies = prop.split('.');
       if(data.hasOwnProperty(propies[0])) {
           if(propies.length == 1)
               return [];
           let newData = data;


           for(var i = 1; i < propies.length; i+=1){
               newData = newData[propies[i - 1]] ;
                if(!newData.hasOwnProperty(propies[i])) {
                    propies.slice(i,propies.length - 1).join('.');
                    missingFields.push(propies[i]);
                }
           }
       } else {
           missingFields.push(propies.join('.'));
       }
    });

    return missingFields;
}

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
