
angular.module("crewLinkApp").service('TimeCalCulator', ['$compile', function ($compiler) {


    this.hrsToMinutes = function (time) {
        time = time.split(":");
        return parseInt(time[0]) * 60 + parseInt(time[1]);
    }

}]);