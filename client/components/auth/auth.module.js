'use strict';

angular.module('gfkApp.auth', ['gfkApp.constants', 'gfkApp.util', 'ngCookies', 'ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
