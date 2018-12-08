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

        //When ajax calls are made from a service "gitHub" created for this purpose
        function getRepos() {
            //When organisation is hard-coded in url
            // $scope.model.repos = gitHub.getAll()

            // When organization is given as input by user

            $scope.model.repos = gitHub.getAll({org: $scope.model.search});
            // There are two ways handle results when making an ajax call the above method is tedious
            // if error occurs then response will have $promise.$$state.value.data.message="Not Found"
            // if success then response will have data in array

            // This method is more organized
            // gitHub.getAll({org: $scope.model.search}).$promise.then(
            //     function (response) {
            //         // $scope.model.repos = response;
            //         console.log("The response after resolved  is", response);
            //     },
            //     function (response) {
            //         $scope.model.repos = response;
            //         console.log("The response after rejected is", response);
            //     });

            console.log("The result is ", $scope.model.repos)
        }

        function loadDetail(name){
            $scope.model.detail = null;
            // $scope.model.detail = gitHub.getDetail({ id: name });
            $scope.model.detail = gitHub.getDetail({ org: $scope.model.search, id: name });
            console.log("Model detail is",$scope.model.detail)
        }

        //When the ajax calls are made from within the controller
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