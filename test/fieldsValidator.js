function hasProperties(data, properties) {
    let newArr = new Array();
    //for (let key in objData) {}
    for(let i =0; i<properties.length; i++) {
        if (!(properties[i] in data)) {
            newArr.push(properties[i]);
        }
    }

     console.log(data.field);

    console.log(Object.keys(data));
    let dataProperty = new Array();
    dataProperty = Object.keys(data);
    for(let i=0; i<dataProperty.length; i++){
        console.log(data[dataProperty[i]]);
        if(data[dataProperty] !== 0 || data[dataProperty] !== false){
            console.log('dsfdfsdfsfdsdsf');
            dataProperty = Object.keys(data[dataProperty]);
        }
    }
    console.log(Object.keys(data));


    return newArr;






    /*
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
    //console.log(data['field']);
    let arrayToReturn = new Array();
    function checkIfPropertyExist(objData, propertyToCheck){
        if(!objData.hasOwnProperty(propertyToCheck)) {
            for (let key in objData) {
                if(objData[key].hasOwnProperty(propertyToCheck)){
                    return;
                } else {
                    //console.log('key :', key);
                    //console.log('property :', propertyToCheck);
                    //console.log('type', typeof(objData[key]));
                    if (typeof(objData[key]) === "object") {
                        //console.log('Dans le recurse');
                        //console.log(objData[key]);
                        checkIfPropertyExist(objData[key], propertyToCheck);
                    } else {
                        arrayToReturn.push(propertyToCheck);
                    }
                }
            }
        } else
            return;
    }

    for(let i=0; i<newProperty.length; i++){
        console.log('property to check', newProperty[i]);
        checkIfPropertyExist(data, newProperty[i])
    }
    return arrayToReturn;




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
