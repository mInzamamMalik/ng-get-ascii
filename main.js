/**
 * Created by malikasinger on 21-Apr-15.
*/

var app = angular.module("myApp",["ngMaterial"]);

app.controller("myCtrl",["$scope",function($scope){

    $scope.input = "";
    $scope.getascii = function(){

        var a = $scope.input;
        $scope.result = "ASCII code of '" + a + "'" + " is " + a.charCodeAt(0);



}}]);

app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
        return function() {
            return $mdSidenav(navID).toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }
    }
});
    app.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    });
app.controller('listCtrl', function($scope) {

    $scope.todos = [
        {
            who: 'what is ASCII code',
            notes: "ASCII code is a code sequence have values 1 to 256," +
                " when we press a key on keyboard such as space-bar our" +
                " computer don't know we pressed space bar." +
                " computer just receive a code with every key-press and according to this code" +
                " our computer decide that what is instructed to do." +
                " e.g:  when we press 'A' button in MS-Word computer receives a code" +
                " (65) and match this code in his memorise list of code and" +
                " then computer found a shape against this code and then display this shape and this shape is 'A'" +
                " this code is called ASCII code"

        }

    ];
});