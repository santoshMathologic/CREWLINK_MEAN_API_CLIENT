angular.module('crewLinkApp').factory('esFactory', ['$http', '$q', function ($http, $q) {

    var factory = function (config) {
        config = config || {};
        config.connectionClass = AngularConnector;
        config.$http = $http;
        config.defer = function () {
            return $q.defer();
        };
        return new Client(config);
    };
}]);