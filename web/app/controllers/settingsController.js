// define([], function() {
// 	return ['$scope', '$http', function($scope, $http) {
// 		console.log('settingsController.js loading...');
// 		// Access the scope of controller from here.
// 		$scope.message = 'Settings page';

// 		$scope.getAuthUrl = function() {
// 			$http({
// 				method: 'GET',
// 				url: 'http://localhost:8080/gapi/authUrl',
// 				withCredentials: false
// 			}).success(function(data) {
// 				if (data.url) window.location = data.url;
// 			});
// 			return 'http://localhost:8080/gapi/authUrl';
// 		};

// 		// Because this has happened asynchronously we've missed
// 		// Angular's initial call to $apply after the controller has been loaded,
// 		// hence we need to explicitly call it at the end of our Controller constructor.
// 		$scope.$apply();
// 	}];
// });

// function SettingsController($scope, $http) {
// 	$scope.message = 'Settings page';

// 	$scope.getAuthUrl = function() {
// 		$http.get('http://localhost:8080/gapi/authUrl')
// 			.success(function(data) {

// 			});
// 	};
// }

// angular.module('App.Controllers.SettingsController').controller('SettingsController', function($scope, $http, $location) {

// 	$scope.message = 'Settings page';

// 	$scope.goToAuthUrl = function() {
// 		// $location.url($scope.googleAuthUrl); /* Only changes url in browser window, doesn't actually navigate to new location */
// 		if ($scope.googleAuthUrl) {
// 			window.location = $scope.googleAuthUrl;
// 		}
// 	};

// 	// Asynchronously grab Google authorization URL from server and attach it to scope.
// 	$http.get('http://localhost:8080/gapi/authUrl')
// 		.success(function(data) {
// 			console.log(data);
// 				$scope.googleAuthUrl = data.url;
// 		});
// });