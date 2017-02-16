'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('crewLinkApp')
	.directive('headerNotification',function($window,$location){
		return {
        templateUrl:'scripts/directives/header/header-notification/header-notification.html',
        restrict: 'E',
        replace: true,
		 scope: {},
		 controller: function ($scope, $state) {

			 $scope.logout =  function(){
					$window.location.href = 'index.html';
			 }
			  

		 }

		 }
	
		
	});


