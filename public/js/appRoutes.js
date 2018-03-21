angular
.module('appRoutes',[])
.config(function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('home');
    $stateProvider.
    state('home', {
        url: '/home',
        templateUrl: 'home.html',
        controller: 'homeCtrl'
    }).
    state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'homeCtrl'
    }).
    state('categories', {
        url: '/categories',
        templateUrl: 'categories.html',
        controller: 'homeCtrl'
    }).
    state('contact', {
        url: '/contact',
        templateUrl: 'contact.html',
        controller: 'homeCtrl'
    })






});