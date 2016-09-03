(function (app) {
    'use strict';

    app.controller('AllReviewsController', allReviewsController);

    allReviewsController.$inject = ['$scope', 'Review'];

    function allReviewsController($scope, Review) {
	$scope.reviews = Review.find({
	    filter: {
		include: [
		          'coffeeShop',
		          'reviewer' ]
	    }
	});	
    }
})(angular.module('app'));

