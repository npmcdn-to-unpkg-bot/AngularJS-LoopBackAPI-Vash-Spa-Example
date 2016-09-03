(function (app) {
    'use strict';
        
    app.controller('SignUpController', signUpController);
    
    signUpController.$inject = ['$scope', 'AuthService', '$state'];
    
    function signUpController($scope, AuthService, $state) {
	
	$scope.user = {
		email: 'baz@qux.com',
		password: 'bazqux'
	};

	$scope.register = function() {
	    AuthService.register($scope.user.email, $scope.user.password)
	    .then(function() {
		$state.transitionTo('sign-up-success');
	    });
	};
    }
    
})(angular.module('app'));