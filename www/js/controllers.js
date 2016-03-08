angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        $scope.$on('$ionicView.enter', function(e) {
        });
    })

    .controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
        $scope.data = {};

        $scope.login = function() {
            LoginService.loginUser($scope.data.email, $scope.data.password).success(function(data) {
                console.log('success');
                $state.go('app.suggestions');
            }).error(function(data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Connexion refusé ',
                    template: 'Merci de vérifier vos identifiants !'
                });
            });
        }
    })
    .controller('SuggestionsCtrl', function ($scope) {
        $scope.playlists = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    })

    .controller('SuggestionCtrl', function ($scope, $stateParams) {
    });
