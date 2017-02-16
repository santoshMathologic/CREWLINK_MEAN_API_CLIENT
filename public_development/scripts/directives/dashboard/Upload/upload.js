' use strict';
angular.module('crewLinkApp')
  .directive('upload', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/upload.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, $state, $window, uploadService, $document, Upload, $location, toaster, $timeout, $http) {

        $scope.uploadList = [];
        $scope.chooseItems = {
          "TrainDetails": "TrainDetails",
          "TrainStation": "TrainStation",

        }
       
        $scope.Iserror = false;
        $scope.checkFileType = function (files) {
          $scope.Iserror = false;
          var fileExtension = files[0].name.split('.')[files[0].name.split('.').length - 1].toLowerCase();
          if (fileExtension !== "csv") {
            alert("Please choose csv Type files ");
            $scope.Iserror = true;
          } else {
            $scope.Iserror = false;
          }


        };

        $scope.processUpload = function (file) {
          var fileName = file.name;
          var fileExtension = fileName.split('.')[fileName.split('.').length - 1].toLowerCase();

          Upload.upload({
            url: "http://localhost:3000/api/v1/upload/createUpload",
            data: { Uploadfile: file, name: 'file', dataType: $scope.uploadObject.chooseItems, fileType: fileExtension, username: "SANTOSH", description: $scope.uploadObject.description, status: $scope.uploadObject.description }
          }).progress(function (evt) {
            console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            $scope.progressBar = parseInt(100.0 * evt.loaded / evt.total);
          }).success(function (data, status, headers, config) {
            $scope.$parent.uploadList.push(data);
            toaster
              .pop({
                type: 'success',
                title: 'Upload '+$scope.uploadObject.chooseItems+' Succcessfully!!!!',
                body: 'Upload '+$scope.uploadObject.chooseItems+' Succcessfully!!!!',
              });

            console.log('upload succesfully...');
          }).error(function (err) {
            console.log(err.stack);
          })


       //   console.log(file);
        };

        $scope.saveUpload = function () {
          if ($scope.form.Uploadfile.$valid && $scope.Uploadfile) {
            $scope.processUpload($scope.Uploadfile);
          }

        }




        




       

        $scope.countChar = function (val) {

          var max = 500;
          // var len = val.value.length;
          var len = $scope.uploadObject.description.length;
          if (len >= max) {

            document.getElementById("charNum").innerHTML = " you have reached the limit";
          } else {
            var char = max - len;
            document.getElementById("charNum").innerHTML = char + " characters left";
            //angular.element(document.querySelector('[id="charNum"]'));
          }


        }











      }
    }
  }]);
