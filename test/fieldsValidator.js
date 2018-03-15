function hasProperties(data, properties) {
    if (!data) 
        return properties;

    const splittedProperties = [];
    const missingProperties = [];

    properties.forEach(property => {
        splittedProperties.push(property.split('.'));
    });

    splittedProperties.forEach((splittedProperty, i) => {
        let object = data;
        for (let j = 0; j < splittedProperty.length; ++j) {
            let property = splittedProperty[j];
            if (property in object) {
                object = object[property];
            } else {
                if (!missingProperties.includes(properties[i]))
                    missingProperties.push(properties[i]);
            }
        }
    });

    return missingProperties;
}

function whitelist(data, properties) {
    const splittedProperties = [];
    
    properties.forEach(property => {
        splittedProperties.push(property.split('.'));
    });

    iterate(data, '');

    function iterate(obj, trace) {
        for (prop in obj) {            
            if (typeof obj[prop] === 'object') {
                iterate(obj[prop], (trace === '' ? trace + prop : trace + '.' + prop));
                continue;
            }
    
            const tempTrace = (trace === '' ? trace + prop : trace + '.' + prop);
            
            if (!properties.includes(tempTrace)) {
                let object = data;
                const arrayTrace = tempTrace.split('.');
                
                for (let i = 0; i < arrayTrace.length; ++i) {
                    if (i < arrayTrace.length - 1) {
                        object = object[arrayTrace[i]];
                    } else {
                        delete object[arrayTrace[i]];
                    }
                }
            }
        }
    }

    return data;
}

function blacklist(data, properties) {
    const splittedProperties = [];
    
    properties.forEach(property => {
        splittedProperties.push(property.split('.'));
    });

    iterate(data, '');

    function iterate(obj, trace) {
        for (prop in obj) {            
            if (typeof obj[prop] === 'object') {
                iterate(obj[prop], (trace === '' ? trace + prop : trace + '.' + prop));
                continue;
            }
    
            const tempTrace = (trace === '' ? trace + prop : trace + '.' + prop);
            if (properties.includes(tempTrace)) {
                let object = data;
                const arrayTrace = tempTrace.split('.');
                
                for (let i = 0; i < arrayTrace.length; ++i) {
                    if (i < arrayTrace.length - 1) {
                        object = object[arrayTrace[i]];
                    } else {
                        delete object[arrayTrace[i]];
                    }
                }
            }
        }
    }

    return data;
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
