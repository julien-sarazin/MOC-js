function hasProperties(data, properties) {
    //should return an Array when passed object contains given properties
    var array = new Array();

    if(data.hasOwnProperty(properties)){

        array.push(properties);
    }

    return array;



        //should return missing fields when passed object does not given properties
    //Doit retourner les champs manquant quand un objet passé n'est pas une propriété
   /*for(keys in data){
       if(!properties.includes(data[keys])){
           return properties[keys];
       }
   }*/

    /*let missingData;
    let propertiesLength = properties.length+1;
    let i = 0;

    for(i; i < propertiesLength; i++){
        if(properties[i] != data){
            missingData = data;
        }
    }
    return missingData;*/


}

function whitelist(data, properties) {
    //should remove everything from data that is not in given properties array'

    for(keys in data){
        if(!properties.includes(keys)){
            delete data[keys];
        }
    }
    return data;

}

function blacklist(data, properties) {
    //should remove everything from data that is in given properties array
    let length = properties.length + 1;

    for(let i = 0; i < length; i++){
        delete data[properties[i]];
    }
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
