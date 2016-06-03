	// @source Type.js

	Function.prototype.isAssignableFrom = function (type) {
		if (this == type) {
			return true; 
		}

		for (var i = 0; i < type.$$inherits.length; i++) {
			if(type.$$inherits[i] == this) {
				return true;
			}
		}

		return false;
	}