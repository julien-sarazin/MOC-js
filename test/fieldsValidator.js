function hasProperties(data, properties) {
    if (!data) 
        return properties;

    const splittedProperties = properties.map(property => property.split('.'));
    const missingProperties = [];

    (Array.isArray(data)) ? 
        data.forEach((object, i) => findMissingProperties(object, i)) : 
        findMissingProperties(data);

    function findMissingProperties(object, objectPosition) {
        objectPosition = objectPosition === undefined ? undefined : objectPosition;

        splittedProperties.forEach((splittedProperty, splittedIndice) => {
            let tempObject = object;
            
            for (let j = 0, length = splittedProperty.length; j < length; ++j) {
                let property = splittedProperty[j];
                
                if (property in tempObject) {
                    tempObject = tempObject[property];
                    continue;
                }

                const missingProperty = objectPosition === undefined ? 
                    properties[splittedIndice] : 
                    '[' + objectPosition + '].' + properties[splittedIndice];
                    
                if (!missingProperties.includes(missingProperty))
                    missingProperties.push(missingProperty);
            }
        });
    }

    return missingProperties;
}

function whitelist(data, properties) {
    const splittedProperties = properties.map(property => property.split('.'));
    
    recursiveWhitelist(data, '');

    function recursiveWhitelist(object, trace) {
        for (property in object) {
            const tempTrace = trace === '' ? trace + property : trace + '.' + property;

            if (typeof object[property] === 'object' && !properties.includes(tempTrace)) {
                recursiveWhitelist(object[property], tempTrace);
                continue;
            }

            if (!properties.includes(tempTrace)) {
                let tempObject = data;
                const arrayTrace = tempTrace.split('.');
                
                for (let i = 0; i < arrayTrace.length; ++i) {
                    if (i < arrayTrace.length - 1) {
                        tempObject = tempObject[arrayTrace[i]];
                    } else {
                        delete tempObject[arrayTrace[i]];
                    }
                }
            }
        }
    }

    return data;
}

function blacklist(data, properties) {
    const splittedProperties = properties.map(property => property.split('.'));

    recursiveBlacklist(data, '');

    function recursiveBlacklist(object, trace) {
        for (property in object) {
            if (typeof object[property] === 'object') {
                recursiveBlacklist(object[property], (trace === '' ? trace + property : trace + '.' + property));
                continue;
            }
    
            const tempTrace = trace === '' ? trace + property : trace + '.' + property;
            if (properties.includes(tempTrace)) {
                let tempObject = data;
                const arrayTrace = tempTrace.split('.');
                
                for (let i = 0; i < arrayTrace.length; ++i) {
                    if (i < arrayTrace.length - 1) {
                        tempObject = tempObject[arrayTrace[i]];
                    } else {
                        delete tempObject[arrayTrace[i]];
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
