"use strict";

// module for mirroring the key in the value below

// just copies the value in the value from the key
// so you don't have to type it twice

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
	INITIALIZE: null,

	CREATE_AUTHOR: null,
	UPDATE_AUTHOR: null,
	DELETE_AUTHOR: null,
	
	CREATE_COURSE: null,
	UPDATE_COURSE: null,
	DELETE_COURSE: null
});