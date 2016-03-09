angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        $scope.$on('$ionicView.enter', function (e) {
        });
    })

    .controller('LoginCtrl', function ($scope, userProvider, $location) {
        if (typeof user !== 'undefined') {
            $location.path('app/suggestions')
        }

        $scope.user = {};

        $scope.signIn = function (user) {
            userProvider.signIn(user);
        }
    })

    .controller('SuggestionsCtrl', function ($scope, $http, $ionicPopup, $state, $ionicNavBarDelegate) {
        // Hide Back button
        $scope.options = $scope.options || {};
        $scope.options.hideBackButton = true;

        $http.get("http://demo6872153.mockable.io/suggestions")
            .success(function (data) {
                $scope.suggestions = data.suggestions;
            })
            .error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion',
                    template: 'L\'API semble ne pas répondre.'
                });
            });

        //Go to the addSuggestion page
        $scope.addSuggestion = function () {
            $state.go("app.suggestions_add");
        }
    })

    .controller('SuggestionAddCtrl', function ($scope, $http, $ionicPopup, $stateParams, $state) {

        $scope.suggestion = {};

        //Get the hotels
        $http.get("http://demo6872153.mockable.io/hostels")
            .success(function (data) {
                $scope.hostels = data.hostels;
            })
            .error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion',
                    template: 'L\'API semble ne pas répondre.'
                });
            });

        //Get the thematics
        $http.get("http://demo6872153.mockable.io/thematics")
            .success(function (data) {
                $scope.thematics = data.thematics;
            })
            .error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion',
                    template: 'L\'API semble ne pas répondre.'
                });
            });

        $scope.createSuggestion = function (suggestion) {

            var link = 'http://demo6872153.mockable.io/suggestion-add';

            suggestion.user = 245777643;

            $http.post(link, suggestion)
                .success(function (response) {
                    console.log(response);
                    if (response.error == false) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'La suggestion n\'a pas pu être ajoutée',
                            template: 'Nous ne semblons pas pouvoir ajouter votre suggestion.'
                        });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: response.msg,
                            template: response.longMsg
                        });
                    }
                }).error(function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion',
                    template: 'L\'API semble ne pas répondre.'
                });
            });

            //TODO get connected user and store into suggestion
            //TODO store suggestion object
            /*
             $scope.tasks.push({
             });
             title: task.title
             $scope.taskModal.hide();
             task.title = "";
             */
        };

        $scope.backToHome = function () {
            $state.go("app.suggestions");
        }
    })


    .controller('SuggestionCtrl', function ($scope, $stateParams) {
    });