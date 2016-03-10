'use strict';

app
    .factory('userProvider', function ($rootScope, $http, $location, $ionicPopup) {
        function signIn(user) {
            var url = "http://demo6872153.mockable.io/authentification";
            var url_admin = "http://demo6872153.mockable.io/authentification-admin";

            // Test si l'utilisateur n'est pas un admin
            if (user.email != "admin@best-western.com") {
                $http.post(url, user)
                    .success(function (response) {
                        if (response.type == "success") {
                            $rootScope.user = response.data;
                            $location.path('app/suggestions')
                        }
                    })
                    .error(function (data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Erreur de connexion',
                            template: 'L\'API semble ne pas répondre.'
                        });
                    });
            } else { // L'utilisateur est alors admin
                $http.post(url_admin, user)
                    .success(function (response) {
                        if (response.type == "success") {
                            $rootScope.user = response.data;
                            $location.path('app/suggestions')
                        }
                    })
                    .error(function (data) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'Erreur de connexion',
                            template: 'L\'API semble ne pas répondre.'
                        });
                    });
            }

        }

        return {
            signIn: signIn
        }
    })
;