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

        
    for (property in element) {

        var tmp;

        if (field === '') {
            tmp = property;
        }
        else {
            tmp = field + '.' + property;
        }

    }

}

function blacklist(data, properties) {


}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};