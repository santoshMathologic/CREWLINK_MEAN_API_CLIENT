angular.module('crewLinkApp').directive('drivingSection', ['$compile', function ($compiler) {
    return {
        restrict: 'E',
        templateUrl: 'views/dashboard/drivingSection.tmpl.html',
        controller: function ($scope, $state, $window, $log, $q, $timeout, $location, $http, toaster) {

            $scope.trainNo = ($state.params.trainNo) ? $state.params.trainNo : 0;
            $scope.startDay = ($state.params.startDay) ? $state.params.startDay : '';
            $scope.trainsList = [];
            $scope.Days = Days;
            $scope.isLoading = true;
            $scope.itemsPerPage = 200;
            $scope.trainStations = [];
            $scope.query = {
                order: 'train_No',
                limit: 10,
                page: 1,

            };
            $scope.selectedTrain = {
                trainNo: $scope.trainNo,
                startDay: $scope.startDay
            };
            $scope.selectedCssClass = 'selected-train-section';


            
            $scope.getTrains = function () {

                $scope.isLoading = true;
                $http.get("/api/v1/gettraindetails", { params: $scope.query }).then(function (response) {
                    $scope.trainsList = response.data.results;
                    $scope.currentPage = response.data.current;
                    $scope.perPage = response.data.options.perPage;
                    $scope.totalPages = response.data.last;
                    $scope.totalRecords = response.data.count;
                    $scope.isLoading = false;

                }, function (errorResponse) {


                });

            };
            $scope.getTrains();


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

                $scope.getTrains();
            }, true);

            $scope.$watch('currentPage', function (c) {
                if ($scope.inputPage != c) {
                    $scope.inputPage = c;
                    $scope.currentPage = c;
                }
            });


            $scope.$watch('inputPage', function (c) {
                if ($scope.inputPage <= $scope.totalPages && $scope.inputPage >= 1)
                    $scope.query.page = $scope.inputPage;
                $scope.getTrains();
            });

            $scope.selectPage = function (page) {
                console.log(page);
                $scope.query.page = $scope.inputPage = page;
                $scope.getTrains();
            }



            /////implementing driving sections //////////////////

            if ($scope.selectedTrain.trainNo != 0
                && $scope.selectedTrain.startDay != '') {

                $http.get('/api/trains/search/findByTrainNoAndStartDay?trainNo='
                    + $scope.selectedTrain.trainNo
                    + "&startDay="
                    + $scope.selectedTrain.startDay).then(function (response) {
                        $scope.selectedTrain = response;

                    }, function (errorRes) {

                    });

            }

            $scope.getTrainTimeTable = function (trainItem) {
                if ($scope.selectedTrain.trainNo != trainItem.train_No) {
                    $scope.selectedTrain = {
                        trainNo: trainItem.train_No,
                        startDay: 1,
                        cssClass: $scope.selectedCssClass
                    };
                    $scope.getTrainStation();
                }

            };
            $scope.getSelectedTrainCss = function (trainItem) {
                if ($scope.selectedTrain.trainNo == trainItem.train_No
                    && $scope.selectedTrain.startDay == 1) {
                    return $scope.selectedTrain.cssClass;
                }
                return "";
            };

            $scope.updateTrainStationsUrl = function () {
                if ($scope.selectedTrain.trainNo == 0
                    || $scope.selectedTrain.startDay == '') {
                    return '';
                }
                /* return "/api/v1/trainStations/listWithDrivingSections?userPlan="
                     + 2
                     + "&sort=stopNumber&trainNo="
                     + $scope.selectedTrain.trainNo
                     + "&startDay="
                     + $scope.selectedTrain.startDay
                     + "&size="
                     + $scope.itemsPerPage
                     + "&limit="
                     + $scope.itemsPerPage;
                     */

               


            };

            $scope.getTrainStation = function () {

                //$scope.updateTrainStationsUrl.bind(this);

                if ($scope.selectedTrain.trainNo == 0
                    || $scope.selectedTrain.startDay == '') {
                    return '';
                }

                var userPlan = 1;
                var sort = "stopNumber";
                var trainNo = $scope.selectedTrain.trainNo;
                var startDay = $scope.selectedTrain.startDay;
                var page = $scope.itemsPerPage;
                var limit = $scope.itemsPerPage;


                var trainStationUrl = "/api/v1/trainStations/listWithDrivingSections/" 
                    + userPlan  + "/"
                    + sort      + "/"
                    + trainNo   + "/"
                    + startDay  + "/"
                    + page      + "/"
                    + limit;

                $http.get(trainStationUrl).then(function (response) {
                    $scope.isLoadingStation = true;
                    $scope.trainStations = response.data.results;
                    $scope.currentPage = response.data.current;
                    $scope.ItemTrainStationPerPage = response.data.options.perPage;
                    $scope.totalPages = response.data.last;
                    $scope.totalRecords = response.data.count;
                    $scope.isLoadingStation = false;

                }, function (errorResponse) {


                });


            }





        }

    }
}]);