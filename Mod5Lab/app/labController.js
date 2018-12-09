app.controller('labController', [
    '$scope',
    function ($scope) {
        $scope.model = {
            pizzaOptions: [{disp: 'Cheese Pizza', val: 'cheese'},
                {disp: 'Pepperoni Pizza', val: 'pepperoni'},
                {disp: 'Margherita Pizza', val: 'margherita'},
                {disp: 'BBQ Chicken Pizza', val: 'bbqchiken'},
                {disp: 'Combo Pizza', val: 'combo'}
            ]
        }
    }
]);