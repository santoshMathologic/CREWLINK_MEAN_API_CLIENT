' use strict';
angular.module('crewLinkApp').factory('AuthenticationFactory', ['$compile', '$state', '$window', '$cookies', '$location', '$http', function ($state, $window, $cookies, $location, $http) {


    return {
        login: function (username, password) {
            return $http.post("http://localhost:3000/api/v1/login", {
                username: username,
                password: password
            });
        },
        logout: function () {

            if (AuthenticationFactory.isLogged) {

                AuthenticationFactory.isLogged = false;
                delete AuthenticationFactory.user;
                delete AuthenticationFactory.userRole;
                delete $window.sessionStorage.userPlan;
                delete $window.sessionStorage.token;
                delete $window.sessionStorage.user;
                delete $window.sessionStorage.userRole;

                $cookies = {};

                $state.go("home.login");
            }

        }
    }


}]);