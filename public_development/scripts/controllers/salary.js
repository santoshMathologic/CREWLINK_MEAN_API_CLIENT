'use strict';

angular.module('crewLinkApp')
  .controller('salaryCtrl', function($scope, $state, $window, $location, $http) {

   $scope.salarieslist = [];
            $scope.query = {
                sortBy: "employeeName",
                limit: 10,
                page: 1,
                employeeId:"",
                


            }
            $scope.isLoading = false;

            $scope.getSalary = function () {
                $scope.isLoading =true;
                $http.get("/api/v1/salary", { params: $scope.query }).then(function (response) {
                    $scope.salarieslist = response.data.results;
                    $scope.currentPage = response.data.current;
                    $scope.perPage = response.data.options.perPage;
                    $scope.totalPages = response.data.last;
                    $scope.totalRecords = response.data.count;
                    $scope.isLoading = false;


                }, function (error) {


                })

            }
            $scope.getSalary();

             $scope.$watch('query', function (newValue, oldValue) {
                if (!oldValue) {
                    bookmark = $scope.query.page;
                }

                if (newValue !== oldValue) {
                    $scope.query.page = newValue.page;
                }

                if (!newValue) {
                    $scope.query.page = bookmark;
                }

                $scope.getSalary();
            }, true);


    
});