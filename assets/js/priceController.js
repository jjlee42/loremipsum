window.app.controller('PriceController', ($scope, $http) => {
	$scope.items = ['cabbage', 'umbrella', 'steam train'];

	$scope.add = function (){
   		$scope.items.push($scope.newItem);
	}

	var items = {};

	$http.get('stores.json').then((response) => {
		items = response; 
		console.log(items)
	})


	for (var item in items.Tesco) {
		console.log(items.Tesco[item].price)
	}

})