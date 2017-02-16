'use strict';

angular.module('crewLinkApp')
  .controller('divisionCtrl', function ($scope, $state, $window, $location, $anchorScroll, $timeout, $http,toaster) {

    //$scope.Days = Days;
    $scope.divisionList = [];
    $scope.divisionObj = {};
    $scope.blanktraindetails = {};

    $scope.query = {
      sortBy: 'name',
      limit: 10,
      page: 1,

    };
    

    $scope.getdivision = function () {
      $http.get("/api/v1/divisions", { params: $scope.query })
        .then(function (response) {
          $scope.divisionList = response.data.results;
          $scope.currentPage = response.data.current;
          $scope.perPage = response.data.options.perPage;
          $scope.totalPages = response.data.last;
          $scope.totalRecords = response.data.count;
        });
    }


    $scope.getdivision();

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

      $scope.getdivision();
    }, true);


    $scope.removeDivision = function (division) {
      $timeout(function () {
        var index = $scope.divisionList.indexOf(division);
        $scope.divisionList.splice(index, 1);

        toaster
          .pop({
            type: 'success',
            title: 'division deleted Succcessfully',
            body: 'division deleted Succcessfully.'
          });
      }, 100);
    }


  });