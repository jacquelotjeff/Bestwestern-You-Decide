// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.utils', 'starter.controllers'])

    .run(function ($ionicPlatform) {

        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl',
                data: {
                    requireLogin: true
                }
            })

            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl',
                        disableBack: true
                    }
                },
                data: {
                    requireLogin: false
                }
            })

            .state('app.suggestions', {
                url: '/suggestions',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/suggestion/suggestions.html',
                        controller: 'SuggestionsCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('app.suggestions_add', {
                url: '/suggestions/add',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/suggestion/add-suggestion.html',
                        controller: 'SuggestionAddCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('app.suggestions_detail', {
                url: '/suggestions/:suggestionId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/suggestion/suggestion.html',
                        controller: 'SuggestionCtrl'
                    }
                },
                data: {
                    requireLogin: true
                }
            })

            .state('app.suggestions_admin', {
                url: '/admin/manage-suggestions',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/manage-suggestion/manage-suggestions.html',
                        controller: 'ManageSuggestionsCtrl'
                    }
                }
            })

            .state('app.suggestion_admin', {
                url: '/admin/manage-suggestions/:suggestionId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/manage-suggestion/manage-one-suggestion.html',
                        controller: 'ManageOneSuggestionCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/suggestions');
    })

    // Used to check if the user is logged
    .run(function ($rootScope, $location) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            if (typeof $rootScope.user === 'undefined' && toState.data.requireLogin == true) {
                // Redirect to login page
                $location.path("/app/login");
            }
        });
    });