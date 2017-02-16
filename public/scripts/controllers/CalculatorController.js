' use strict';

angular.module('crewLinkApp')
  .controller('calculatorCtrl', function($scope,$state) {
    

 
  $scope.sum = function() {
    $scope.z = $scope.x + $scope.y;
  };

});