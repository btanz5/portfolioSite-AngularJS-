define(["angularAMD", "angular-route"], function (angularAMD){
	var app = angular.module('webapp', ['ngRoute']);

		app.config(function ($routeProvider) {
			$routeProvider
			.when('/', angularAMD.route({
				templateUrl: 'contentPages/main.html',
				controller: 'mainController',
				controllerUrl: 'controllerHome'
			}))

			.when('/contact', angularAMD.route({
				templateUrl: 'contentPages/contact.html',
				controller: 'mainController',
				controllerUrl: 'controllerHome'
			}))

			.when('/portfolio', angularAMD.route({
				templateUrl: 'contentPages/portfolio.html',
				controller: 'mainController',
				controllerUrl: 'controllerHome'
			}))

			.when('/resume', angularAMD.route({
				templateUrl: 'contentPages/resume.html',
				controller: 'mainController',
				controllerUrl: 'controllerHome'
			}))

			.when('/skills', angularAMD.route({
				templateUrl: 'contentPages/skills.html',
				controller: 'mainController',
				controllerUrl: 'controllerHome'
			}))
			.otherwise({redirectTo: "/"});
	});
	return angularAMD.bootstrap(app);
});