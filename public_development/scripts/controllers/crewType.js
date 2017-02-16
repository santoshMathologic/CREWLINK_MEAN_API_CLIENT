' use strict';

angular.module('crewLinkApp')
    .controller('crewTypeCtrl', function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http, toaster) {
        //$scope.Days = Days;
        $scope.crewTypeList = [];
        $scope.crewTypeObj = {};
        $scope.blanktraindetails = {};

        $scope.query = {
            sortBy: 'name',
            limit: 10,
            page: 1,

        };
      
        $scope.getCrewType = function () {
            $http.get("http://localhost:4000/api/v1/crewTypes", { params: $scope.query })
                .then(function (response) {
                    $scope.crewTypeList = response.data.results;
                    $scope.currentPage = response.data.current;
                    $scope.perPage = response.data.options.perPage;
                    $scope.totalPages = response.data.last;
                    $scope.totalRecords = response.data.count;
                });
        }
        $scope.getCrewType();

        $scope.$watch('query', function (newValue, oldValue) {
            if (!oldValue) {
                bookmark = $scope.query.page;
            }

            if (newValue !== oldValue) {
                $scope.query.page = newValue.page;
            }

            if (!newValue) {
                $scope.query.page = bookmark;
            }

            $scope.getCrewType();
        }, true);

        $scope.saveCrewType = function (crewType, saveType) {

            $http.post("/api/v1/crewTypes", crewType).then(function (response) {
                if (response.data.status == 200) {
                    $scope.crewTypeList.push(crewType);
                    toaster
                        .pop({
                            type: 'success',
                            //  title: saveType.capitalizeFirstLetter() + ' saved Succcessfully',
                            // body: saveType.capitalizeFirstLetter() + ' saved Succcessfully.'
                        });

                }
            }, function (error) {
                toaster
                    .pop({
                        type: 'error',
                        title: saveType.capitalizeFirstLetter() + 'Unable to saved ',
                        body: saveType.capitalizeFirstLetter() + ' Unable to saved .'
                    });


            });

        };

        $scope.removeCrewType = function (crew, saveType) {
            $timeout(function () {
                var index = $scope.crewTypeList.indexOf(crew);
                $scope.crewTypeList.splice(index, 1);

                toaster
                    .pop({
                        type: 'success',
                        title: 'crewType deleted Succcessfully ' + saveType.capitalizeFirstLetter(),
                        body: 'crewType deleted Succcessfully.'
                    });
            }, 100);
        }

        $scope.reset = function () {
            $scope.crewTypeObj = angular.copy($scope.blanktraindetails);
            $scope.clearInput();
            $scope.submitClass = "hide-errors";

        };
        $scope.$watch('crewTypeObj', function (c) {
            $location.hash('crewTypeFormDiv');
            $anchorScroll();
        });

        $scope.supported = false;

        $scope.textToCopy = 'I can copy by clicking!';

        $scope.success = function () {
            console.log('Copied!');
        };

        $scope.fail = function (err) {
            console.error('Error!', err);
        };




    });