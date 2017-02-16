'use strict';
angular.module('crewLinkApp')
  .directive('createSalary', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/createSalary.tmpl.html',
      restrict: 'E',
      replace: true,
      controller: function ($scope, $state, $window, $location, $anchorScroll, $timeout, $http, toaster) {

        $scope.salaryDetails = {};

        $scope.saveSalary = function (salaryobj, saveType) {
          if (saveType === 'create') {

            var req = {
              method: 'POST',
              url:"/api/v1/salary",
              headers: {
                'Content-Type': 'application/json'
												  },
                data:salaryobj
            };
							$http(req)
              .then(function (response) {
                toaster.pop({ type: 'success', title: 'User Saved', body: 'User Saved successfully!!' });
                $scope.$parent.refreshUser = !$scope.$parent.refreshUser;
                //$scope.selectedHeadStation = null;
                //$scope.reset();
              }, function (response) {
                toaster.pop({ type: 'error', title: 'Error', body: 'Unable To Save User Station. Please Try Again!!!' });
              });




          }




        }





      }
    }
  }]);
