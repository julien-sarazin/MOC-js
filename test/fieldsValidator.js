function hasProperties(data, properties) {
    //should return an Array when passed object contains given properties
    let array = new Array();
    if(data.hasOwnProperty(properties)) {
        array.push(properties);
    }

    return array;

    //should return missing fields when passed object does not given properties


    //should validate each object in the array
}

function whitelist(data, properties) {
    //should remove everything from data that is not in given properties array

}

function blacklist(data, properties) {
   //should remove everything from data that is in given properties array

    for(keys in data){
      

    }

}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};

