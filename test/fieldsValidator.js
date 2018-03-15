function hasProperties(data, properties) {
    var arr = new Array();

    for(let i=0; i<properties.length; i++){
        if(data.hasOwnProperty(properties[1]))
            arr.push(properties[i]);
    }
    return arr;

}

function whitelist(data, properties) {
    let nbr = properties.length + 1;
    for(keys in data){
        for(let i=0; i<nbr; i++) {
            if (keys !== properties[i])
                delete data[keys];
        }
    }
}

function blacklist(data, properties) {
    let nbr = properties.length + 1;
    for(let i=0; i<nbr; i++){
        delete data[properties[i]];
    }
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};