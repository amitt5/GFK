'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      $scope.stringVal  = ""; 
      $scope.stringValTask1  = [];   
      $scope.task1Visible = false;
      $scope.task2Visible = false;
      $scope.task3Visible = false;
      $scope.task4Visible = false;



      $scope.task1 = function() {
        $scope.task1Visible = true;
        $scope.task2Visible = false;
        $scope.task3Visible = false;
        $scope.task4Visible = false;
        var strNum = " ";
        var isDirty = false;
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
          $scope.stringValTask1[i]  = strNum;
        }
      }////end of task 1

      $scope.task2 = function() {
        $scope.task1Visible = false;
        $scope.task2Visible = true;
        $scope.task3Visible = false;
        $scope.task4Visible = false;
        function Animal(voice){
        this.voice = voice
        }
        Animal.prototype.speak = function(){
          console.log(this.voice);
        }
        function Cat(name, voice){
          Animal.call(this,voice)
          this.name = name;
        }
        Cat.prototype = Object.create(Animal.prototype)
        Cat.prototype.constructor = Cat
        var fluff = new Cat('fluffy','meow');
        
        fluff.speak();
        console.log(fluff instanceof Cat)//returns True
        console.log(fluff instanceof Animal)//returns True
        //The class is Animal with method speak. Another class Cat extends the Animal class. 
        //The class Cat has an instance created as fluff whcih returns true for instanceof for both Cat and Animal
        //Also this instance can call the method speak of class Animal
      }////end of function Task 2
            
      $scope.task3 = function() {
        $scope.task1Visible = false;
        $scope.task2Visible = false;
        $scope.task3Visible = true;
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
      }////end of function Task 3


      $scope.task4 = function() {
        $scope.task1Visible = false;
        $scope.task2Visible = false;
        $scope.task3Visible = false;
        $scope.task4Visible = true;
        var first ="";
        var second ="";
        display("Retrieving text from links...");
        $.ajax({
          type: 'GET',
          url: "https://cdn.gfkdaphne.com/tests/async.php?a=1",
          dataType: "html",
          success: function (result) {
            first = result;
            $.ajax({
                type: 'GET',
                url: "https://cdn.gfkdaphne.com/tests/async.php?a=2",
                dataType: "html",
                success: function (response) {
                  second = response;
                  display(first + " " + second);
                }
            });     
          }
        });
        function display(message){
          $("#task4").html(message);
        } 
      } 
  }//end of constructor
}// end of class MainController

  var uniqueDates= [];
  var response= [];
 
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
                  scope.$apply(function () {
                    scope.fileReader = contents;
                    var rows = scope.fileReader.split("\n");
                    var numberOfRows = rows.length;
                    var csvArray = new Array(numberOfRows);
                    for (var i = 0; i < numberOfRows; i++) {
                       var columns = rows[i].split(";");
                     
                       //creating 2D array
                       var numberOfCoulumns = columns.length;
                        csvArray [i] = new Array(numberOfCoulumns);
                        for (var j = 0; j < numberOfCoulumns; j++) {
                          csvArray [i][j] = columns[j];
                        }
                    }
                    
                    //creating array with unique dates
                    for(var z = 1; z < numberOfRows; z++){
                      if (uniqueDates.indexOf(csvArray[z][0]) == -1) {
                        uniqueDates.push(csvArray[z][0]);
                      }   
                    } 
                    var numberOfDates = uniqueDates.length;
                    var yesCounter=[];
                    var totalRecordsInDateCounter=[]
                    var percentageArray=[]
                    for(var m = 0; m<numberOfDates; m++){//loops through each unique dare
                      yesCounter[m] = 0;
                      totalRecordsInDateCounter[m] = 0;
                      for(var z = 1; z < numberOfRows; z++){//loops through all the records in CSV
                        if (csvArray[z][0] == uniqueDates[m]){//match the date in unique dates with date of CSVif date matches then
                          if (csvArray[z][2] == csvArray[1][2]){//check if the response is yes
                          yesCounter[m] += 1;//update yes counter if response is yes
                          }
                        totalRecordsInDateCounter[m]++;//update the total counter in any case
                        }                
                      }
                      response[m] = yesCounter[m]*100/totalRecordsInDateCounter[m];//calculate the percentage of yes respnse for the given date
                    }                  
                  });
              };
              r.readAsText(files[0]);
            }
          });
        }
      };
    });
})();


