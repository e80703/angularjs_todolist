var app = angular.module("todoApp", []);

app.controller("todoCtrl", function($scope){
	$scope.todoList = [
		{text:"Build App", done:false},
		{text:"Ch 1", done:false}
	];

	$scope.totalTask = function(){
		return $scope.todoList.length;
	};

	$scope.done = function(){
		//_.filter underscorejs
		return _.filter($scope.todoList, function (todo) {
	      return todo.done;
	    }).length;
	};

	$scope.remaining = function(){
		return _.filter($scope.todoList, function (todo) {
	      return !todo.done;
	    }).length;
	};

	$scope.remove = function(index){
		$scope.todoList.splice(index, 1);
	};

	$scope.addTodo = function(){
		$scope.todoList.push({text:$scope.text, done:false});
		$scope.text = "";
	};

	$scope.clearDone = function(){
		$scope.todoList = _.filter($scope.todoList, function(todo){
			return !todo.done;
		});

		// $scope.todoList = _.filter($scope.todoList, function (item) {
	 //      return !item.done;
	 //    });
	}

});