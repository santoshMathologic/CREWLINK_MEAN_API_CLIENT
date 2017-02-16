' use strict';
angular.module('crewLinkApp')
  .directive('station', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/station.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http, toaster) {


        $scope.stationsList = [];   
	      $scope.serverFetch = new ServerTableFetch(
			  "/api/v1/stations",
			  $http,	 
			  function(beforeProcessingResponse){ // Before processing this is called
				  
          $scope.refreshStation = true;
				  $scope.isLoading = true;
			  },
			  function(resultObj){			// After processing this is called
				  $scope.stationsList = resultObj.results;
          angular.element(document.querySelector('[id="stationTable"]')).addClass('animated fadeIn');
				  $scope.isLoading = false;
          $scope.refreshStation = true;
				  
			  },function(AfterProcessingErrorResponse){					// Call Back After Error
				  console.log(""+AfterProcessingErrorResponse);
			  }
	  );



        $scope.removeStation = function (station) {
          $timeout(function () {
            var index = $scope.stationsList.indexOf(station);
            $scope.stationsList.splice(index, 1);
            toaster
              .pop({
                type: 'success',
                title: 'Station Removed Succcessfully',
                body: 'Station Removed Succcessfully.'
              });


          }, 1000);
        }



      }
    }
  }]);
