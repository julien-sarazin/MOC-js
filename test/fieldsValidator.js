function hasProperties(data, properties) {
	let tab = [];
	let dataKeys = Object.keys(data);
	let tempKey;

	console.log("\nHere is the data object:")
	console.log(dataKeys);
	console.log("\n_ _ _ _ _ _ _ _ _ _ _ _");

	for(let prop of properties){
		console.log("Is " + prop + " there ?\n");
		prop = prop.split('.');

		for(let i = 0; i < dataKeys.length; i++){
			if(prop[0] === dataKeys[i]){
				console.log(prop[0]);
				console.log("Yes !");
				for(let j = 1; j < prop.length; j++){
					console.log(prop[j]);
					tempKey = Object.keys(data[prop[j-1]]);
					console.log(tempKey);
				}
				break;
			}
		}
		//console.log(tempKey);
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
