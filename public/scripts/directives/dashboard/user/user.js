'use strict';
angular.module('crewLinkApp')
  .directive('user', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/user.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http, toaster) {

         $scope.userdetails = {};
                $scope.blankuserdetails = {};
                $scope.usersList =[];
                 $scope.userdetails.isActive = false;
                $scope.images = "https://latimesherocomplex.files.wordpress.com/2030/04/hughjackman4.jpg";

                $scope.query = {
                    sortBy: 'userName',
                    limit: 10,
                    page: 1,
                    userName:"",
                    firstName:"",
                    lastName:"",
                    password:"",
                    email:"",
                    address:"",
                    city:"",
                    roleCode:"",
                    mobileNo:"",
                    userActive:""

                };

                
             

                $scope.getUserList = function () {
                   
                    $http.get(apiUrl+"/admin/users", { params: $scope.query })
                        .then(function (response) {
                            $scope.usersList = response.data.results;
                            $scope.currentPage = response.data.current;
                            $scope.perPage = response.data.options.perPage;
                            $scope.totalPages = response.data.last;
                            $scope.totalRecords = response.data.count;
                        });
                }
                $scope.getUserList();

                 $scope.goToUserPlans = function(){
		                $location.path('/dashboard/userPlan');
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

                $scope.getUserList();
            }, true);

              
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

                    $scope.getUserList();
                }, true);



               

                $scope.test = function () {
                    var nonDBFieldsArray = ['limit', 'page', 'order', 'sectionType'];
                    var numberFilterArray = ['stopNo', 'dayOfJourney', 'distance', 'startDay'];
                    var booleanFields = ['isLocoChange', 'markDelete'];
                    var dbArrayFields = ['passingStations'];

                    for (var query in nonDBFieldsArray) {

                        if (nonDBFieldsArray.indexOf(query) === -1) {
                           // console.log(nonDBFieldsArray[query]);
                        }

                    }
                }
                $scope.test();

               
                $scope.changeStatus = function () {
                   
                   $scope.userdetails.isActive = !$scope.userdetails.isActive;
                   angular.element(document.querySelector('[id="active"]')).addClass('animated bounceOutRight');
                   /* if(!$scope.userdetails.isActive){
                        $scope.userdetails.isActive = !$scope.userdetails.isActive;
                        angular.element(document.querySelector('[id="active"]')).addClass('animated bounceOutRight');
                    }if($scope.userdetails.isActive){
                        angular.element(document.querySelector('[id="active"]')).addClass('animated bounceOutLeft');
                    }
                    */
                }

     
      }
    }
  }]);
