(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
    $scope.items = '';
    $scope.check = function () {
      let txt = $scope.items;
      let txtArr = txt.split(',');
      for (let i = 0; i < txtArr.length; i++ ) {
        if (txtArr[i].trim() === '' ) {//check if any item is empty
          $scope.name = 'Please enter data first';
          return;
        }
      }
      if (txtArr.length >= 1 && txtArr.length <= 3) {//Enjoy!
        $scope.name = 'Enjoy!';
      } else {//too much
        $scope.name = 'Too much!';
      }
    }
  }
})();