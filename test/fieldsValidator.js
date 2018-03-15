function hasProperties(data, properties) {
    let array = [];

    properties.forEach((property => {
        let str = property.split('.');
        if(str.length > 1){
            if(str[0] in data){
                let i = 0;
                let val1 = data[str[i]];
                let val2 = val1[str[i+1]];

                if(val2 === undefined && i+1 <= str.length)
                    array.push(str);
            }else{
                array.push(str.join('.'));
            }
        }else{
            if(!(str in data)){
                array.push(property);
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
    let i;
    let oldProp;
    properties.forEach((property => {
        let str = property.split('.');
        if(str.length > 1){
            for(i = 0; i < str.length; i++){
                oldProp = data[i];
                let prop = oldProp[i+1];

                delete data[prop];
            }
        }else{
            if(property in data)
                delete data[property];
        }
    }));
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
