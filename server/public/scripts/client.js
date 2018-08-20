const myApp = angular.module('myApp', ['ngRoute']);
console.log('Angular is working');

myApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/rentals', {
        templateUrl: 'views/rentals.html',
        controller: 'RentalController as rc'
    }).when('/for_sale', {
        templateUrl: 'views/sales.html',
        controller: 'SalesController as sc'
    }).otherwise({
        templateUrl: 'views/404.html'
    })
})