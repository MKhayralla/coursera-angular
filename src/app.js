(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];
  function LunchCheckController($scope){
    $scope.tooMuch = '' ;
    $scope.itemsString = "" ;
    $scope.check = function (){
      var array = [];
      if ($scope.itemsString=="") {
        $scope.tooMuch="Please enter data first";
        return ;
      }
      else {
        array = $scope.itemsString.split(',');
        if (array.length>3) {
          $scope.tooMuch = "Hey man !! That's too much !" ;
        }
        else {
          $scope.tooMuch = 'Enjoy!' ;
        }
      }

    }
  }
})()
