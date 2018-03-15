module.exports = server => {

	// should remove everything from data 
	// that is in given properties array
	
	return (req, res, next) => {
		function blacklist(data, properties) {
			 for(let property in data){
		        if(properties.includes(property))
		            delete data[property];
		    }
		    return data;
		}
	}
	
};