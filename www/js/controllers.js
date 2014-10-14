angular.module('starter.controllers', [])

.controller('startHome', function($scope){
	$scope.reset = function() {
		try {
			console.log(navigator );
		} catch(err) {
			console.log(err.message);
		}
	};
})
