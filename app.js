(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject= ['$scope'];
function LunchCheckController ($scope){
	$scope.dishesList= '';
	$scope.validationMessage='';
	$scope.check=false;

$scope.checkLunch = function () {

if ($scope.dishesList.trim().length === 0) {
        $scope.isEmpty = true;
    } else {
        $scope.checked = true;
        $scope.isEmpty = false;
        var dishesListArray = $scope.dishesList.split(',');
        if (dishesListArray.length <= 3) {
            $scope.validationMessage = 'Enjoy!';
        } else {
            $scope.validationMessage = 'Too much!';
        }
    }

};
		
}
})();
