angular.module('starter.controllers', [])

.controller('startHome', function($scope){
	$scope.reset = function() {
		console.log(navigator.network.connection.type);
	};
})
