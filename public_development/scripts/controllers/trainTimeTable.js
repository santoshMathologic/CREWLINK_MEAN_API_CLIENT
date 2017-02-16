' use strict';

angular.module('crewLinkApp')
  .controller('TrainTimeTableCtrl', function ($scope, $state, $http, $stateParams) {

    $scope.trainNo = ($state.params.trainNo) ? $state.params.trainNo : '';
    console.log($scope.trainNo);

    
    $scope.trainStationList = [];
     $scope.isLoading = true;
    $scope.query = {
      order: 'stopNo',
      limit: 10,
      page: 1,
      trainNo:$scope.trainNo,
      stationCode : "",
      distance : "",
      arrival :"",
      departure:"",
      duration : "",
      day:""


    };
    //var apiTrainstn = "http://localhost:3000/api/v1/timetables"
    var customUri = "http://localhost:4000/customRoutes/api/v1/trainstation";

    $scope.getStationList = function () {
      $http.get(customUri, { params: $scope.query })
        .then(function (response) {
          $scope.trainStationList = response.data.results;
          $scope.currentPage = response.data.current;
          $scope.perPage = response.data.options.perPage;
          $scope.totalPages = response.data.last;
          $scope.totalRecords = response.data.count;
          $scope.isLoading = false;
        });
    }


    $scope.getStationList();



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

      $scope.getStationList();
    }, true);

    $scope.changeTrainFromUser = function (train) {
      console.log("" + train);

    }

      $scope.$watch('currentPage', function (c) {
          if ($scope.inputPage != c) {
        		  $scope.inputPage = c;
        		  $scope.currentPage = c;
          }
        });


        $scope.$watch('inputPage', function (c) {
          if ($scope.inputPage <= $scope.totalPages && $scope.inputPage >= 1)
    		      $scope.query.page = $scope.inputPage;
          $scope.getStationList();
        });

        $scope.selectPage = function (page) {
          console.log(page);
          $scope.query.page = $scope.inputPage = page;
          $scope.getStationList();
        }




  });