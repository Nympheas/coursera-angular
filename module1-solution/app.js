(funtion () {
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController("$scope") {
		var message = "";
		$scope.check = function () {
			if ($scope.items != NULL) {
				var items = $scope.items.split(,)
				if (items.length <= 3) {
					message = "Enjoy!";
				} else {
					message = "Too much!";
				}
			} else {
				message = "Please enter data first";
			}
		}
		
	}

})();