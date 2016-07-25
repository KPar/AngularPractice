/**
 * Created by Ken on 21/07/2016.
 */
var model = {
    user:"Ken",
    items: [{action: "Buy Flowers", done: false},
        {action: "Get Shoes", done: false},
        {action: "Collect Tickets", done: true},
        {action: "Call Bob", done: false}]
};

var todoApp = angular.module("todoApp",[]);

todoApp.controller("ToDoCtrl", function ($scope) {
    $scope.todo = model;
});