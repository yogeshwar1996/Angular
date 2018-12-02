app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.newValueAdded = false;
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Tomato', 'Saesoning', 'Pineapple', 'jalapenos',
                'Mushrooms', 'Onion', 'Olives', 'Green Peppers', 'Broccoli'],
            toppings: []
        };
        $scope.addTopping = function (topping) {
            // Add values to the array if the dont exist already otherwise
            // using the array with duplicate values for ng-repeat will throw error
            if ($scope.model.toppings.indexOf(topping) == -1) {
                $scope.model.toppings.push(topping);
                console.log("Toppings are", $scope.model.toppings);
                //It will clear the input field
                $scope.model.search = null;
                $scope.newValueAdded = true;
            }
        };

    }
]);