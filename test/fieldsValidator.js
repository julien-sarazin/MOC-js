function hasProperties(data, properties) {
    let newProperty = new Array();
    for(let i =0; i<properties.length; i++){
        //console.log(typeof(properties[i]));
        if(properties[i].match(/\./g)){
            let proper = properties[i].split('.');
            for(let j =0; j<proper.length; j++){
                newProperty.push(proper[j]);
            }
        } else {
            //listArr(data, properties[i]);
            newProperty.push(properties[i]);
        }
    }
    console.log(newProperty);

    let arrayToReturn = new array();
    if(data.hasOwnProperty())
    /*
    let arr = new Array();

    for(let i=0; i<properties.length; i++){
        if(!data.hasOwnProperty(properties[1]))
            arr.push(properties[i]);
    }

    return arr;
    */



}





function whitelist(data, properties) {
    function listArr(obj, proper){
        for (let key in obj) {
            console.log('key :', key);
            console.log('property :', proper);
            if(!proper.includes(key))
                delete obj[key];
            //console.log(key, obj[key]);
            //console.log('type', typeof(obj[key]));
            if(typeof(obj[key]) === 'object'){
                listArr(obj[key], proper);
            }
        }
    }

    let arr = new Array();
    for(let i =0; i<properties.length; i++){
        //console.log(typeof(properties[i]));
        if(properties[i].match(/\./g)){
            let proper = properties[i].split('.');
            for(let j =0; j<proper.length; j++){
                arr.push(proper[j]);
            }
        } else {
            //listArr(data, properties[i]);
            arr.push(properties[i]);
        }
    }
    console.log(arr);
    listArr(data, arr);
    /*
        let nbr = properties.length + 1;
        for(let i=0; i<nbr; i++) {
            for (keys in data) {
                // The key is key
                // The value is data[key]
                if (keys === properties[i])
                    delete data[keys];

            }
        }
    */
}

function blacklist(data, properties) {
    function listArr(obj, proper){
        for (let key in obj) {
            //console.log('key :', key);
            console.log('property :', proper);
            if(proper.includes(key))
                delete obj[key];
            //console.log(key, obj[key]);
            //console.log('type', typeof(obj[key]));
            if(typeof(obj[key]) === 'object'){
                listArr(obj[key], proper);
            }
        }
    }

    let arr = new Array();
    for(let i =0; i<properties.length; i++){
            //console.log(typeof(properties[i]));
            if(properties[i].match(/\./g)){
                let proper = properties[i].split('.');
                console.log(proper[proper.length-1]);
                //listArr(data, proper[proper.length-1]);
                arr.push(proper[proper.length-1]);
            } else {
                console.log(properties[i]);
                //listArr(data, properties[i]);
                arr.push(properties[i]);
            }
    }
    console.log(arr);
    listArr(data, arr);
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
