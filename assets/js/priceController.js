window.app.controller('PriceController', ($scope, $http) => {
	$scope.items = ['milk', 'granola', 'apples'];

	$scope.add = function (){
		console.log("fgh");
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

	$scope.RemoveItem = function(item) {
    		$scope.items.splice($scope.items.indexOf(item), 1);
  	};
})