'use strict';
angular.module('crewLinkApp')
  .controller('stationCtrl', function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http, toaster) {

    //$scope.Days = Days;
    $scope.stationsList = [];
    $scope.stationdetails = {};
    $scope.blanktraindetails = {};


    $scope.saveStation = function (stationdetails) {
      var apiStationsUri = "http://localhost:3000/api/v1/stations"
      $http.post(apiStationsUri, stationdetails).then(function (response) {
        if (response.data.status == 200) {
          toaster
            .pop({
              type: 'success',
              title: 'Station saved Succcessfully',
              body: 'Station saved Succcessfully.'
            });

        }
      })

    }


    $scope.reset = function () {
      $scope.stationdetails = angular.copy($scope.blanktraindetails);
      $scope.clearInput();
      $scope.submitClass = "hide-errors";

    };
    $scope.$watch('stationdetails', function (c) {
      $location.hash('stationFormDiv');
      $anchorScroll();
    });

  });