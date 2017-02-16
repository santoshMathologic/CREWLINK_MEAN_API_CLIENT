
'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:UserService
 * @description
 * # UserService
 */

angular.module('crewLinkApp').provider("UserService", function () {
				var provider = {};
				var config = {};
				config.sidebarTrigger = true;
				provider.$get = function ($http, $q, $timeout, $cookies, $window) {
		var service = {};
		service.config = {};
		service.config.sidebarTrigger = config.sidebarTrigger;

		service.selectedUserPlan = null;
		service.user = null;
		service.getUser = function () {
			var deferred = $q.defer();
			if (config.user == null) {
				var username = $window.sessionStorage.user;
				var token = $window.sessionStorage.token;
				var role = $window.sessionStorage.role;

				$http.get("/api/v1/admin/users/getOne", {params:{ "userName":username}}).then(function (successResponse) {
					config.user = successResponse.data;
					service.user = config.user;
					deferred.resolve(config.user);

				}, function (errorResponse) {
					deferred.reject(errorResponse);
				})
			}else{
				deferred.resolve(config.user);
			}
			return deferred.promise;
		};

		service.getCurrentUser = function () {
			return service.user;
		};

		service.setSelectedUserPlan = function (userPlan) {
			config.selectedUserPlan = (userPlan) ? userPlan : selectedUserPlan;
			var id = config.selectedUserPlan._id;
			config.selectedUserPlan.id = id;
			$cookies.selectedUserPlan = JSON.stringify(config.selectedUserPlan);
			service.selectedUserPlan = config.selectedUserPlan;			 
		};
		service.clearSelectedUserPlan = function () {
			config.selectedUserPlan = {};
			$cookies.selectedUserPlan = null;
			delete $cookies['selectedUserPlan'];
			$cookies.remove('selectedUserPlan');
			service.selectedUserPlan = config.selectedUserPlan;
		};
		service.getSelectedUserPlan = function () {
		//	return (service.selectedUserPlan)?service.selectedUserPlan:($cookies.selectedUserPlan)?JSON.parse($cookies.selectedUserPlan):{};
		return (service.selectedUserPlan)?service.selectedUserPlan:{};

		};
		return service;
		}
	return provider;
});


