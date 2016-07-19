'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      $scope.stringVal  = "";   


    $scope.task2 = function() {
      console.log("task2");
      
      $scope.chartTypes = [
        {"id": "line", "title": "Line"},
        {"id": "spline", "title": "Smooth line"},
        {"id": "area", "title": "Area"},
        {"id": "areaspline", "title": "Smooth area"},
        {"id": "column", "title": "Column"},
        {"id": "bar", "title": "Bar"},
        {"id": "pie", "title": "Pie"},
        {"id": "scatter", "title": "Scatter"}
      ];

      $scope.dashStyles = [
        {"id": "Solid", "title": "Solid"},
        {"id": "ShortDash", "title": "ShortDash"},
        {"id": "ShortDot", "title": "ShortDot"},
        {"id": "ShortDashDot", "title": "ShortDashDot"},
        {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
        {"id": "Dot", "title": "Dot"},
        {"id": "Dash", "title": "Dash"},
        {"id": "LongDash", "title": "LongDash"},
        {"id": "DashDot", "title": "DashDot"},
        {"id": "LongDashDot", "title": "LongDashDot"},
        {"id": "LongDashDotDot", "title": "LongDashDotDot"}
      ];

      $scope.chartSeries = [
        // {"name": "Some data 1", "data": [1, 2, 4, 7, 3]},
        // {"name": "Some data 2", "data": [3, 1, null, 5, 2], connectNulls: true},
        {"name": "Answer-Yes", "data": response},
        // {"name": "My Super Column", "data": [1, 3, 5, 7, 9]} node csv
        // {"name": "Some data 3", "data": [9, 7, 5, 3, 1], type: "column"},
        // {"name": "My Super Column", "data": [1, 3, 5, 7, 9], type: "column"}
      ];

      $scope.chartStack = [
        {"id": '', "title": "No"},
        {"id": "normal", "title": "Normal"},
        {"id": "percent", "title": "Percent"}
      ];

      
      $scope.chartConfig = {
        options: {
          chart: {
            type: 'line'//check this 
          },
          plotOptions: {
            series: {
              stacking: ''
            }
          }
        },
        series: $scope.chartSeries,//check this 
        xAxis: {
            categories: dates
            // categories: ['Date 1', 'Date 2', 'Date 3', 'Date 4', 'Date 5', 'Date 6', 'Date 7', 'Date 8', 'Date 9', 'Date 10']
          },
        yAxis: {
            title: {
                text: 'Percentage %'
            }
          },  
        title: {
          text: 'Hello world'
        },
        credits: {
          enabled: true
        },
        loading: false,
        size: {}
      }

      // $scope.reflow = function () {
      //   console.log("reflow");
      //   $scope.$broadcast('highchartsng.reflow');
      // };   


    }////end of function Task 2

    $scope.task3 = function() {

      


    }////end of task 3

    //   $scope.$on('$destroy', function() {
    //     socket.unsyncUpdates('thing');
    //   });

    //     $scope.task1 = function() {
          
    //     var strNum = " ";
    //     var isDirty = false;
    //     for (var i = 1; i<=100; i++){
    //       isDirty = false;
    //       if (i % 3 === 0){
    //         strNum += "Bizz";
    //         isDirty = true;
    //       }
    //       if (i % 5 === 0){
    //         strNum += "Appz";
    //         isDirty = true;
    //       }
    //       if (isDirty === false){
    //         strNum += i;
    //       }
    //       strNum += " ";
    //     }
    //     console.log(strNum);
    //     $scope.stringVal  = strNum;
    //   }  
    

    // // $scope.task2 = function() {
          
    // //     $http({
    // //       method: 'GET',
    // //       url: 'http://cdn.gfkdaphne.com/tests/async.php?a=1',
    // //       dataType: 'jsonp',
    // //       headers: {
    // //         'Content-type': 'text/html'
    // //       }
    // //     })
    // //     .then(function successCallback(response) {
    // //         console.log(response.data);
    // //         // this callback will be called asynchronously
    // //         // when the response is available
    // //     }, function errorCallback(response) {
    // //         // called asynchronously if an error occurs
    // //         // or server returns response with an error status.
    // //         });
    // //   }  
    // }

     // $scope.task4 = function() {
       
     //    highchartsNG.getHighcharts().then(function(Highcharts){
     //    // init chart config, see lazyload example
     //    });   
       
     //  }  
    
    }//end of     constructor($http, $scope, socket) {

  }// end of   class MainController {


  var dates_yes = [];

  var dates_no= [];
  var dates= [];
  var dates1= [];
  var ids= [];
  var response= [1,2,3,4,5,6,7,8,9,10,11,12];

  var numberOfRows;
  var numberOfCoulumns;

   
  angular.module('gfkApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    })
    .directive('fileReader', function() {
      console.log('hi then')
      return {
        scope: {
          fileReader:"="
        },
        link: function(scope, element) {
          $(element).on('change', function(changeEvent) {
            var files = changeEvent.target.files;
            console.log(files);
            if (files.length) {
              var r = new FileReader();
              r.onload = function(e) {
                  var contents = e.target.result;
                  // console.log('contents');
                  // console.log(contents);
                  scope.$apply(function () {
                    scope.fileReader = contents;
                    var rows = scope.fileReader.split("\n");
                    // console.log('rows');
                    numberOfRows = rows.length;
                    var MultiArray = new Array(numberOfRows);
                    for (var i = 0; i < numberOfRows; i++) {
                       // console.log(rows[i].split(";"));
                       var columns = rows[i].split(";");
                       // dates[i] = columns[0];
                       // ids[i] = columns[1];
                       // response[i] = columns[2];

                       numberOfCoulumns = columns.length;
                        MultiArray [i] = new Array(numberOfCoulumns);
                        for (var j = 0; j < numberOfCoulumns; j++) {
                          // console.log(row[j]);
                          MultiArray [i][j] = columns[j];
                        }


                       // if(row[2] == 'yes'){
                       //   console.log(row[2]);
                       //   if(dates_yes[row[0]] === undefined){
                       //      dates_yes[row[0]] = 1;
                       //   }
                       //   dates_yes[row[0]]++ ;
                       // }else{
                       //   if(dates_no[row[0]] === undefined){
                       //      dates_no[row[0]] = 1;
                       //   }                        
                       //   dates_no[row[0]]++;
                       // }

                    }
                    // create array with all the dates
                    var x = 0;
                    for(var k = 0; k < numberOfRows; k++){
                        dates1[k] = MultiArray [k][x]
                        // console.log(MultiArray [k][x]);
                    }
                   console.log("uniqudsdsdsde dates");
                    console.log(dates.indexOf(dates1[4]));
                    // console.log(dates1.indexOf(dates1[4]));
                    

                  
                    for(var z = 1; z < numberOfRows; z++){
                      if (dates.indexOf(dates1[z]) == -1) {
                        dates.push(dates1[z]);
                      }   
                            // console.log(MultiArray [k][x]);
                    } 

                   console.log("unique dates");
                   // console.log(dates);

                    // console.log("yes");
                    // console.log(dates_yes);
                    // console.log("no");

                    console.log(dates);

                    // console.log(scope.fileReader);
                  });
              };
              r.readAsText(files[0]);
            }
          });
        }
      };
  });
})();



