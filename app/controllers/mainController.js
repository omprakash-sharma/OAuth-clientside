/**
 * Author : Om Prakash 
 * 20th March 2018.
 */
angular.module("authApp")
.controller("MainController", function($scope,$location,storageService,userService){
    // initialize all variables
    var self = this;
    self.newUserInfo = {};
    self.userInfo = {};
    $scope.loginStatus = {status:'false'};
    // methods
    $scope.loadLoginPage = function(path){
       $location.path(path);
    };
    // create new user
    $scope.signup = function(){
        if(self.newUserInfo.password === self.newUserInfo.confirmPassword){
            var callObj = {};
            callObj.userName = self.newUserInfo.name;
            callObj.userEmail = self.newUserInfo.email;
            callObj.userPassword = self.newUserInfo.password;

            userService.createNewUser(callObj).then(function(response){
                if(response.statusText === 'OK'){
                    alert(response.data.message)
                }
            },function(err){
                console.log("Error in fetching data from server" + err);
            });
            console.log(self.newUserInfo)
        }else{
            alert("Be sure 'password' and 'confirm password' is same.");
            return false;
        }
    };
    $scope.login = function(){
        var callObj = {};
        callObj.email = self.userInfo.email;
        callObj.password = self.userInfo.password;
        if(self.userInfo.email && self.userInfo.password){
            userService.checkExistingUser(callObj).then(function(response){
                if(response.data.statusText === "OK"){
                    storageService.storeAuthInfo(self.userInfo,$scope.loginStatus);
                    $location.path('/landing');
                    $scope.loginStatus.status = response.data.status;
                    $scope.loginStatus.msg = response.data.message;
                }else{
                    $scope.loginStatus.status = response.data.status;
                    $scope.loginStatus.msg = response.data.message;
                }
            },function(err){
                console.log("Error in fetching data from server" + err);
            });
            
        }else{
            return false;
        }
    };
});