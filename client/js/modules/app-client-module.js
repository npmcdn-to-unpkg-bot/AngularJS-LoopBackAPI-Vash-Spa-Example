/**
 * http://usejsdoc.org/
 */

/**
 * Module dependencies.
 */

(function() {
    'use strict';

    var express = require('express');
    var app = express();
    //var website_port_number = global.config.website.port;

    
    // all environments
    //app.set('port', process.env.PORT || website_port_number || 10000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'vash');

   
    // Using a setter - set once
    angular.module('app', ['ui.router','lbServices'])
    .config(readWebsiteConfig)
    //.config(routeConfig)
    .run(init);

    init.$inject = ['$rootScope', '$state'];
    
    function init($rootScope, $state){
	
	app.use(express.static(path.join(__dirname, 'client')));
	app.get('/', routes.index);  //Puts us on the home page
	
	$rootScope.$on('$stateChangeStart', function(event, next) {
	    // redirect to login page if not logged in
	    if (next.authenticate && !$rootScope.currentUser) {
		event.preventDefault(); //prevent current page from loading
		$state.go('forbidden');
	    }
	});
    };

    /*
     * APP Website Config:
     * ------------
     * Read configuration files and set the process variables
     */
    function readWebsiteConfig() {
	var configTransform = 'local';
	var configFileName = 'client-config.local.json';

	var fs = require('fs');

	var fileToPath = path.join(__dirname, configFileName); 
	console.log(fileToPath);
	var config = JSON.parse(fs.readFileSync(fileToPath, 'utf8'));

	console.log(config);
	global.config = config;
    };

    /*
     * APP Routing Config:
     * ------------
     * Configure routes using the AngularJS RouteProvider service
     * 
     * -We are adding client-side routing - very important part of spa apps
     * -allows interception of route changes, and renders partial views (document fragments) which replace shell elements
     * -the view is injected using the ng-view directive decorating the element
     */
    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function routeConfig($stateProvider, $urlRouterProvider) {    
	$stateProvider
	.state('add-review', {
	    url: '/add-review',
	    templateUrl: 'views/review-form.html',
	    controller: 'AddReviewController',
	    authenticate: true
	})
	.state('all-reviews', {
	    url: '/all-reviews',
	    templateUrl: 'views/all-reviews.html',
	    controller: 'AllReviewsController'
	})
	.state('edit-review', {
	    url: '/edit-review/:id',
	    templateUrl: 'views/review-form.html',
	    controller: 'EditReviewController',
	    authenticate: true
	})
	.state('delete-review', {
	    url: '/delete-review/:id',
	    controller: 'DeleteReviewController',
	    authenticate: true
	})
	.state('forbidden', {
	    url: '/forbidden',
	    templateUrl: 'views/forbidden.html',
	})
	.state('login', {
	    url: '/login',
	    templateUrl: 'views/login.html',
	    controller: 'AuthLoginController'
	})
	.state('logout', {
	    url: '/logout',
	    controller: 'AuthLogoutController'
	})
	.state('my-reviews', {
	    url: '/my-reviews',
	    templateUrl: 'views/my-reviews.html',
	    controller: 'MyReviewsController',
	    authenticate: true
	})
	.state('sign-up', {
	    url: '/sign-up',
	    templateUrl: 'views/sign-up-form.html',
	    controller: 'SignUpController',
	})
	.state('sign-up-success', {
	    url: '/sign-up/success',
	    templateUrl: 'views/sign-up-success.html'
	});
	$urlRouterProvider.otherwise('all-reviews');
    };

    app.listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});
    
})();
