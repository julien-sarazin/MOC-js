function hasProperties(data, properties) {
    let arr = new Array();

    for(let i=0; i<properties.length; i++){
        if(!data.hasOwnProperty(properties[1]))
            arr.push(properties[i]);
    }

    return arr;

}

function whitelist(data, properties) {
    let nbr = properties.length + 1;
    for(let i=0; i<nbr; i++) {
        for (keys in data) {
            // The key is key
            // The value is data[key]
            if (keys === properties[i])
                delete data[keys];

        }
    }
}

function blacklist(data, properties) {
    function listArr(obj, proper){
        for (let key in obj) {
            if(properties.includes(key))
                delete obj[key];
            //console.log(key, obj[key]);
            //console.log('type', typeof(obj[key]));
            if(typeof(obj[key]) === 'object'){
                listArr(obj[key]);
            }
        }
    }
    listArr(data, properties);

    for(let i =0; i<properties.length; i++){
        if(properties[i].match(/./g))
            console.log(properties[i]);
    }

    function getLastProper(obj){
        for (let key in obj) {
            console.log(obj);
            //if (typeof(obj[key]) === 'object') {
            if(properties[i].match('/./')) {
                //listArr(obj[key]);
                console.log('dsdfsdf');
            }
        }
    }

    /*
    function recursivelyIterateProperties(data, property) {

        if (data instanceof Array) {
            for (let i = 0; i < data.length; ++i) {
                recursivelyIterateProperties(data[i])
            }
        }
        else if (typeof(data) === 'object') {
            for (let proper in data) {//
                 console.log(proper);
                console.log('a enlever ' + property);
                if(proper = property)
                    delete data[property];
                if (!(typeof(data[proper]) === 'string')) {
                    recursivelyIterateProperties(data[proper]);
                }
            }
        }
    }

    for(let i=0; i<properties.length; i++) {
        recursivelyIterateProperties(data, properties[i]);
    }
    */
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
