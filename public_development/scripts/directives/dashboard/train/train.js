' use strict';
angular.module('crewLinkApp')
  .directive('train', ['$compile', function () {
    return {
      templateUrl: 'views/dashboard/train.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, $rootScope, _, $state, $window, $log, $location, $http) {



        $scope.trainsList = [];
        $scope.filtertrainList = [];
        $scope.Days = Days;
        $scope.isLoading = true;
        var summary = [];

   /*   $('.fade-down').hover(function(){
        $(this).transition('fade');
    }, function(){});
*/
        // $scope.currentPage = 1;

        $scope.query = {
          order: 'train_No',
          limit: 10,
          page: 1,
          train_No: "",
          train_name: "",


        };
        _.each([1, 2, 3], console.log);

        var apiTrain = "http://localhost:4000/api/v1/gettraindetails";

        $scope.getTrainList = function () {
          $scope.isLoading = true;
          $http.get(apiTrain, { params: $scope.query })
            .then(function (response) {
              $scope.trainsList = response.data.results;

              for (var i = 0; i < $scope.trainsList.length; i++) {
                summary.push([$scope.trainsList[i].train_No]);

              }

              $scope.currentPage = response.data.current;
              $scope.perPage = response.data.options.perPage;
              $scope.totalPages = response.data.last;
              $scope.totalRecords = response.data.count;

              $scope.isLoading = false;
            });
        }


        $scope.getTrainList();

        
        $scope.generateArray = function (obj) {
          var result = [];
          for (var i = 0; i < Object.keys(obj).length; i++) {
            for (var item in obj) {

              if (obj.hasOwnProperty(item)) {
                Object.keys(obj).forEach(function (key) {
                  
                });

                var itemObj = { key: obj[item], val: i };
                result.push(itemObj);
              }

            }
          }
          return result;
        }

        $scope.getCrewLinkCSVHeader = function () {
          return ["S.No.",
            "Train No", "Train Name",
            "No of Days",
            "Originating days",
            "Train Type",
            "Source", "Destination",
            "Has Driving Section",
            "Is User Selected"];
        }
        $scope.getCSVDataRows = function (resultObj) {

          var cols = $scope.generateArray(resultObj);
          var rowLen = resultObj.data.length, colLen = cols.length;
          var resultArr = [];
          for (var i = 0; i < rowLen; i++) {
            var rowData = [];
            for (var j = 0; j < colLen; j++) {
              if (resultObj.data[i][j] != null) {
                rowData.push(resultObj.data[i][j] + "");
              }
              else {
                rowData.push("");
              }
            }
            resultArr.push(rowData);
          }
          return resultArr;


        }
        $scope.getCSVHeaders = function () {
          var arr = $scope.generateArray(resultObj);
          var result = [];
          for (var i = 0; i < arr.length; i++) {
            result.push(arr[i].key);
          }
          return result;



        }



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

          $scope.getTrainList();
        }, true);

        $scope.changeTrainFromUser = function (train) {
          console.log("" + train);

        }

        $scope.$watch('currentPage', function (c) {
          if ($scope.inputPage != c) {
        		  $scope.inputPage = c;
        		  $scope.currentPage = c;
          }
        });


        $scope.$watch('inputPage', function (c) {
          if ($scope.inputPage <= $scope.totalPages && $scope.inputPage >= 1)
    		      $scope.query.page = $scope.inputPage;
          $scope.getTrainList();
        });

        $scope.selectPage = function (page) {
          console.log(page);
          $scope.query.page = $scope.inputPage = page;
          $scope.getTrainList();
        }



        ///////  Test UnderScore.js


        var docDefinition = {
          pageSize: 'A4',

          // by default we use portrait, you can change it to landscape if you wish
          pageOrientation: 'landscape',

          // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
          pageMargins: [5, 5, 5, 5],
          content: [
            {
              text: 'Train List'
            },
            {
              style: 'demoTable',
              table: {
                widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                body: [
                  [
                    { text: 'S.No.', style: 'header' },
                    //{ text: 'Train No', style: 'header' },
                    //{ text: 'Train Name', style: 'header' },
                    //{ text: 'No of Days', style: 'header' },
                    //{ text: 'Originating days', style: 'header' },
                    //{ text: 'Train Type', style: 'header' },
                    //{ text: 'Source', style: 'header' },
                    //{ text: 'Destination', style: 'header' },
                    //{ text: 'Has Driving Section', style: 'header' },
                    //{ text: 'IsUserSelect', style: 'header' },
                  ],

                  // ['Apple', '100 grams', '52', 'Apple', '100 grams', '52', 'Apple', '100 grams', '52', '54'],
                  //['Apple', '100 grams', '52', 'Apple', '100 grams', '52', 'Apple', '100 grams', '52', '54']

                  // summary
                  summary

                ]
              }
            }
          ],
          styles: {
            header: {
              bold: true,
              color: '#000',
              fontSize: 11
            },
            demoTable: {
              color: '#',
              fontSize: 10
            }
          }
        };


        $scope.openPdf = function () {
          pdfMake.createPdf(docDefinition).open();
        };

        $scope.downloadPdf = function () {
          pdfMake.createPdf(docDefinition).download('sample.pdf');
        };


        $scope.testUnderScore = function () {
          var from = {
            day: 5,
            time: "15:55:00"
          };
          var to = {
            day: 3,
            time: "20:55:00"
          };

          var mresult = differenceTimeObject(from, to, "min");
          var dresult = differenceTimeObject(from, to, "day");
          var hours = differenceTimeObject(from, to, "hours");
          var seconds = differenceTimeObject(from, to, "seconds");

          var timetomin = timeToMinuts("15:45");
          console.log(timetomin);

          var res = calculateDiffBetweenTwoTimes("7:30", 3, "15:45", 5);
          console.log(res);

          console.log("" + minutestoHour(945));
          console.log("" + minutesToTimeFormat(945));

          console.log("" + diffBetweenTwoTimes("7:30", 3, "15:45", 5));

          console.log("" + diffTwoTimesWithoutDay("7:30", "15:45"));

          $scope.date = new moment();
          console.log($scope.date);



          //for (var i = 0; i < _.size($scope.trainsList); i++) {
          //$log.info("trainNo ".capitalizeFirstLetter() + $scope.trainsList[i].train_No + " Days".subsidizeFirstLetter());
          //}

        }
        $scope.testUnderScore();

      }
    };
  }]);
