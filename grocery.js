function GroceryCtrl($scope) {
		$scope.groceries = [];

		$scope.getTotalGroceries = function () {
				return $scope.groceries.length;
	};

		$scope.clearCompleted = function () {
				$scope.groceries = _.filter($scope.groceries, function(grocery){
						return !grocery.done;
					});
			};

		$scope.addGrocery = function() {
			$scope.groceries.push({text:$scope.formGroceryText, done:false});
			$scope.formGroceryText = '';
		};
	}