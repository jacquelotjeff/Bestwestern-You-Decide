'use strict';

app
    // Administration des suggestions
    // Validation des suggestions
    .controller('ManageSuggestionsCtrl',function ($scope, $http, $ionicPopup, $state, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
        $ionicSideMenuDelegate.canDragContent(true);
        $ionicNavBarDelegate.showBackButton(true);

        $http.get("http://demo6872153.mockable.io/suggestions-500")
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

    .controller('ManageOneSuggestionCtrl', function ($scope,$http, $state, $stateParams, $ionicPopup, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
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

        $scope.validateSuggestion = function() {
            $scope.data = {}

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.comment">',
                title: 'Commentaire',
                subTitle: 'Ajouter un commentaire :',
                scope: $scope,
                buttons: [
                    { text: 'Annuler' },
                    {
                        text: '<b>Valider</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.comment) {
                                //don't allow the user to close unless he enters a comment
                                e.preventDefault();
                            } else {
                                return $scope.data.comment;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
            });
        };

        $scope.refuseSuggestion = function() {
            $scope.data = {}

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.comment">',
                title: 'Commentaire',
                subTitle: 'Justifier le refus :',
                scope: $scope,
                buttons: [
                    { text: 'Annuler' },
                    {
                        text: '<b>Valider</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.comment) {
                                //don't allow the user to close unless he enters a commeny
                                e.preventDefault();
                            } else {
                                return $scope.data.comment;
                            }
                        }
                    },
                ]
            });
            myPopup.then(function(res) {
            });
        };

        $scope.backToManage = function () {
            $state.go("app.admin_manage_suggestions");
        }
    })