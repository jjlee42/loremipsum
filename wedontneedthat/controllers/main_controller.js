window.app = angular.module("Rob", [])

window.app.controller("Test", ($scope, $http, $rootScope) => {
  // $scope.config = {
  // 
  console.log("????")
  $scope.test = () => {console.log("It workds")}
  $scope.test();
})