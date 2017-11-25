window.app.controller('PriceController', ($scope, $http) => {
	$scope.items = ['cabbage', 'umbrella', 'steam train'];

	$scope.add = function (){
   		$scope.items.push($scope.newItem);
	}

	var items = {
		'Tesco':
			[{ name: 'Milk', 	price: '3.42' },
			 { name: 'Bread', 	price: '6.73' },
			 { name: 'Eggs', 	price: '0.06' },
			 { name: 'Cereal', 	price: '8.36' },
			 { name: 'Beer', 	price: '7.70' },
			 { name: 'Banana', 	price: '4.26' },
			 { name: 'Apple',	price: '4.32' },
			 { name: 'Pizza',	price: '7.77' },
			 { name: 'Pepsi', 	price: '0.63' }]

	}

	for (var item in items.Tesco) {
		console.log(items.Tesco[item].price)
	}

})