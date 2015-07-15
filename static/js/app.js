var app = angular.module('garageApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            controller: 'listVehiclesController',
            templateUrl: '../view/listVehicles.html'
        })  
        .otherwise({ redirectTo: '/' });
});