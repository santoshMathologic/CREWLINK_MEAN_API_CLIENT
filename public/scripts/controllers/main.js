'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('crewLinkApp')
  .controller('MainCtrl', function($scope,$position,$state,$location,$window) {
    
      $state.go('dashboard.userPlan');
  });
