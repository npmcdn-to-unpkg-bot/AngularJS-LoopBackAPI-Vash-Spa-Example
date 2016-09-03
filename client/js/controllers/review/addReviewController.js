(function (app) {
    'use strict';

    app.controller('AddReviewController', addReviewController);

    addReviewController.$inject = ['$scope', 'CoffeeShop', 'Review', '$state'];

    function addReviewController($scope, CoffeeShop, Review, $state){
	$scope.action = 'Add';
	$scope.coffeeShops = [];
	$scope.selectedShop;
	$scope.review = {};
	$scope.isDisabled = false;

	CoffeeShop
	.find()
	.$promise
	.then(function(coffeeShops) {
	    $scope.coffeeShops = coffeeShops;
	    $scope.selectedShop = $scope.selectedShop || coffeeShops[0];
	});

	$scope.submitForm = function() {
	    Review
	    .create({
		rating: $scope.review.rating,
		comments: $scope.review.comments,
		coffeeShopId: $scope.selectedShop.id,
		date : Date()
	    })
	    .$promise
	    .then(function() {
		$state.go('all-reviews');
	    });
	};	
    }

})(angular.module('app'));