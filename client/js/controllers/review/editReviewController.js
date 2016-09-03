(function (app) {
    'use strict';
    
    app.controller('EditReviewController', editReviewController);

    editReviewController.$inject = ['$scope', '$q', 'CoffeeShop', 'Review', '$stateParams', '$state'];

    function editReviewController($scope, $q, CoffeeShop, Review, $stateParams, $state) {

	$scope.action = 'Edit';
	$scope.coffeeShops = [];
	$scope.selectedShop;
	$scope.review = {};
	$scope.isDisabled = true;

	$q
	.all([
	      CoffeeShop.find().$promise,
	      Review.findById({ id: $stateParams.id }).$promise
	      ])
	      .then(function(data) {
		  var coffeeShops = $scope.coffeeShops = data[0];
		  $scope.review = data[1];
		  $scope.selectedShop;

		  var selectedShopIndex = coffeeShops
		  .map(function(coffeeShop) {
		      return coffeeShop.id;
		  })
		  .indexOf($scope.review.coffeeShopId);
		  $scope.selectedShop = coffeeShops[selectedShopIndex];
	      });

	$scope.submitForm = function() {
	    $scope.review.coffeeShopId = $scope.selectedShop.id;
	    $scope.review
	    .$save()
	    .then(function(review) {
		$state.go('all-reviews');
	    });
	};	

    }

})(angular.module('app'));