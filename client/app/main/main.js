'use strict';

angular.module('gfkApp')
  .config(function($routeProvider, highchartsNGProvider) {
  	highchartsNGProvider.lazyLoad();
  	// highchartsNGProvider.lazyLoad([highchartsNGProvider.HIGHCHART/HIGHSTOCK, "maps/modules/map.js", "mapdata/custom/world.js"]);// you may add any additional modules and they will be loaded in the same sequence
   //  highchartsNGProvider.basePath("/js/"); // change base path for scripts, default is http(s)://code.highcharts.com/

    $routeProvider.when('/', {
      template: '<main></main>'
    });
  });
