function hasProperties(data, properties) {
    let array = [];

    properties.forEach((property => {
        let str = property.split('.');
        if(str.length > 1){
            if(str[0] in data){
                for(i = 0; i < str.length; i++){
                    let val1 = data[str[i]];
                    let val2 = data[str[i+1]];

                    if(data[str[i]] === undefined)
                        break;

                    if(!(val1.hasOwnProperty(val2)))
                        array.push(str);
                }
            }else{
                array.push(str[0]);
            }
        }else{
            if(!(str in data)){
                array.push(tempArr);
            }
        }
    }));

    return array;
}

function whitelist(data, properties) {
    if(!data)
        return null;

    let arr = [];
    for(let property in properties){
        let str = property.split('.');
        arr.push(str[0]);
        whitelist(data[property], property);
    }

    for(let element in data){

    }
}

function blacklist(data, properties) {

}

function loopInProperty(object, property){
    let str = property;
    let obj = object;
    str.forEach((element) => {
        if(obj === undefined)
            return false;

        obj = obj[element];

    });
    return true;
}

function  checkIfExist(object, property) {
    if (!object)
        return null;

    return false;
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
