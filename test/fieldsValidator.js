function hasProperties(data, properties) {
  let nok = 0;
  var missingFiled = [];

  var props = properties.split('.');

  /*for(var property in data){
    if(data.hasOwnProperty(property)){
      ok += 1;
    }else{
      nok += 1;
      stock.push(property);
    }
  }

  if(ok > 0 && nok == 0) {
    return [];
  } else {
    return stock;
  }*/

  properties.forEach(property => {
    if(!(data.hasOwnProperty(property))){
      missingFiled.push(property);
      nok += 1;
    }
  });
  props.forEach(property => {
    if((!data[props])){

    }
  });

  if(nok !== 0){
    return missingFiled;
  }

  return [];
}

function whitelist(data, properties) {

  for(var property in data){
    if(!(properties.includes(property))){
      delete data[property];
    }
  }

  return data;
}

function blacklist(data, properties) {
  /*for(var property in data){
    if(properties.includes(property)){
      delete data[property];
    }
  }*/


  properties.forEach(property => {
    if(!(property in data))
      delete data[property];
  });

  return data;
}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
