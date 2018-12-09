app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
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
            registration.submit(model).$promise.then(function (response) {
                alert('success');
                reset();
                $scope.model.token = response.token
                console.log(model.token);
            }, function (response) {
                alert('error');
            });
        }
    }
]);