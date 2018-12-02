app.controller('labController', [
    '$scope', '$timeout', '$q',
    function ($scope, $timeout, $q) {
        $scope.model = {
            number: 0,
            result: 'Ready',
        };
        $scope.checkOddNumber = checkOddNumber;

        function checkOddNumber(input) {
            $scope.model.result = 'Working...';
            checkOddNumberHandler(input).then(function (result) {
                $scope.model.result = 'Success: ' + result;
            }, function (result) {
                $scope.model.result = 'Error: ' + result;
            })
        }

        function checkOddNumberHandler(input) {
            var defer = $q.defer();

            $timeout(function () {
                if (isNumberOdd(input)) {
                    defer.resolve('Yes, an odd number');
                } else {
                    defer.reject('Not an odd number');
                }
            }, 5000);

            return defer.promise;
        }

        function isNumberOdd(input) {
            return !isNaN(input) && input % 2 == 1;
        }

    }
]);