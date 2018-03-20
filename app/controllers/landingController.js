/**
 * Author : Om Prakash 
 * 20th March 2018.
 */
angular.module("authApp")
.controller("LandingController", function($scope,storageService){
    //initialize variables
    var vm = this;
    $scope.authInfo = getUserInfo();
    $scope.loginStatus = $scope.authInfo.loginStatus;
    $scope.uProfile = $scope.authInfo.userProfile;
    // methods
    function getUserInfo(){
        return storageService.getStoredAuthInfo();
    };
});