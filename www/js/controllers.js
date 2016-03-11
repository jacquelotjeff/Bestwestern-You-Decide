angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicSideMenuDelegate) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        $scope.$on('$ionicView.enter', function (e) {
        });
    })

    .controller('LoginCtrl', function ($scope, userProvider, $location, $ionicPopup, $ionicSideMenuDelegate) {
        $ionicSideMenuDelegate.canDragContent(false);
        $scope.showAlertLogin = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Best Western YOU DECIDE',
                template: 'Soumettez-nous vos suggestions et vos meilleures idées pour améliorer votre expérience chez nous. <br/> Soumises aux votes des autres clients, vos idées se concrétiseront dès que le seuil des 500 votes sera atteint. <br/><br/>N’hésitez pas à voter pour les idées qui vous intéressent !'
            });
        };

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

    .controller('AccountCtrl', function ($scope, $http, $stateParams, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
        $ionicSideMenuDelegate.canDragContent(true);
        $ionicNavBarDelegate.showBackButton(true);
        $http.get("http://demo6872153.mockable.io/user")
            .success(function (data) {
                $scope.suggestion = data.suggestion;

                var dateParts = data.registerDate.match(/(\d+)/g);
                var subscribedDate = Date(dateParts[2], dateParts[1]-1, dateParts[0]);
                var seniorityDate = Date.now() - subscribedDate;
                var ageDate = new Date(seniorityDate); // miliseconds from epoch
                $scope.user.seniority = Math.abs(ageDate.getUTCFullYear() - 1970);
                $scope.user = data;
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