/*
' use strict';
angular.module('crewLinkApp')
  .controller('trainTypeCtrl', function ($scope, $anchorScroll,$timeout, $state, $window, $location, $http, toaster) {


      //$scope.Days = Days;
            $scope.trainTypesList = [];
            $scope.blanktrainTypedetails = {}; // the blank object is used to reset the form
            $scope.traintypedetails = {};

    $scope.saveTrainType = function (trainType) {
      var TTypeUri = "http://localhost:3000/api/v1/trainTypes"
      $http.post(TTypeUri, trainType).then(function (response) {
        if (response.data.status == 200) {
          toaster
            .pop({
              type: 'success',
              title: 'TrainType saved Succcessfully',
              body: 'TrainType saved Succcessfully.'
            });

        }
      });

    };

    $scope.removeTrainType = function (trainTypeObj) {
      $timeout(function () {
        var index = $scope.trainTypesList.indexOf(trainTypeObj);
        $scope.trainTypesList.splice(index, 1);

        toaster
          .pop({
            type: 'success',
            title: 'trainType deleted Succcessfully',
            body: 'trainType deleted Succcessfully.'
          });
      }, 100);
    };

    $scope.reset = function () {
      $scope.traintypedetails = angular.copy($scope.blanktraindetails);
      $scope.clearInput();
      $scope.submitClass = "hide-errors";

    };
    $scope.$watch('traintypedetails', function (c) {
      $location.hash('trainTypeFormDiv');
      $anchorScroll();
    });


  });
  */