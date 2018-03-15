const _ = require('lodash');



function hasProperties(data, properties) {
    let missing = [];
    for (let property of properties) {
        if(!(property in data)){
          missing.push(property);
        }
    }
    return missing;
}

function whitelist(data, properties) {
  for (const field in data) {
      if (!properties.find(p => p == field)) {
          delete data[field];
      }
  }

}

function blacklist(data, properties) {
  for (let prop of properties) {
    prop = prop.split(".");
    if (prop.length > 1) {
      //for(let i = prop.length-1; i > 0; i--){
      let dataBis = "";
      for(i=0; i<prop.length; i++){

        console.log(dataBis);

      }
      console.log(data.foo);
      delete data +dataBis;
      //}
    }else{
      if ((prop in  data)) {
        delete data[prop];
      }
    }
  }
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
