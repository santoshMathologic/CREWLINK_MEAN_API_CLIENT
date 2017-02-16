' use strict';

angular.module('crewLinkApp')
  .controller('uploadCtrl', function ($scope, $state, $window, uploadService, $document, Upload, $location, toaster, $timeout, $http, $resource) {

    $scope.uploadList = [];

    $scope.getUploads = function () {
      uploadService.getUpload.then(function (data) {
        $scope.uploadList = data;
      });

    };
    $scope.getUploads();

    $scope.remove = function (upload) {
      var removeUri = "http://localhost:3000/api/v1/upload/removeUpload"
      if (upload !== null) {
        $scope.query = {
          markDelete: true,
          id: upload._id
        }
        $http.put(removeUri, { params: $scope.query }).success(function (response) {
          $scope.uploadList.splice($scope.uploadList.indexOf(upload), 1);
          toaster
            .pop({
              type: 'success',
              title: 'Removed  Succcessfully',
              body: 'Removed Succcessfully.'
            });
        }).error(function (error) {
          toaster
            .pop({
              type: 'error',
              title: 'Unable to Removed',
              body: 'Unable to Removed.'
            });

        });

      }
    },


      $scope.processUpload = function (upload) {

         $scope.query = {
          processData:upload, 
        }
        var apiUrl = "http://localhost:3000/api/v1/upload/ProcessUpload";
        $http.post(apiUrl,{params:$scope.query})
          .then(function (response) {
            console.log(response);
            if (response.data.status == 200) {

              toaster
                .pop({
                  type: 'success',
                  title: response.data.message,
                  body: response.data.message
                });
            }

          });

        console.log(upload);
      }





  });
