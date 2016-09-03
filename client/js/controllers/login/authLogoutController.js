(function (app) {
    'use strict';
        
    app.controller('AuthLogoutController', authLogoutController);
    
    authLogoutController.$inject = ['$scope', 'AuthService', '$state'];
    
    function authLogoutController($scope, AuthService, $state) {
	
	AuthService.logout()
	.then(function() {
	    $state.go('all-reviews');
	});	
	
    }
    
})(angular.module('app'));
