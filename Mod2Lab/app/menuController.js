app.controller('menuController', [
    '$scope',
    function ($scope) {
        /**declaring property on scope*/
        $scope.model = {title: 'Our Menu'};
        $scope.model.mainDish = {item: undefined, price: undefined};
        /**declaring method on scope*/
        $scope.changeMainDish = function (item, price) {
            $scope.model.mainDish.item = item;
            $scope.model.mainDish.price = price;
        };

        /** a watch that triggers when user selects "BBQ Chicken Pizza",
         * Note that the first parameter of $scope.$watch() in this case is 'mainDish'.
         * This first parameter is a string used to tell the $watch function which $scope variable to watch.
         * In this case, it is watching $scope.mainDish. The second parameter is a function that has two parameters,
         * newValue and oldValue, which represent what the $scope variable changed to when the watch was triggered,
         * and what it was before it changed.*/

        /**Note its fine if you watch model.mainDish without defining that $scope.model has a mainDish property
         * But if you are watching over model.mainDish.item then $scope.model.mainDish must be defined previously to have a property called item*/
        $scope.$watch('model.mainDish.item', function (newValue, oldValue) {
            if (newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });
    }
]);