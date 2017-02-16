' use strict';
angular.module('crewLinkApp')
  .directive('trainType', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/trainType.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http, toaster) {

        //$scope.Days = Days;
        $scope.trainTypesList = [];
        $scope.blanktrainTypedetails = {}; // the blank object is used to reset the form
        $scope.traintypedetails = {};

        if (!$scope.trainTypedetails)
          $scope.trainTypedetails = {};
        $scope.submitClass = 'show-errors';

        $scope.query = {
          sortBy: 'name',
          limit: 10,
          page: 1,

        };
        


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

          $scope.getType();
        }, true);



      }
    };
  }]);
