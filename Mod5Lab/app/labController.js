app.controller('labController', [
    '$scope',
    function ($scope) {
        $scope.reset = reset;
        $scope.submit = submit;
        reset();
        $scope.pizzaOptions = [
            {disp: 'Cheese Pizza', val: 'cheese'},
            {disp: 'Pepperoni Pizza', val: 'pepperoni'},
            {disp: 'Margherita Pizza', val: 'margherita'},
            {disp: 'BBQ Chicken Pizza', val: 'bbqchiken'},
            {disp: 'Combo Pizza', val: 'combo'}
        ];
        function reset() {
            $scope.model = {};
        }
        function submit(model) {
            alert('Submitted\n' + JSON.stringify(model, null, 4));
        }

    }
]);