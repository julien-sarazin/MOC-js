function hasProperties(data, properties) {

    let newArr = new Array();
    for(let i =0; i<properties.length; i++) {
        if (!(properties[i] in data)) {
            newArr.push(properties[i]);
        }
    }

    /*
        let dataProperty = new Array();


        dataProperty = Object.keys(data);
        for(let i=0; i<dataProperty.length; i++){
            console.log(data[dataProperty[i]]);
            if(data[dataProperty] !== 0 || data[dataProperty] !== false){
                dataProperty = Object.keys(data[dataProperty]);
            }
        }
        console.log(Object.keys(data));
    */

    return newArr;



}





function whitelist(data, properties) {

    function cleanList(obj, property){
        for (let key in obj) {
            if(!property.includes(key))
                delete obj[key];

            if(typeof(obj[key]) === 'object')
                cleanList(obj[key], property);

        }
    }

    let arrayPropertyToKeep = new Array();
    for(let i =0; i<properties.length; i++){
        if(properties[i].match(/\./g)){
            let property = properties[i].split('.');
            for(let j =0; j<property.length; j++){
                arrayPropertyToKeep.push(property[j]);
            }
        } else {
            arrayPropertyToKeep.push(properties[i]);
        }
    }
    cleanList(data, arrayPropertyToKeep);
}



function blacklist(data, properties) {
    function blacklistProperty(obj, property){
        for (let key in obj) {
            if(property.includes(key))
                delete obj[key];

            if(typeof(obj[key]) === 'object')
                blacklistProperty(obj[key], property);
        }
    }

    let arrayPropertyToBlacklist = new Array();
    for(let i =0; i<properties.length; i++){
            if(properties[i].match(/\./g)){
                let property = properties[i].split('.');
                arrayPropertyToBlacklist.push(property[property.length-1]);

            } else {
                arrayPropertyToBlacklist.push(properties[i]);
            }
    }
    blacklistProperty(data, arrayPropertyToBlacklist);
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
