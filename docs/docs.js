'use strict';

var docApp = angular.module('docApp', [
    'ngRoute'
]);

docApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'content/getting_started.html',
                controller: 'DocumentationCtrl'
            }).
            when('/apis', {
                templateUrl: 'content/apis.html',
                controller: 'DocumentationCtrl'
            }).
            otherwise({
                redirectTo: 'getting_started'
            });
    }]);

docApp.controller('DocumentationCtrl', function () {
    console.info("Starting app");
});