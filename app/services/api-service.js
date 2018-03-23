angular.module("authApp")
.service("userService",function($http){
    var host = 'http://localhost:8082/';

    this.createNewUser = function(callObj){
        return $http.post(host + 'auth-api/signup', callObj);
    };

    this.checkExistingUser = function(reqObj){
        return $http.post(host + 'auth-api/login', reqObj);
    };
});