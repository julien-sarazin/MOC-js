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
    //foreach check if multiple properties
    //foreach property if !included keep in array
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
    properties.forEach(prop => {
        const propies = prop.split('.');
        let newData = data;
        propies.forEach(key => {
            if (newData.hasOwnProperty(key))
                if (key == propies[propies.length - 1])
                    delete newData[key];
                else
                    newData = newData[key];
            }
        );
    });

    return data;
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
