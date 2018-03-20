angular.module("authApp")
.service("storageService",function(){
    var storage = {};
    storage.loginStatus ={};
    storage.userProfile ={};

    this.storeAuthInfo = function(userInfo,authStatus){
        storage.userProfile.userName = userInfo.name;
        storage.userProfile.userEmail = userInfo.email;
        storage.loginStatus.status = authStatus.status;
        storage.loginStatus.message = authStatus.msg;
    };
    this.getStoredAuthInfo = function(){
        return storage;
    };
});