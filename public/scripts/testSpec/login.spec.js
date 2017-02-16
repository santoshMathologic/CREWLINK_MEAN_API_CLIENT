describe("loginCtrl", function() {
    var MyController,
        position,
        http,
        state,
        window,
        toaster,
        AuthenticationFactory,
        scope;
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        MyController = $controller("loginCtrl", {
            $scope: scope,
            $position : position, 
            $http : http,
            $state : state, 
            $window :window
          
        });
    }));
    
    
});