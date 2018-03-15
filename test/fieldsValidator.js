function hasProperties(data, properties) {
    if (!data) 
        return properties;

    const splittedProperties = properties.map(property => property.split('.'));
    const missingProperties = [];

    (Array.isArray(data)) ? data.forEach((subObject, i) => iterate(subObject, i)) : iterate(data);

    function iterate(obj, indice) {
        indice = indice === undefined ? undefined : indice;

        splittedProperties.forEach((splittedProperty, i) => {
            let object = obj;
            for (let j = 0, length = splittedProperty.length; j < length; ++j) {
                let property = splittedProperty[j];
                if (property in object) {
                    object = object[property];
                } else {
                    const missingProperty = indice === undefined ? properties[i] : '[' + indice + '].' + properties[i];
                    if (!missingProperties.includes(missingProperty)) {
                        missingProperties.push(missingProperty);
                    }
                }
            }
        });
    }

    return missingProperties;
}

function whitelist(data, properties) {
    const splittedProperties = properties.map(property => property.split('.'));
    
    iterate(data, '');

    function iterate(obj, trace) {
        for (prop in obj) {
            const tempTrace = (trace === '' ? trace + prop : trace + '.' + prop);

            if (typeof obj[prop] === 'object' && !properties.includes(tempTrace)) {
                    iterate(obj[prop], tempTrace);
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
