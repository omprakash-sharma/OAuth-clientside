/**
 * Author : Om Prakash 
 * 20th March 2018.
 */
angular.module("authApp")
.controller("MainController", function($scope, $location,storageService){
    // initialize all variables
    var self = this;
    self.userInfo = {};
    $scope.loginStatus = {};

    // methods
    $scope.loadLoginPage = function(path){
       $location.path(path);
    };
    $scope.login = function(){
        if(self.userInfo.email && self.userInfo.password){
            $scope.loginStatus.status = true;
            $scope.loginStatus.msg = "loggedin successfully."
            storageService.storeAuthInfo(self.userInfo,$scope.loginStatus);
            $location.path('/landing');
        }else{
            return false;
        }
    };
});