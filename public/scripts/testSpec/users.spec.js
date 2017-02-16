var OfficerValidationServices;

  // Before each test load our api.users module
  beforeEach(angular.mock.module('crewLinkApp'));

  // Before each test set our injected Users factory (_Users_) to our local Users variable
  beforeEach(inject(function(_OfficerValidationService_) {
    OfficerValidationServices = _OfficerValidationService_;
  }));

  // A simple test to verify the Users factory exists
  it('OfficerValidationServices should exist', function() {
    expect(OfficerValidationServices).toBeDefined();
  });

  it('is very true', function(){
      var output = OfficerValidationServices.checkStatus();
      expect(output).toBeTruthy();
    });

    it('return values should be match with', function(){
      var op = OfficerValidationServices.displayName();
      expect(op).toMatch("santosh");
    });

    