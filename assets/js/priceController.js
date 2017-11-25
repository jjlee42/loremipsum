window.app.controller('PriceController', ($scope, $http) => {
	$scope.items = ['cabbage', 'umbrella', 'steam train'];

	$scope.add = function (){
   		$scope.items.push($scope.newItem);
	}
	var req = {
	 method: 'OPTIONS',
	 url: 'http://api.walmartlabs.com/v1/search?query=milk&format=json&apiKey=4xw4ftrc4fce5aep3duamcfu',
	 headers: {
	   'Access-Control-Allow-Origin': '*',
	   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	   'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
	   'Access-Control-Allow-Credentials': true
	 },
	 data: { test: 'test' }
	}

	$http(req).then((response) => {
		console.log(response)
	})

})