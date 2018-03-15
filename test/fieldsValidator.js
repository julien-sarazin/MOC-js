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
    //foreach
    //foreach property if !included keep in array

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
