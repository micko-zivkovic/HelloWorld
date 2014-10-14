angular.module('starter.controllers', [])

.controller('startHome', function($scope){
	$scope.reset = function() {
		try {
			navigator.geolocation.getCurrentPosition(
				function(position) {
					console.log(position);
				},
				function(e) { 
					console.log("Error retrieving position " + e.code + " " + e.message) 
				}
			);
		} catch(err) {
			console.log(err.message);
		}
	};
})
