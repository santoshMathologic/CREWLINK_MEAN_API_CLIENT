' use strict';

angular.module('crewLinkApp').factory('OfficerValidationService', [function () {
    return {
        checkStatus: function () {
            return true;
        },

        displayName: function () {
            return "santosh";
        }
    };
}]);