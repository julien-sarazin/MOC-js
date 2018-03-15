function hasProperties(data, properties) {
    let array = [];
    for (let property of properties) {
        let tempArray = loopInProperty(data, property);
        array.concat(tempArray);
    }

    return array;
}

function whitelist(data, properties) {
    for(let property in data){
        if(!(properties.includes(property)))
            delete data[property];
    }
    return data;
}

function blacklist(data, properties) {

}

function loopInProperty(object, property){
    let str = property.split('.');
    let obj = object;
    let arr = [];
    str.forEach((element) => {
        if(obj === undefined)
            return false;

        if(!(element in obj))
            obj = obj[element];
            arr.push(element);
    });
    return arr;
}

module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
