angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };

        // Perform the login action when the user submits the login form
        $scope.doLogin = function () {
            console.log('Doing login', $scope.loginData);

            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function () {
                $scope.closeLogin();
            }, 1000);
        };
    })

    .controller('LoginCtrl', function ($scope) {
        $scope.data = {};

        $scope.login = function () {
            console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
        }
    })

    .controller('SuggestionsCtrl', function ($scope, $http, $ionicPopup, $state) {
        $http.get("http://demo6872153.mockable.io/suggestions")
            .success(function (data) {
                $scope.playlists = data.suggestions;
            })
            .error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Erreur de connexion',
                    template: 'L\'API semble ne pas répondre.'
                });
            });
    })


    .controller('SuggestionCtrl', function ($scope,$http, $stateParams) {
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

    .controller('PopupCtrl',function($scope, $ionicPopup) {
       $scope.showAlert = function() {
         var alertPopup = $ionicPopup.alert({
           title: 'Confirmation',
           template: 'Votre vote a été pris en compte.'
         });
       };
    })


