function hasProperties(data, properties) {
    if (!data) 
        return properties;

    const props = split(properties);
    const missings = [];    

    props.forEach((prop, i) => {
        let receivedData = data;
        for (let j = 0, length = prop.length; j < length; ++j) {
            let property = prop[j];
            if (property in receivedData) {
                receivedData = receivedData[property];
            } else if (!missings.includes(properties[i])) {
                missings.push(properties[i]);
            }
        }
    });

    function split(properties) {
        return properties.map(property => property.split('.'));
    }

    return missings;
}

function whitelist(data, properties) {

    function browse(element, field) {
        
        for (property in element) {

            var tmpA;

            if (field === '') {
                tmpA = property;
            }
            else {
                tmpA = field + '.' + property;
            }

            if (typeof element[property] === 'object' && !properties.includes(tmpA)) {

                var tmpB;

                if (field === '') {
                    tmpB = property;
                }
                else {
                    tmpB = field + '.' + property;
                }
                browse(element[property], tmpB);
                
                continue;
            }

            if (!properties.includes(tmpA)) {
                let receivedData = data;
                const array = tmpA.split('.');
                
                for (var i = 0; i < array.length; ++i) {
                    if (i < array.length - 1) {
                        receivedData = receivedData[array[i]];
                    } else {
                        delete receivedData[array[i]];
                    }
                }
            }
        }
    }
    browse(data, '');

    return data;
}


function blacklist(data, properties) {

}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};