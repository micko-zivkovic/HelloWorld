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
	}
	
	$scope.toast = function() {
		try {
			window.plugins.toast.showShortTop('Epic!');
		} catch(e) {
			console.log('Error: ' + e.message);
		}
	}
})

.controller('startLogin', function($scope, $http, $ionicPopup, $ionicLoading){
	$scope.login = function() {
		try {
			$ionicLoading.show({ template: 'Loading...' });
			var url = "http://igogive.org/endpoint/load-user/";
			var responsePromise = $http.get( 
				url, 
				{ 
					params: {
						username: $scope.username,
						password: $scope.password
					}
				}
			);

			responsePromise.success(function(data) {
				$ionicLoading.hide();
				console.log(data);
				$ionicPopup.alert({
                       title: 'Field!',
                       template: 'Test'
                       });
			});
			
			responsePromise.error(function() {
				window.plugins.toast.showLongCenter("Error: AJAX failed");
			});

		} catch(e) {
			window.plugins.toast.showLongCenter("Error: " + e.message);
		}
	}
	
	$scope.fb_login = function() {
		try {
			if (!window.cordova) {
				/*
				var appId = prompt("Enter FB Application ID", "");
				facebookConnectPlugin.browserInit(appId);
				*/
				window.plugins.toast.showLongCenter("Error: FB Application not found");
			}
			/*
			facebookConnectPlugin.login( 
				["email","public_profile"],
				function (login_success) { 
					console.log(login_success);
					window.plugins.toast.showLongCenter('Login Success'); 
				},
				function (login_error) { 
					console.log(login_error);
					window.plugins.toast.showLongCenter('Login Error'); 
				}
			);
			*/
			
			facebookConnectPlugin.api( 
				"me/?fields=id,email",
				["public_profile"],
				function (api_success) { 
					console.log(api_success);
					window.plugins.toast.showLongCenter('API Success'); 
				},
				function (api_error) { 
					console.log(api_error);
					window.plugins.toast.showLongCenter('API Error'); 
				}
			);

		} catch(e) {
			console.log(e.message);
			window.plugins.toast.showLongCenter(e.message);
		}
	}
})