function hasProperties(data, properties) {
    if (!data) 
        return properties;

    const props = split(properties);
    const missings = [];

    
    props.forEach(function(prop, i) {
        
        var receivedData = data;

        for (var j = 0, lenght = prop.length; j < length; j++) {
            let property = prop[j];
            if (property in receivedData) {
                property = prop[property];
            }
            else if (!missings.includes(props[i])) {
                missings.push(props[i]);
            }
        }
    });
    
    function split(properties) {
        return properties.map(property => property.split('.'));
    }

    return missings;
}

function whitelist(data, properties) {
    
}

function blacklist(data, properties) {
    

}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};