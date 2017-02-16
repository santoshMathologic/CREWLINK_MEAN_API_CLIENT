' use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('crewLinkApp')
  .directive('sidebar', ['$location', function () {
    return {
      templateUrl: 'scripts/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, UserService, $window) {
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;

        //// variable declaration for Side Bar

        $scope.hideSidebarVar = false;
        $scope.tooltipMessage = 'Hide Sidebar!';
        $scope.UserService = UserService;
        $scope.hasAdmin = false;



        $scope.check = function (x) {

          if (x == $scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };

        $scope.multiCheck = function (y) {

          if (y == $scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };

        //  UserService.getUser();
        $scope.enableSidebar = function()
    	{
    		 $scope.tooltipMessage = 'Hide Sidebar!';
       		 angular.element(document.querySelector('[id="page-wrapper"]')).removeClass('page-wrapper-no-margin');
       		 angular.element(document.querySelector('[id="togglebutton"]')).removeClass('glyphicon-chevron-right hide-toggle-button').addClass('glyphicon-chevron-left');
       		 angular.element(document.querySelector('[id="toggleSideBar"]')).removeClass('hide-sidebar');
       	}

        $scope.disableSidebar = function () {
          $scope.tooltipMessage = 'Show Sidebar!';
       		 angular.element(document.querySelector('[id="page-wrapper"]')).addClass('page-wrapper-no-margin animate-hide');
       		 angular.element(document.querySelector('[id="togglebutton"]')).addClass('glyphicon-chevron-right hide-toggle-button');
       		 angular.element(document.querySelector('[id="toggleSideBar"]')).addClass('hide-sidebar');
        }

        $scope.hideSidebar = function () {
          $scope.hideSidebarVar = ($scope.hideSidebarVar) ? false : true;
          UserService.config.sidebarTrigger = !$scope.hideSidebarVar;
        };

        $scope.$watch(function () { return UserService.config.sidebarTrigger; }, function (newVal) {

        	 if (!newVal)
            $scope.disableSidebar();
        	 else {
              $scope.enableSidebar();
          }
          $scope.hideSidebarVar = !newVal;
        }.bind(this), true);

      }
    }
  }]);
