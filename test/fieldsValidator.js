const _ = require('lodash');



/*function hasProperties(data, properties) {
    let missing = [];
    for (let property of properties) {
        if(!(property in data)){
          missing.push(property);
        }
    }
    return missing;
}*/

function hasProperties(data, properties) {
  //console.log("data =" ,data);
  //console.log("=>",properties);
  let missing = [];

  for(i = 0; i<properties.length; i++){
    let prop = properties[i].split(".");
    if (prop[0] in data) {
      for(j=1;j<prop.length;j++){

      }
    }else{
      missing.push(properties[i]);
    }
  }

  return missing;
}

function whitelist(data, properties) {
  console.log("data => ", data);
  //console.log("prop => ", properties);
  for (let field in data) {
    console.log("field =>",field);
    console.log(data[field]["salt"] != undefined);
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
      let proper = "";
      for(i = 0 ; i < prop.length-1 ; i++){
        proper += prop[i]+".";

      }
      proper += prop[prop.length-1];
      console.log(proper);
      blacklist(data[prop], proper);
      /*for(i=0; i<prop.length; i++){
        data = data[prop[i]];
        if (i === prop.length-1) {
          console.log(data);
          delete data;*/

        //}
      //}
      //}
    }else{
      //console.log(data);
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
