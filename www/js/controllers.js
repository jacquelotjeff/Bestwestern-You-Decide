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

                    if (response.error == false) {

                        var popup = $ionicPopup.show({
                            title: 'La suggestion n\'a pas pu être ajoutée',
                            template: 'Nous ne semblons pas pouvoir ajouter votre suggestion.',
                            buttons: [
                                { 
                                    text: "OK",
                                    type: "button-positive",
                                    onTap: function(e){
                                        $state.go("app.suggestions");
                                    }
                                }
                            ]
                        });
                    } else {
                        var popup = $ionicPopup.show({
                            title: response.msg,
                            template: response.longMsg,
                            buttons: [
                                { 
                                    text: "OK",
                                    type: "button-positive",
                                    onTap: function(e){
                                        $state.go("app.suggestions");
                                    }
                                }
                            ]
                        });
                    }
                }).error(function () {
                var popup = $ionicPopup.alert({
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

    .controller('SuggestionCtrl', function ($scope, $http, $stateParams) {
        $http.get("http://demo6872153.mockable.io/suggestion")
            .success(function (data) {
                $scope.suggestion = data.suggestion;
                console.log($scope.suggestion);
            })
            .error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion',
                    template: 'L\'API semble ne pas répondre.'
                });
            });
    })

    .controller('PopupCtrl', function ($scope, $ionicPopup) {
        $scope.showAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Confirmation',
                template: 'Votre vote a été pris en compte.'
            });
        };
    })

    .controller('SuggestionsAValiderCtrl', function ($scope, $ionicPopup, $http) {
        //TODO replace url api to retrive suggestions to valid
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
    })

    .controller('SuggestionAValiderCtrl', function ($scope, $http, $stateParams, $ionicPopup, $state) {
        $http.get("http://demo6872153.mockable.io/suggestion")
            .success(function (data) {
                $scope.suggestion = data.suggestion;
                console.log($scope.suggestion);
            })
            .error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion',
                    template: 'L\'API semble ne pas répondre.'
                });
            });

            $scope.validateSuggestion = function () {
                var alertPopup = $ionicPopup.alert({
                    title: 'Confirmation',
                    template: 'Cette suggestion sera soumise aux votes des utilisateurs.',
                    buttons: [
                        { text: 'Annuler' },
                        {
                            text: '<b>Continuer</b>',
                            type: 'button-positive',
                            onTap: function(e) {
                                $state.go("app.suggestions");
                            }
                        },
                    ]
                });
            };

            $scope.refuseSuggestion = function () {
                
                $scope.data = {};

                var alertPopup = $ionicPopup.alert({
                    title: 'Cette suggestion ne sera pas soumises aux votes des utilisateurs.',
                    subTitle: 'Veuillez saisir un motif de refus',
                    template: '<textarea ng-model="data.motif"></textarea>',
                    scope: $scope,
                    buttons: [
                        { text: 'Annuler' },
                        {
                            text: '<b>Continuer</b>',
                            type: 'button-positive',
                            onTap: function(e) {
                                if (!$scope.data.motif) {
                                    e.preventDefault();
                                } else {
                                    $state.go("app.suggestions");
                                    //TODO send e-mail with motif to the user who suggest
                                }
                            }
                        }
                    ]
                });
            };

    });