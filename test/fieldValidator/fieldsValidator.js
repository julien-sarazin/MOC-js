function hasProperties(data, properties) {
    if (!data) 
        return properties;

    const splittedProperties = properties.map(property => property.split('.'));
    const missingProperties = [];

    splittedProperties.forEach((splittedProperty, i) => {
        let object = data;
        for (let j = 0, length = splittedProperty.length; j < length; ++j) {
            let property = splittedProperty[j];
            if (property in object) {
                object = object[property];
            } else if (!missingProperties.includes(properties[i])) {
                missingProperties.push(properties[i]);
            }
        }
    });

    return missingProperties;
}

function whitelist(data, properties) {
    const splittedProperties = properties.map(property => property.split('.'));
    
    iterate(data, '');

    function iterate(obj, trace) {
        for (prop in obj) {
            const tempTrace = (trace === '' ? trace + prop : trace + '.' + prop);

            if (typeof obj[prop] === 'object' && !properties.includes(tempTrace)) {
                    iterate(obj[prop], (trace === '' ? trace + prop : trace + '.' + prop));
                    continue;
            }

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
    const splittedProperties = properties.map(property => property.split('.'));

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