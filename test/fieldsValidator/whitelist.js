module.exports = server => {
	
	return (data, properties) => {

	    function browse(element, field) {
	        
	        for (property in element) {

	            var tmpA = findProperties(field, property);

	            if (typeof element[property] === 'object' && !properties.includes(tmpA)) {

	                var tmpB = findProperties(field, property)
	                browse(element[property], tmpB);

	                continue;
	            }

	            if (!properties.includes(tmpA)) {
	                
	                let receivedData = data;
	                const array = tmpA.split('.');
	                
	                for (var i = 0; i < array.length; ++i) {
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