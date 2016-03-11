'use strict';

app
    .controller('ValidateSuggestionsCtrl', function ($scope, $ionicPopup, $http, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
        $ionicSideMenuDelegate.canDragContent(true);
        $ionicNavBarDelegate.showBackButton(true);
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

    .controller('ValidateOneSuggestionCtrl', function ($scope, $http, $stateParams, $ionicPopup, $state, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
        $ionicSideMenuDelegate.canDragContent(true);
        $ionicNavBarDelegate.showBackButton(true);
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
                            $state.go("app.admin_validate_suggestions");
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
                                $state.go("app.admin_validate_suggestions");
                                //TODO send e-mail with motif to the user who suggest
                            }
                        }
                    }
                ]
            });
        };

    });
