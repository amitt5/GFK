'use strict';

angular.module('gfkApp', ['gfkApp.auth', 'gfkApp.admin', 'gfkApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'ui.bootstrap','highcharts-ng', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
