angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicSideMenuDelegate) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        $scope.$on('$ionicView.enter', function (e) {
        });
    })

    .controller('LoginCtrl', function ($scope, userProvider, $location, $ionicPopup) {
        $scope.firstConnexion = true;
        if (typeof user !== 'undefined') {
            $location.path('app/suggestions')
        }

        $scope.user = {};

        $scope.signIn = function (user) {

            if (typeof  user.email !== 'undefined') {
                userProvider.signIn(user);
            } else {
                var alertPopup = $ionicPopup.alert({
                    title: 'Attention',
                    template: 'Merci de renseigner vos identifiants pour vous connecter.'
                });
            }
        }
    })

    .controller('PopupCtrl',function($scope, $ionicPopup) {
       $scope.showAlert = function() {
         var alertPopup = $ionicPopup.alert({
           title: 'Confirmation',
           template: 'Votre vote a été pris en compte.'
         });
       };
    })