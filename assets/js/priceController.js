window.app.controller('PriceController', ($scope, $http) => {
	$scope.items = ['cabbage', 'umbrella', 'steam train'];

	$scope.add = function (){
   		$scope.items.push($scope.newItem);
	}
})