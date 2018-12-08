//Working with Promises
app.controller('labController', [
    //Note github is available here beacuse this controller is on app module where github is defined as a dependency already
    '$scope', '$timeout', '$q', '$http','gitHub',
    function ($scope, $timeout, $q, $http, gitHub) {
        $scope.model = {
            number: 0,
            result: 'Ready',
        };
        $scope.checkOddNumber = checkOddNumber;
        $scope.getRepos = getRepos;
        $scope.loadDetail = loadDetail;

        function getRepos(){
            $scope.model.repos = gitHub.getAll()
        }
        function loadDetail(name){
            $scope.model.detail = null;
            $scope.model.detail = gitHub.getDetail({ id: name });
        }
        // function getRepos() {
        //     $http.get('https://api.github.com/orgs/edgemetric/repos')
        //         .then(function (response) {
        //             $scope.model.repos = response.data;
        //         }, function (response) {
        //             $scope.model.repos = 'Error: ' + response.data.message;
        //         });
        // }
        //
        // function loadDetail(name) {
        //     var url = 'https://api.github.com/repos/edgemetric/' + name;
        //     $http.get(url)
        //         .then(function (response) {
        //             $scope.model.detail = response.data;
        //         }, function (response) {
        //             $scope.model.detail = {error: true, message: 'Error: ' + response.data.message};
        //         });
        // }

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