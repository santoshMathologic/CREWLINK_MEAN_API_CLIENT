' use strict';

angular.module('crewLinkApp')
  .controller('trainCtrl', function trainController($scope, $state, $window, $location, $http) {




    $scope.gettrainType = function () {
      var typeuri = "http://localhost:3000/api/v1/trainTypes";
      $http.get(typeuri).then(function (response) {

        $scope.typeLists = response.data.results;
        $scope.currentPage = response.data.current;
        $scope.perPage = response.data.options.perPage;
        $scope.totalPages = response.data.last;
        $scope.totalRecords = response.data.count;
      });
    };

   // $scope.gettrainType();




  });