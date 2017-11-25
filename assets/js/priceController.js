window.app.controller('PriceController', ($scope, $http) => {
	$scope.items = [];

	$scope.add = function (){
   		$scope.items.push($scope.newItem);
	}

	var groceries = {};

	$scope.showSuggestions = function (){
   		$http.get('stores.json').then((response) => {
		groceries = response;
		$scope.finalItems = []; 

		console.log(groceries)
		for (var item in $scope.items) {
			var tesco 		= groceries.data.Tesco[item].price
			var sainsburys 	= groceries.data.Sainsburys[item].price
			var waitrose 	= groceries.data.Waitrose[item].price

			if(tesco < sainsburys && tesco < waitrose) {
				$scope.finalItems.push({name: groceries.data.Tesco[item].name, 'store': 'Tesco', price: tesco})
			}

			else if(sainsburys < tesco && sainsburys < waitrose) {
				$scope.finalItems.push({name: groceries.data.Sainsburys[item].name, 'store': 'Sainsburys', price: sainsburys})
			}

			else {
				$scope.finalItems.push({name: groceries.data.Waitrose[item].name, 'store': 'Waitrose', price: waitrose})
			}

		}
	})
	}


})