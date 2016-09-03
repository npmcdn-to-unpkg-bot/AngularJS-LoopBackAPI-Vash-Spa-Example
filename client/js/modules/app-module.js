/*
 * Clean up main app code,
 * 
 * BEST PRACTICE: USE IIFE's 
 * Convert to an IIFE (Immediately Invoked Function Expression)
 * 
 * Why?: An IIFE removes variables from the global scope (namespace). This helps prevent variables and function declarations from living 
 * longer than expected in the global scope, which also helps avoid variable collisions.
 * 
 * Why?: When your code is minified and bundled into a single file for deployment to a production server, you could have collisions
 * of variables and many global variables. An IIFE protects you against both of these by providing variable scope for each file.
 * 
 * If we need to access properties within the scope of the IIFE we can return the object constructor to the Global space
 * 
 * Refs:
 * 	http://stackoverflow.com/questions/11255461/object-prototype-methods-and-use-strict-in-an-iife-immediately-invoked-functi
 * 
 * BEST PRACTICE: 'use strict'
 * 
 * Introduced in ECMAScript 5, strict mode allows opt-in to a better version of JS:
 * - Allows faster debugging of issues, forces errors to be thrown when certain patterns occur, as opposed to silently failing/behaving strangely
 * - Calls to attention things that need fixing immediately
 * - Prevents use of "with" now considered invalid JS, throws a syntax error
 * - Prevents accidental globals, as variables must be declared before they can be assigned to, (not doing so adds variables to the Global-namespace, hence use of IIFE)
 * - Good for use in IIFE's (complement each other)
 * - Eliminates coercion, the "this" value (null or undefined) is no longer coerced to the global, it causes syntax errors. 
 * - Prevents duplicate properties in objects or named arguments in functions, throws syntax error before the code is executed
 * - Safer eval(), functions declared inside an eval("var x=10, y=10; x + y"), are no longer no longer created in the containing scope, anything created inside an eval() stays inside,
 * 	however, you can assign the result to a variable "var result = eval("var x=10, y=10; x + y")".
 * - Throws errors for Immutable objects and Properties, i.e. setting objects or their properties to be read-only. Without strict mode, these would fail silently if we tried to set a value for an immutable.
 * 
 * Refs:
 * 	https://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/ 
 * 	http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/
 * 
 */

(function() {
    'use strict';

    angular.module('app', ['ui.router','lbServices'])
    .config(routeConfig)
    .run(init);

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
	    templateUrl: 'views/review/review-form.vash',
	    controller: 'AddReviewController',
	    authenticate: true
	})
	.state('all-reviews', {
	    url: '/all-reviews',
	    templateUrl: 'views/reviews/all-reviews.vash',
	    controller: 'AllReviewsController'
	})
	.state('edit-review', {
	    url: '/edit-review/:id',
	    templateUrl: 'views/review/review-form.vash',
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
	    templateUrl: 'views/login/forbidden.vash',
	})
	.state('login', {
	    url: '/login',
	    templateUrl: 'views/login/login.vash',
	    controller: 'AuthLoginController'
	})
	.state('logout', {
	    url: '/logout',
	    controller: 'AuthLogoutController'
	})
	.state('my-reviews', {
	    url: '/my-reviews',
	    templateUrl: 'views/reviews/my-reviews.vash',
	    controller: 'MyReviewsController',
	    authenticate: true
	})
	.state('sign-up', {
	    url: '/sign-up',
	    templateUrl: 'views/login/sign-up-form.vash',
	    controller: 'SignUpController',
	})
	.state('sign-up-success', {
	    url: '/sign-up/success',
	    templateUrl: 'views/login/sign-up-success.vash'
	});
	$urlRouterProvider.otherwise('all-reviews');
    };
    init.$inject = ['$rootScope', '$state'];

    function init($rootScope, $state){

	$rootScope.$on('$stateChangeStart', function(event, next) {
	    // redirect to login page if not logged in
	    if (next.authenticate && !$rootScope.currentUser) {
		event.preventDefault(); //prevent current page from loading
		$state.go('forbidden');
	    }
	});
    };
})();
