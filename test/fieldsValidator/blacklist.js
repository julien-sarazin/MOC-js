module.exports = server => {
	
	return (data, properties) => {

	    function browse(element, field) {

	        for (property in element) {

	            if (typeof element[property] === 'object') {

	                var tmpA = findProperties(field, property)
	                browse(element[property], tmpA);

	                continue;
	            }
	    
	            var tmpB = findProperties(field, property);

	            if (properties.includes(tmpB)) {
	                let receivedData = data;
	                const array = tmpB.split('.');
	                
	                for (let i = 0; i < array.length; ++i) {
	                    if (i < array.length - 1) {
	                        receivedData = receivedData[array[i]];
	                    } else {
	                        delete receivedData[array[i]];
	                    }
	                }
	            }
	        }
	    }


	    function findProperties(field, property) {

		    var tmp;

		    if (field === '') {
		        tmp = property;
		    }
		    else {
		        tmp = field + '.' + property;
		    }

		    return tmp;
		    
		}

	    browse(data, '');

	    return data;
	}
	
};