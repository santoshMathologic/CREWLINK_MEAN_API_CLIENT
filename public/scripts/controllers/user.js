
'use strict';
angular.module('crewLinkApp')
  .controller('userCtrl', function($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http, toaster) {

  $scope.getRole = function () {
                    $scope.roles = [];
                    var apiRole = "http://localhost:4000/api/v1/roles";
                    $scope.query = {
                        sortBy: 'roleCode',
                        limit: 10,
                        page: 1,

                    };

                    $http.get(apiRole, { params: $scope.query })
                        .then(function (response) {
                            $scope.roles = response.data.results;
                            $scope.currentPage = response.data.current;
                            $scope.perPage = response.data.options.perPage;
                            $scope.totalPages = response.data.last;
                            $scope.totalRecords = response.data.count;
                        });

                }
                $scope.getRole();

                $scope.headStationSelected;

                $scope.getHeadStation = function (searchquery, timeout) {
                    return $http.get("http://localhost:3000/api/v1/stations/stationsByQuery/" + searchquery);

                }

                 $scope.saveUser = function (userobj) {

                    if (userobj.username != null && userobj.username != ''
                        || userobj.password != null && userobj.password != ''
                        || userobj.firstName != null && userobj.firstName != ''
                        || userobj.lastName != null && userobj.lastName != ''
                        || userobj.email != null && userobj.email != ''
                        || userobj.role != null && userobj.role != ''
                        || userobj.address != null && userobj.address != ''
                        || userobj.isActive != null && userobj.isActive != ''
                        || userobj.mobileNo != null && userobj.mobileNo != ''
                    ) {

                        var apiUser = "http://localhost:3000/api/v1/admin/users";
                        $http.post(apiUser, userobj).then(function (successResponse) {
                            if (successResponse.data.status == 200) {
                                toaster
                                    .pop({
                                        type: 'success',
                                        title: 'User saved Succcessfully',
                                        body: 'User saved Succcessfully.'
                                    });

                            }

                        });

                    }

                }

                $scope.reset = function () {
                    $scope.userdetails = angular.copy($scope.blankuserdetails);
                    $scope.submitClass = "hide-errors";
                }
                $scope.$watch('userdetails', function (c) {
                    $location.hash('userFormDiv');
                    $anchorScroll();
                });

                 $scope.changeStatus = function () {
                   
                   $scope.userdetails.isActive = !$scope.userdetails.isActive;
                   angular.element(document.querySelector('[id="active"]')).addClass('animated bounceOutRight');
                   /* if(!$scope.userdetails.isActive){
                        $scope.userdetails.isActive = !$scope.userdetails.isActive;
                        angular.element(document.querySelector('[id="active"]')).addClass('animated bounceOutRight');
                    }if($scope.userdetails.isActive){
                        angular.element(document.querySelector('[id="active"]')).addClass('animated bounceOutLeft');
                    }
                    */
                }

      
});