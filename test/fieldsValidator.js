function hasProperties(data, properties) {
    //should return an Array when passed object contains given properties
    /*var array = new Array();

    if(data.hasOwnProperty(properties)){

        array.push(properties);
    }

    return array;*/



    //should return missing fields when passed object does not given properties
   /*for(keys in data){
       if(!properties.includes(data[keys])){
           return properties[keys];
       }
   }*/

    let missingData = [];
    let propertiesLength = properties.length+1;

    if(properties.includes(data)){
        delete properties[data];
    }

    console.log(properties);
    console.log(data);

  /*  for(let i = 0; i < propertiesLength; i++){
        if(properties[i] === data){
            missingData.push(data);
        }
    }
*/


    return missingData;


    //should return missing fields when passed object does not given properties


    //should validate each object in the array
}

function whitelist(data, properties) {
    //should remove everything from data that is not in given properties array'
    let arrayProperties = [];

    properties.forEach(property => {
        const splitProperty = property.split('.');
        arrayProperties = arrayProperties.concat(splitProperty);
    });

    console.log("arrayProperties : " + arrayProperties);

    for (keys in data) {
        if (!arrayProperties.find(prop => prop == keys)) {
            delete data[keys];
        }
    }
}

function blacklist(data, properties) {
   //should remove everything from data that is in given properties array

    let arrayProperties = [];

    properties.forEach(property => {
        const splitProperty = property.split('.');
        arrayProperties = arrayProperties.concat(splitProperty);
    });

    for (keys of properties) {
        for(var i = 0; i < properties.length; i++) {
            if (data[keys] !== undefined || arrayProperties[i] !== data[keys] ) {
                delete data[keys];
            }
        }
    }


    console.log(properties);
    console.log(data);
    console.log(arrayProperties);

    console.log("attendu : field: 0, foo: { bar: { bal: 'ohoh' } } }");

    return data;

}



module.exports = {
    hasProperties,
    whitelist,
    blacklist
};

