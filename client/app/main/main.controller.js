'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      $scope.stringVal  = ""; 
      $scope.stringVal1  = [];   
      $scope.task1Visible = false;
      $scope.task2Visible = false;
      $scope.task3Visible = false;
      $scope.task4Visible = false;


    $scope.task2 = function() {
      $scope.task1Visible = false;
      $scope.task2Visible = true;
      $scope.task3Visible = false;
      $scope.task4Visible = false;
      
     
      $scope.chartSeries = [
        {"name": "Answer-Yes", "data": response},
      ];

      
      $scope.chartConfig = {
        options: {
          chart: {
            type: 'line'
          },
          plotOptions: {
            series: {
              stacking: ''
            }
          }
        },
        series: $scope.chartSeries,
        xAxis: {
            categories: uniqueDates
          },
        yAxis: {
            title: {
                text: 'Percentage %'
            }
          },  
        title: {
          text: 'GFK Chart'
        },
        credits: {
          enabled: true
        },
        loading: false,
        size: {}
      }



    }////end of function Task 2

    $scope.task1 = function() {
      $scope.task1Visible = true;
      $scope.task2Visible = false;
      $scope.task3Visible = false;
      $scope.task4Visible = false;
      var strNum = " ";
      var isDirty = false;
      // var stringVal1 = []
      for (var i = 1; i<=100; i++){
        strNum = "";
        isDirty = false;
        if (i % 3 === 0){
          strNum += "Bizz";
          isDirty = true;
        }
        if (i % 5 === 0){
          strNum += "Appz";
          isDirty = true;
        }
        if (isDirty === false){
          strNum += i;
        }
        strNum += " ";
        $scope.stringVal1[i]  = strNum;
      }
      console.log('stringVal1');
      console.log($scope.stringVal1);

    }////end of task 1


    // $scope.task1 = function() {
    //   $scope.task1Visible = true;
    //   $scope.task2Visible = false;
    //   $scope.task3Visible = false;
    //   $scope.task4Visible = false;
      
    //   var strNum = " ";
    //   var isDirty = false;
    //   for (var i = 1; i<=100; i++){
    //     isDirty = false;
    //     if (i % 3 === 0){
    //       strNum += "Bizz";
    //       isDirty = true;
    //     }
    //     if (i % 5 === 0){
    //       strNum += "Appz";
    //       isDirty = true;
    //     }
    //     if (isDirty === false){
    //       strNum += i;
    //     }
    //     strNum += " ";
    //   }
    //   console.log(strNum);
    //   $scope.stringVal  = strNum;
    // }////end of task 1


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

  var uniqueDates= [];
  var dates1= [];
  var ids= [];
  var response= [1,2,3,4,5,6,7,8,9,10,11,12];

  var numberOfRows;
  var numberOfCoulumns;
  var numberOfDates;

   
  angular.module('gfkApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    })
    .directive('fileReader', function() {
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

                       //creating 2D array
                       numberOfCoulumns = columns.length;
                        MultiArray [i] = new Array(numberOfCoulumns);
                        for (var j = 0; j < numberOfCoulumns; j++) {
                          // console.log(row[j]);
                          MultiArray [i][j] = columns[j];
                        }


                    }
                    // create array with all the dates
                    // var x = 0;
                    // for(var k = 0; k < numberOfRows; k++){
                    //     dates1[k] = MultiArray [k][x];
                    //     console.log("dates1");
                    //     console.log(dates1);
                    //     // console.log(MultiArray [k][x]);
                    // }

                    //creating array with unique dates
                    for(var z = 1; z < numberOfRows; z++){
                      if (uniqueDates.indexOf(MultiArray[z][0]) == -1) {
                        uniqueDates.push(MultiArray[z][0]);
                      }   
                    } 
                    numberOfDates = uniqueDates.length;

                    var yesCounter=[];
                    var totalRecordsInDateCounter=[]
                    var percentageArray=[]
                    for(var m = 0; m<numberOfDates; m++){
                      yesCounter[m] = 0;
                      totalRecordsInDateCounter[m] = 0;
                      for(var z = 1; z < numberOfRows; z++){
                        
                        // console.log("array dates");
                        // console.log(MultiArray[z][0]);
                        // console.log("unique dates");
                        // console.log(uniqueDates[m]);
                        // console.log(MultiArray[z][0] == uniqueDates[m]);
                        if (MultiArray[z][0] == uniqueDates[m]){
                          // console.log("inside first if");
                          // console.log(z);
                          // console.log(m);
                          // console.log(MultiArray[z][2]);

                          if (MultiArray[z][2] == MultiArray[1][2]){
                          // console.log("inside second if");
                          // console.log(z);
                          // console.log(m);                            
                          yesCounter[m] += 1;
                          // console.log("yescounter" + yesCounter[m]);

                          }
                        totalRecordsInDateCounter[m]++;
  
                        }                

                      }
                        percentageArray[m] = yesCounter[m]*100/totalRecordsInDateCounter[m];

                    }
                    // console.log("yesCounter");
                    // console.log(yesCounter);
                    // console.log(percentageArray);




                    // for(var z = 1; z < numberOfRows; z++){
                    //   if (dates.indexOf(dates1[z]) == -1) {
                    //     dates.push(dates1[z]);
                    //   }   
                    //         // console.log(MultiArray [k][x]);
                    // } 

                    // console.log("unique dates");
                    // console.log(uniqueDates);

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


