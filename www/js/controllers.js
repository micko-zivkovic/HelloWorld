angular.module('starter.controllers', [])

.controller('startHome', function($scope){
	$scope.reset = function() {
		try {
			navigator.geolocation.getCurrentPosition(
				function(position) {
					alert(position);
				},
				function(e) { 
					alert("Error retrieving position " + e.code + " " + e.message) 
				}
			);
		} catch(e) {
			alert('Error: ' + e.message);
		}
	};
})
