angular
    .module('tgq', [
        'ngRoute'
    ])
    .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl as vm'
            })
            .when('/home', {
                templateUrl:'app/home/home.html',
                controller: 'HomeCtrl as vm'
            });
    }
