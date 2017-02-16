
angular.module("crewLinkApp").service('elasticService', ['$compile', function ($compiler,esFactory) {
return esFactory({
    host: 'search01:9200',
  });
}]);