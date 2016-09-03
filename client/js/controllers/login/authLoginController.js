/*
 * BEST PRACTICE: http://bguiz.github.io/js-standards/angularjs/controllers/
 * 
 * */

(function (app) {
    'use strict';
        
    app.controller('AuthLoginController', authLoginController);
    
    authLoginController.$inject = ['$scope', 'AuthService', '$state'];
    
    function authLoginController($scope, AuthService, $state) {
	
//	var vm = this;
//	vm.user = 
	
	$scope.user = {
		email: 'foo@bar.com',
		password: 'foobar'
	};

	$scope.login = function() {
	    AuthService.login($scope.user.email, $scope.user.password)
	    .then(function() {
		$state.go('add-review');
	    });
	};	
	
    }
    
})(angular.module('app'));