(function (app) {
    'use strict';

    app.controller('DeleteReviewController', deleteReviewController);

    deleteReviewController.$inject = ['$scope', 'Review', '$state', '$stateParams'];

    function deleteReviewController($scope, Review, $state, $stateParams) {
	
	Review
	.deleteById({ id: $stateParams.id })
	.$promise
	.then(function() {
	    $state.go('my-reviews');
	});	
    }

})(angular.module('app'));