' use strict';

angular.module('crewLinkApp')
    .controller('loginCtrl', function LoginController($scope, $position, $http, $state, $window,toaster,$ocLazyLoad, AuthenticationFactory) {
        $scope.loginDetails = {
            userName: '',
            password: ''
        }
        $scope.login = function () {

            if ($scope.loginDetails.userName != "" && $scope.loginDetails.password != "") {


                $http.post("http://localhost:4000/api/v1/login", {
                    username: $scope.loginDetails.userName,
                    password: $scope.loginDetails.password
                }).then(function successCallBack(res) {

                    if (res.data) {
                        $window.sessionStorage.token = res.data.token;
                        $window.sessionStorage.user = res.data.userObject[0].userName; // to fetch the user details on refresh
                        $window.sessionStorage.role = res.data.userObject[0].roleCode; // to fetch the user details on refresh
                        $window.location.href = 'dashboard.html';
                        //$window.location.href = 'dashboard.userPlan';
                       
                    }


                }, function errorCallBack(error) {
                    throw new Error("Error in Accessing Token" + error);
                });


                //
                //AuthenticationFactory.login($scope.loginDetails.userName,$scope.loginDetails.password);

                $ocLazyLoad.load(
                    ['scripts/index.js'
                    ])
                    .then(function () {
                        console.log("OCZLAZYLOADING");
                    });

            }

        };
    });
