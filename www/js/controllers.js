angular.module('starter.controllers', [])

.controller('startHome', function($scope){
	$scope.reset = function() {
		try {
			console.log(navigator.network.connection.type);
		} catch(err) {
			console.log(err.message);
		}
	};
})
