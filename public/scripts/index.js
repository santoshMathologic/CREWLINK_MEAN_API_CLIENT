' use strict';
var api = {
  protocol: 'http',
  server: 'localhost',
  port: 4000,
  baseUrl: '/api/v1',
  loginUrl: '/login',
  registerUrl: '/register',

};

var apiUrl = api.protocol + '://' + api.server + ':' + api.port + api.baseUrl;
var apiLoginUrl = api.protocol + '://' + api.server + ':' + api.port + api.loginUrl;
var apiRegisterUrl = api.protocol + '://' + api.server + ':' + api.port + api.registerUrl;
var initInjector = angular.injector(['ng']);
var $http = initInjector.get('$http');

//var $injector= angular.injector(['ng','ngMock']);
//var $location = $injector.get("$location");
//  var $http = $injector.get('$http');
angular
  .module('crewLinkApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'toaster',
    'ngRoute',
    'angucomplete-alt',
    'angular-confirm',
    'ngFileUpload',
    'ngResource',
    'ngMessages',
    'AxelSoft',
    'ngSanitize',
    'ngCsv',
    'elasticsearch',
    'underscore',
    'smart-table',
    'ngCookies',
    'angular-clipboard'
   
    
    //'ionic'
  ])
  .config(['$routeProvider', '$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($routeProvider, $stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug: false,
      events: true,
    });


    //
    $urlRouterProvider.otherwise('/dashboard/home');



    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
          loadMyDirectives: function ($ocLazyLoad) {
            return $ocLazyLoad.load(
              {
                name: 'crewLinkApp',
                files: [
                  'scripts/directives/header/header.js',
                  'scripts/directives/header/header-notification/header-notification.js',
                  'scripts/directives/sidebar/sidebar.js',
                  'scripts/directives/sidebar/sidebar-search/sidebar-search.js',
                  'scripts/service/userService.js'
                ]
              }),
              $ocLazyLoad.load(
                {
                  name: 'toggle-switch',
                  files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                    "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                  ]
                }),
              $ocLazyLoad.load(
                {
                  name: 'ngAnimate',
                  files: ['bower_components/angular-animate/angular-animate.js']
                }),
          
            $ocLazyLoad.load(
              {
                name: 'ngResource',
                files: ['bower_components/angular-resource/angular-resource.js']
              }),
            $ocLazyLoad.load(
              {
                name: 'ngSanitize',
                files: ['bower_components/angular-sanitize/angular-sanitize.js']
              }),
            $ocLazyLoad.load(
              {
                name: 'ngTouch',
                files: ['bower_components/angular-touch/angular-touch.js']
              });
          }
        }
      })

      .state('dashboard.home', {
        url: '/home',
        controller: 'MainCtrl',
        templateUrl: 'views/dashboard/home.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [   
                'scripts/controllers/main.js',
                'scripts/directives/timeline/timeline.js',
                'scripts/directives/notifications/notifications.js',
                'scripts/directives/chat/chat.js',
                'scripts/util/serverFetch.js',
                'scripts/directives/dashboard/stats/stats.js',
                
              ]
            });
          }
        }
      })
      .state('dashboard.userPlan', {
        url: '/userPlan',
        controller: 'userPlanCtrl',
        templateUrl: 'scripts/directives/dashboard/userPlan/userPlan.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/userPlan.js',
                'scripts/directives/dashboard/UserPlan/userPlan.js',
               // 'scripts/service/userService.js',
              ]
            })
          }
        }
      })
      .state('dashboard.user', {
        url: '/user',
        controller: 'userCtrl',
        templateUrl: 'scripts/directives/dashboard/user/user.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/user.js',
                'scripts/directives/dashboard/user/user.js',
              ]
            })
          }
        }
      }).state('dashboard.station', {
        url: '/station',
        controller: 'stationCtrl',
        templateUrl: 'scripts/directives/dashboard/station/station.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/station.js',
                'scripts/util/serverFetch.js',
                'scripts/directives/dashboard/station/station.js',
              ]
            })
          }
        }
      })
      .state('dashboard.division', {
        url: '/division',
        controller: 'divisionCtrl',
        templateUrl: 'scripts/directives/dashboard/division/division.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/division.js',
                'scripts/directives/dashboard/division/division.js',
              ]
            })
          }
        }
      })
      .state('dashboard.drivingDuty', {
        url: '/duty',
        controller: 'drivingDutyCtrl',
        templateUrl: 'scripts/directives/dashboard/drivingDuty/drivingDuty.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/drivingDuty.js',
                'scripts/directives/dashboard/drivingDuty/drivingDuty.js',
              ]
            })
          }
        }
      }).state('dashboard.drivingSection', {
        url: '/drivingsection/:trainNo/:startDay',
        controller: 'drivingSectionCtrl',
        templateUrl: 'scripts/directives/dashboard/drivingSection/createDrivingSection/drivingSection.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/drivingSection.js',
                'scripts/directives/dashboard/drivingSection/createDrivingSection/drivingSection.js',
              ]
            })
          }
        }
      })
      .state('dashboard.listofDrivingSections', {
        url: '/listofSection',
        controller: 'listDrivingSectionCtrl',
        templateUrl: 'scripts/directives/dashboard/drivingSection/ListofDrivingSection/listDrivingSection.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/listDrivingSection.js',
                'scripts/directives/dashboard/drivingSection/ListofDrivingSection/listdrivingSection.js',
              ]
            })
          }
        }
      })


      .state('dashboard.trainType', {
        url: '/type',
        controller: 'trainTypeCtrl',
        templateUrl: 'scripts/directives/dashboard/trainType/trainType.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/trainType.js',
                'scripts/directives/dashboard/trainType/trainType.js',
              ]
            })
          }
        }
      })
      .state('dashboard.salary', {
        url: '/salary',
        controller: 'salaryCtrl',
        templateUrl: 'scripts/directives/dashboard/salary/salary.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/salary.js',
                'scripts/directives/dashboard/salary/salary.js',
              ]
            })
          }
        }
      })
       .state('dashboard.createSalary', {
        url: '/createSalary',
        templateUrl: 'scripts/directives/dashboard/salary/createSalary/createSalary.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                
                'scripts/directives/dashboard/salary/createSalary/createSalary.js',
              ]
            })
          }
        }
      })
      .state('dashboard.upload', {
        url: '/upload',
        controller: 'uploadCtrl',
        templateUrl: 'scripts/directives/dashboard/Upload/upload.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/upload.js',
                'scripts/service/uploadService.js',
                'scripts/directives/dashboard/Upload/upload.js',
              ]
            })
          }
        }
      })
      .state('dashboard.crewType', {
        url: '/crewType',
        controller: 'crewTypeCtrl',
        templateUrl: 'scripts/directives/dashboard/crewType/crewType.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/crewType.js',
                'scripts/directives/dashboard/crewType/crewType.js',
                'scripts/util/table-width.js',

              ]
            })
          }
        }
      })
      .state('dashboard.train', {
        url: '/train',
        controller: 'trainCtrl',
        templateUrl: 'scripts/directives/dashboard/train/train.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/train.js',
                'scripts/directives/dashboard/train/train.js',
                 'scripts/util/customSearch.js',
                 'scripts/util/timeCalculation.js',
                  'scripts/directives/pagination/pagination.js',
                
              ]
            })
          }
        }
      }).state('dashboard.trainTimeTable', {
        url: '/trainTimeTable/:trainNo',
        controller: 'TrainTimeTableCtrl',
        templateUrl: 'scripts/directives/dashboard/trainTimeTable/trainTimeTable.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/directives/dashboard/trainTimeTable/trainTimeTable.js',
                'scripts/controllers/trainTimeTable.js'
              ]
            })
          }
        }
      })
      .state('dashboard.crewblank', {
        url: '/crewblank',
        controller: 'blankCtrl',
        templateUrl: 'scripts/directives/dashboard/blank/blank.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/blank.js',
                'scripts/directives/dashboard/blank/blank.js',
                'scripts/directives/dashboard/blank/userInfo.js',
                // 'scripts/factory/esFactory.js',
                // 'scripts/service/elasticSearch.js',


              ]
            })
          }
        }
      }).state('dashboard.registration', {
        url: '/register',
        controller: 'registrationCtrl',
        templateUrl: 'scripts/directives/dashboard/registration/registration.directive.html',
        resolve: {
          loadMyFiles: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'crewLinkApp',
              files: [
                'scripts/controllers/registration.js',
                'scripts/directives/dashboard/registration/registration.js',
                'scripts/directives/dashboard/registration/passwordValidator.js'
                

              ]
            })
          }
        }
      })
      .state('dashboard.form', {
        templateUrl: 'views/form.html',
        url: '/form'
      })
      .state('dashboard.blank', {
        templateUrl: 'views/pages/blank.html',
        url: '/blank'
      })
      .state('dashboard.chart', {
        templateUrl: 'views/chart.html',
        url: '/chart',
        controller: 'ChartCtrl',
        resolve: {
          loadMyFile: function ($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'chart.js',
              files: [
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
              $ocLazyLoad.load({
                name: 'crewLinkApp',
                files: ['scripts/controllers/chartContoller.js']
              })
          }
        }
      })
      .state('dashboard.table', {
        templateUrl: 'views/table.html',
        url: '/table'
      })
      .state('dashboard.panels-wells', {
        templateUrl: 'views/ui-elements/panels-wells.html',
        url: '/panels-wells'
      })
      .state('dashboard.buttons', {
        templateUrl: 'views/ui-elements/buttons.html',
        url: '/buttons'
      })
      .state('dashboard.notifications', {
        templateUrl: 'views/ui-elements/notifications.html',
        url: '/notifications'
      })
      .state('dashboard.typography', {
        templateUrl: 'views/ui-elements/typography.html',
        url: '/typography'
      })
      .state('dashboard.icons', {
        templateUrl: 'views/ui-elements/icons.html',
        url: '/icons'
      })
      .state('dashboard.grid', {
        templateUrl: 'views/ui-elements/grid.html',
        url: '/grid'
      })
  }]);


