
/*==============================RequireJS================================*/
/*
* Initialization page to load modules using require.js
* Thank you 
*	@bTanz5(5/2015)
*/

require.config({
	paths: {
		"angular": "jSLibs/angular.min",
		"angular-route": "jSLibs/angular-route.min",
		"angularAMD": "jSLibs/angularAMD.min",
	},

	shim: {
		"angularAMD": ["angular"],
		"angular-route": ["angular"],
		},
		deps: ["app"]
});
