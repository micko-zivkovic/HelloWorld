angular.module('starter.controllers', [])

.controller('startHome', function($scope){
	$scope.reset = function() {
		try {
			console.log(navigator);
			console.log(navigator.hasOwnProperty('geolocation'));
			/*
			navigator.geolocation.getCurrentPosition(
				function(position) {
					alert(position);
				},
				function(e) { 
					alert("Error retrieving position " + e.code + " " + e.message) 
				}
			);
			*/
		} catch(e) {
			alert('Error: ' + e.message);
		}
	};
})

.controller('startLogin', function($scope){
	$scope.login = function() {
		try {
			var url = "http://igogive.org/endpoint/load-user/";
			var responsePromise = $http.jsonp( 
				url, 
				{ 
					params: {
						username: "v1",
						password: "v2"
					}
				}
			);

			responsePromise.success(function(data) {
				console.log(data);
			});
			
			responsePromise.error(function() {
				console.log('AJAX failed.');
			});

		} catch(e) {
			console.log(e.message);
		}
	};
})