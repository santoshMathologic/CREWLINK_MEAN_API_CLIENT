describe("calculatorCtrl", function() {
    var MyController,
        scope;
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        MyController = $controller("calculatorCtrl", {
            $scope: scope,
           

        });
    }));
 
    it("should close window when function called", function() {
       
            scope.x = 1;
			scope.y = 2;
			scope.sum();
			expect(scope.z).toBe(3);
       
    });
});