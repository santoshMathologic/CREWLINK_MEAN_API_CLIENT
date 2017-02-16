angular.module('crewLinkApp').service('uploadService', function ($state, $window, $http, $q, $resource) {
    var upload = {
        getUpload: (function (response) {
            var apiUrl = "http://localhost:3000/api/v1/upload"
            var query = {
                limit: 10,
                page: 1,
                sortBy: "originalFileName"

            }
            var currentPage;
            var perPage;
            var totalPages;
            var totalRecords;
            var uploadsList = [];
            var deferred = $q.defer();
            $http.get(apiUrl, { params: query }).then(function (response) {
                uploadsList = response.data.results;
                currentPage = response.data.current;
                perPage = response.data.options.perPage;
                totalPages = response.data.last;
                totalRecords = response.data.count;
                deferred.resolve(uploadsList);
            });
            return deferred.promise;
        })(),

        
    }// end of upload object 
    return upload;


});