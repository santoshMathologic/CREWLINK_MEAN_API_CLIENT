' use strict';
angular.module('crewLinkApp')
  .directive('userPlan', ['$location', function () {
    return {
      templateUrl: 'views/dashboard/userPlan.tmpl.html',
      restrict: 'E',
      replace: true,
      scope: {
      },
      controller: function ($scope, $state, $http, toaster, $confirm, $window, UserService) {


        $scope.options = {};
        $scope.selectedUser = [];
        $scope.planObject = {};
        $scope.blankObject = {};
        $scope.userPlanList = [];
        $scope.selectedUserPlan = [];
        $scope.UserService = UserService;
        $scope.query = {
          sortBy: 'planName',
          limit: 10,
          page: 1,
          planName: "",
          reviewer: "",
          owner: "",
          coplanner: ""

        };




        $scope.getUserPlanList = function () {
          $http.get("/api/v1/userPlans", { params: $scope.query })
            .then(function (response) {
              $scope.userPlanList = response.data.results;

              for (var n = 0; n < $scope.userPlanList.length; n++) {
                $scope.userPlanList[n].isSelected = false; // adding new filed isSelect with false value 
              }

              $scope.currentPage = response.data.current;
              $scope.perPage = response.data.options.perPage;
              $scope.totalPages = response.data.last;
              $scope.totalRecords = response.data.count;
            });
        }


        $scope.getUserPlanList();

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

          $scope.getUserPlanList();
        }, true);


        $scope.savePlan = function () {

          if($scope.userPlanList.length>9){

            toaster
									.pop({
										type : 'error',
										title : 'Error',
										body : 'You can add more than 10 User Plans . Please delete existing user plan to add new one'
									});
          }else{
             $http.post("/api/v1/userPlans/savePlan", $scope.planObject).then(function (response) {
            if (response.data.status == 200) {
              $scope.planObject = angular.copy($scope.blankObject);
              toaster
                .pop({
                  type: 'success',
                  title: 'Plan saved Succcessfully',
                  body: 'Plan saved Succcessfully.'
                });
            }
          }, function (error) {
          })

          }
         
        }

        $scope.findCoPlanner = function (userplan) {
          $scope.co = [];
          angular.forEach($scope.userPlanList, function (response) {
            if (response == userplan) {
              $scope.co.push(response);
            }

          });

        }

        $scope.removeUserPlan = function (plan) {
          $confirm(
            {
              text: "Are you sure you want to delete" + plan.planName + "!!!!!",
              headerClass: 'confirm-header-danger',
              footerClass: 'confirm-footer-default',
              okButtonClass: "btn-danger"
            }).then(function (successResponse) {
              var index = $scope.userPlanList.indexOf(plan);
              $scope.userPlanList.splice(index, 1);
              toaster
                .pop({
                  type: 'success',
                  title: 'Plan Deleted Successfully',
                  body: 'Plan Deleted Successfully'
                });

            }, function (errorResponse) {


            });
        }

        $scope.getUsers = function (searchquery, timeout) {
          return $http.get("/api/v1/admin/users/searchUser/" + searchquery);

        }

        $scope.userSelected = function (selectedObjUser) {
          if (selectedObjUser) {
            $scope.selectedUser.push({ name: selectedObjUser.title });
            console.log("" + $scope.selectedUser);
          }
        }


        $scope.selectUserPlan = function (userPlan) {
          UserService.setSelectedUserPlan(userPlan);
          $state.go('dashboard.user');
        }


        /////  Merge Plan

        $scope.salarieslist = [];
        $scope.query1 = {
          sortBy: "employeeName",
          limit: 50,
          page: 1,
        }
        $scope.getSalary = function () {
          $scope.isLoading = true;
          $http.get("/api/v1/salary", { params: $scope.query1 }).then(function (response) {
            $scope.salarieslist = response.data.results;
            $scope.currentPage = response.data.current;
            $scope.perPage = response.data.options.perPage;
            $scope.totalPages = response.data.last;
            $scope.totalRecords = response.data.count;
            $scope.isLoading = false;


          }, function (error) {


          });

        }
        $scope.getSalary();

        $scope.openModal=function(){

          

          if ($scope.userPlanList) {
             for(var i=0;i<$scope.userPlanList.length;i++){
                 if($scope.userPlanList[i].isSelected===true){
                   
                   $scope.selectedUserPlan.push($scope.userPlanList[i]);
                   console.log($scope.selectedUserPlan.length);
                 }
             }
          //  $('#addNewEpisodeModal').modal('show');

          }
        }





      }
    };
  }]);
