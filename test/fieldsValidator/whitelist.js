module.exports = server => {

	// should remove everything from data 
	// that is not in given properties array
	
	return (req, res, next) => {
		for(let property in data){
	        if(!(properties.includes(property)))
	            delete data[property];
	    }
	    return data;
	}
	
};