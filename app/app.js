/**
 * Author : Om Prakash 
 * 20th March 2018.
 */
var app = angular.module("authApp", ['ngRoute']);
app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl: function(){
            return "app/views/welcome-page.html"
        },
        controller: "MainController"
    })
    .when("/login", {
        templateUrl: () => "app/views/login-page.html",
        controller: "MainController",
        controllerAs: "mctrl"
    })
    .when("/landing", {
        templateUrl: () => "app/views/landing-page.html",
        controller: "LandingController"
    })
    .otherwise({
        template: '<div class="text-center">:: Page Not Found ::</div>',
        //redirectTo: '/'
    })
}]);