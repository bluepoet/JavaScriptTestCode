var HeaderComm = {};

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}

HeaderComm.isEmpty = function(val) {
	if(val === null || typeof val === 'undefined') {
		return true;
	}
	
	if(typeof val === 'string') {
		if(val.trim() === 'undefined') {
			return true;
		}
		
		if(val.trim() === '') {
			return true;
		}
	}

	return false;
}
