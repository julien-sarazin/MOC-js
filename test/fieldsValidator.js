function hasProperties(data, properties) {
	let tab = [];
	let dataKeys = Object.keys(data);
	console.log(dataKeys);
	for(let prop of properties){
		prop.split('.');
		console.log("---");
		console.log(prop);
		console.log("---");
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
