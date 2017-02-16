var app = angular.module('crewLinkApp');
app.directive('userInfo', ['$compile', '$timeout', '$window', function ($compile, $window, $timeout) {
    return {
        restrict: 'E',
        // template: "<div> <h1> User :  Password : </h1></div>",
        template: function (element, attrs) {
            return '<input type="text" class="form-control input-sm" ng-model="inputPage" ng-change="selectPage(inputPage)" / >';
        },
        replace: true,
        scope: {
            numbers: "@",
            maxwidth:"="
        },
        
        link: function (scope, elem, attr) {
              var ratio=+(attr.maxwidth);
            elem.css("background-color", "white");
            elem.css("color", "black");
            elem.css("width", ratio+"%");
            elem.css("border-radius", "0px");
            
            
            
        },
        controller: function ($scope, $state, $window, $log, $q, $anchorScroll, $timeout, $location, $http, toaster) {

         
console.log($scope.numbers);
console.log($scope.maxwidth);

$scope.$watch('inputPage',function(c){
    if($scope.inputPage!=c){
        console.log(c);
    }

});


        }
    }

}]);