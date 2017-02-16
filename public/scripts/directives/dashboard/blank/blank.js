'use strict';
angular.module('crewLinkApp')
  .directive('crewBlank', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/blank.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {},
      controller: function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http, toaster) {

            
        $scope.searchResult = [
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          { "station": "ANVT", "noofLp": 5, "NoofRT": 34, "totalKm": 6348, "PilotKM": 1183, "DrivingKM": 5165, "DutyTime": "140h 2m", "Duty14D": "56h 0m", "OSR": "146h 33m", "OSR14D": "58h 37m", "HQR": "553h 25m", "HQR14D": "221h 22m", "AvgHQR": "110h 41m" },
          
        ];




      }
    }
  }]);
