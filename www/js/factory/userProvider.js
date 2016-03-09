'use strict';

app
    .factory('userProvider', function ($rootScope, $http, $location, $ionicPopup) {
        function signIn(user) {
            var url = "http://demo6872153.mockable.io/authentification";

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
        }

        return {
            signIn: signIn
        }
    })
;