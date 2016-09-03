(function (app) {
    'use strict';
    
    app.controller('MyReviewsController', myReviewsController);

    myReviewsController.$inject = ['$scope', 'Review', '$rootScope'];

    function myReviewsController($scope, Review, $rootScope) {

	$scope.reviews = Review.find({
	    filter: {
		where: {
		    publisherId: $rootScope.currentUser.id
		},
		include: [
		          'coffeeShop',
		          'reviewer'
		          ]
	    }
	});
    }

})(angular.module('app'));