(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$http', 'UserService'];
    function AuthenticationService($http, UserService) {
        var service = {};

        service.Login = Login;
        //service.SetCredentials = SetCredentials;

        return service;

        function Login(username, password, callback) {


            var authdata = window.btoa(username + ':' + password);
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;
            $http.post('http://localhost:8080/authenticate')
               .then(function (response) {
                   callback(response);
               });

        }
    }



})();