// DATE;ID;ANSWER
//  01/01/13;1;yes
//  01/01/13;2;no
//  01/01/13;3;no
//  01/01/13;4;no
//  01/01/13;5;yes
//  01/01/13;6;yes
//  01/01/13;7;yes
//  01/01/13;8;yes
//  01/01/13;9;yes
//  01/01/13;10;yes
//  02/01/13;11;yes
//  02/01/13;12;yes
//  02/01/13;13;yes
//  02/01/13;14;no
//  02/01/13;15;no
//  02/01/13;16;no
//  02/01/13;17;no
//  02/01/13;18;yes
//  02/01/13;19;yes
//  02/01/13;20;yes
//  03/01/13;21;yes
//  03/01/13;22;yes
//  03/01/13;23;no
//  03/01/13;24;no
//  03/01/13;25;no
//  03/01/13;26;no
//  03/01/13;27;yes
//  03/01/13;28;yes
//  03/01/13;29;yes
//  03/01/13;30;yes
//  04/01/13;31;yes
//  04/01/13;32;no
//  04/01/13;33;yes
//  04/01/13;34;no
//  04/01/13;35;yes
//  04/01/13;36;no
//  04/01/13;37;yes
//  04/01/13;38;no
//  04/01/13;39;yes
//  04/01/13;40;no
//  04/01/13;41;yes
//  04/01/13;42;yes
//  04/01/13;43;no
//  04/01/13;44;yes
//  05/01/13;45;no
//  05/01/13;46;no
//  05/01/13;47;no
//  05/01/13;48;no
//  05/01/13;49;no
//  05/01/13;50;yes
//  05/01/13;51;yes
//  05/01/13;52;yes
//  06/01/13;53;yes
//  06/01/13;54;no
//  06/01/13;55;no
//  06/01/13;56;yes
//  06/01/13;57;yes
//  06/01/13;58;yes
//  06/01/13;59;yes
//  07/01/13;60;no
//  07/01/13;61;yes
//  07/01/13;62;yes
//  07/01/13;63;yes
//  07/01/13;64;yes
//  08/01/13;65;no
//  08/01/13;66;no
//  08/01/13;67;yes
//  08/01/13;68;yes
//  08/01/13;69;
//  08/01/13;70;yes
//  08/01/13;71;yes
//  08/01/13;72;yes
//  08/01/13;73;yes
//  09/01/13;74;yes
//  09/01/13;75;yes
//  09/01/13;76;no
//  09/01/13;77;yes
//  09/01/13;78;yes
//  09/01/13;79;yes
//  09/01/13;80;no
//  09/01/13;81;yes
//  09/01/13;82;
//  09/01/13;83;yes
//  09/01/13;84;yes
//  10/01/13;85;yes
//  10/01/13;86;yes
//  10/01/13;87;no
//  10/01/13;88;no
//  10/01/13;89;yes
//  11/01/13;90;yes
//  11/01/13;91;yes
//  11/01/13;92;no
//  11/01/13;93;no
//  12/01/13;94;yes
//  12/01/13;95;yes
//  12/01/13;96;yes
//  12/01/13;97;no
//  12/01/13;98;no
//  12/01/13;99;yes
//  12/01/13;100;yes
