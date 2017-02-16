
'use strict';

angular.module('crewLinkApp')
  .controller('drivingDutyCtrl', function ($scope, $state, $window, $log, $q, $timeout, $location, $http, toaster) {

    $scope.trains = [];

    $scope.searchTrain = function (term, timeout) {
      if (!term) {
        return $scope.trains;
      }
      var trainNo = parseInt(term);
      var deferred = $q.defer();
      $http.get("/api/v1/trains/searchTrain/" + trainNo).then(function (response) {

        $scope.trains = response.data.results;
        deferred.resolve($scope.trains);
      }, function (errorResponse) {
        deferred.reject(errorResponse);

      });

      return deferred.promise;
      /* $scope.query = {
           limit: 10,
           page: 1,
           sortBy: 'trainNo',
           term: term,
       }
       var deferred = $q.defer();
       $http.get("http://locolhost:3000/api/v1/trains/searchTrain", { params: $scope.query }).then(function (response) {
           $scope.trains = response.data.results;
           deferred.resolve($scope.trains);
       }, function (errorResponse) {
           deferred.reject(errorResponse);
 
       });
       */

    };


  });
