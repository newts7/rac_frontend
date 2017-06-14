/**
 * Created by ubuntu on 12/6/17.
 */
/**AIzaSyD2NpEdiHi90zIRv-BNutZj_vts_Zsc6Ao**/
var app=angular.module("app",[]);
app.controller("mycontroller",["$scope",function ($scope) {

    $scope.text="hello";
    $scope.c={
        "name":"",
        "city":"",
        "location":"",
        "information":"",
        "profile":""
    };


    $scope.handleForm=function () {
    $scope.c.city=getCity($scope);
    console.log($scope.c);
    };


    function getCity($scope) {
        var res=$scope.c.location.split(",");
        return res[res.length-3];
    }

}
]);