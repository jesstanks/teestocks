var app = angular.module('instantsearch',[]);
 
app.controller('instantSearchCtrl',function($scope,$http){
	var url = "/data";
	$http.get(url).success(function(data, status, headers, config) {
		$scope.items = data.data;
	}).error(function(data, status, headers, config) {
		console.log("No data found..");
  });
});
 
app.filter('searchFor', function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result = [];
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if(item.id.toLowerCase().indexOf(searchString) !== -1){
			result.push(item);
		}
		});
		return result;
	};
});
