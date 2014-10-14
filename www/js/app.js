// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	
	console.log('test');
	
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

	.state('start', {
	    abstract: true,
	    url: '/start',
	    templateUrl: 'tmpl/start.html'
	  })
	.state('start.pocetna', {
		url: '/pocetna',
		views: {
		  'app-view': {
		    templateUrl: 'tmpl/start-pocetna.html' 
		  } 
		}
	})
	.state('start.login', {
		url: '/login',
		views: {
		  'app-view': {
		    templateUrl: 'tmpl/start-login.html' 
		  } 
		}
	})
	.state('start.register', {
		url: '/register',
		views: {
		  'app-view': {
		    templateUrl: 'tmpl/start-register.html' 
		  } 
		}
	})
	.state('start.select-charity', {
		url: '/select-charity',
		views: {
		  'app-view': {
		    templateUrl: 'tmpl/start-select-charity.html' 
		  } 
		}
	})
	  
	.state('app', {
	    abstract: true,
	    url: '/app',
	    templateUrl: 'tmpl/app.html'
	  })
	.state('app.recruit-givers', {
		url: '/recruit-givers',
		views: {
		  'app-view': {
		    templateUrl: 'tmpl/app-recruit-givers.html'
		  } 
		}
	})
	.state('app.go', {
		url: '/go',
		views: {
		  'app-view': {
		    templateUrl: 'tmpl/app-go.html' 
		  } 
		}
	})
	.state('app.go1', {
		url: '/go1',
		views: {
		  'app-view': {
		    templateUrl: 'tmpl/app-go1.html' 
		  } 
		}
	})
	.state('app.go2', {
		url: '/go2',
		views: {
		  'app-view': {
		    templateUrl: 'tmpl/app-go2.html' 
		  } 
		}
	})
	  
  .state('elements',{
	  url: "/elements",
	  templateUrl: "tmpl/elements.html"
	  
  });
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/start/pocetna');
});

