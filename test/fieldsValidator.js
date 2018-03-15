function hasProperties(data, properties) {
	let tab = [];
	console.log(".");
	//console.log(data);
	for(let prop of properties){
		console.log(data + '.' + prop + ' = ' + data[prop]);
		console.log('prop = ' + prop);
		//console.log(data[prop]);

		//console.log('prop = ' + prop);

		if (data[prop] === undefined)
			tab.push(prop);
	}
	return(tab);
}

function whitelist(data, properties) {

}

function blacklist(data, properties) {

}


module.exports = {
    hasProperties,
    whitelist,
    blacklist
};
