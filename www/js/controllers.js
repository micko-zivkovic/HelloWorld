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
			window.plugins.ToastPlugin.show_short('Epic!');
		} catch(e) {
			alert('Error: ' + e.message);
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
				console.log('AJAX failed.');
			});

		} catch(e) {
			console.log(e.message);
		}
	}
	
	$scope.fb_login = function() {
		try {
			if (!window.cordova) {
				var appId = prompt("Enter FB Application ID", "");
				facebookConnectPlugin.browserInit(appId);
			}
			
			facebookConnectPlugin.login( 
				["email"],
				function (response) { alert(JSON.stringify(response)) },
				function (response) { alert(JSON.stringify(response)) }
			);

		} catch(e) {
			console.log(e.message);
		}
	}
})