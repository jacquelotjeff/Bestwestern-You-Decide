'use strict';

app


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

    .controller('SuggestionCtrl', function ($scope,$http, $stateParams, $ionicPopup) {
        $http.get("http://demo6872153.mockable.io/suggestion")
            .success(function (data) {
                $scope.suggestion = data.suggestion;
            })
            .error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion',
                    template: 'L\'API semble ne pas répondre.'
                });
            });
        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Confirmation',
                template: 'Votre vote a été pris en compte.'
            });
        };
    })