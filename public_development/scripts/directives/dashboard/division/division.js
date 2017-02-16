'use strict';
angular.module('crewLinkApp')
  .directive('division', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/division.tmpl.html',
      restrict: 'E',
      replace: true,
      controller: function ($scope, $state, $window, $location, $anchorScroll, $timeout, $http, toaster) {
        $scope.saveDivision = function (divisionObj) {
          

          console.log($scope.divisionObj.name);
          $http.post("/api/v1/divisions", divisionObj).then(function (response) {
            if (response.data.status == 200) {
              toaster
                .pop({
                  type: 'success',
                  title: 'Division saved Succcessfully',
                  body: 'Division saved Succcessfully.'
                });

            }
          })


        }
        $scope.reset = function () {
          $scope.divisionObj = angular.copy($scope.blanktraindetails);
          $scope.clearInput();
          $scope.submitClass = "hide-errors";

        };
        $scope.$watch('divisionObj', function (c) {
          $location.hash('divisionFormDiv');
          $anchorScroll();
        });


      }


    }
  }]);
