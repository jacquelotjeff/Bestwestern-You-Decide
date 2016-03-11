'use strict';

app
    .controller('ManageThematicsCtrl', function ($scope, $http, $ionicPopup, $state, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
        $ionicSideMenuDelegate.canDragContent(true);
        $ionicNavBarDelegate.showBackButton(true);
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

        //Go to the addThematic page
        $scope.addThematic = function () {
            $state.go("app.admin_manage_thematics_add");
        }

        //Supprimer une thématique
        $scope.deleteThematic = function ($stateParams) {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Supprimer une catégorie',
                template: 'Êtes-vous sûr de vouloir supprimer définitivement cette catégorie ?'
            });
        }

    })

    .controller('ManageThematicAddCtrl', function($scope, $http, $ionicPopup, $stateParams, $state, $ionicSideMenuDelegate, $ionicNavBarDelegate){
        $ionicSideMenuDelegate.canDragContent(true);
        $ionicNavBarDelegate.showBackButton(true);
        $scope.category = {};

        $scope.createThematic = function (thematic) {

            var link = 'http://demo6872153.mockable.io/suggestion-add';

            $http.post(link, thematic)
                .success(function (response) {
                    if (response.error == false) {
                        var alertPopup = $ionicPopup.alert({
                            title: 'La catégorie n\'a pas pu être ajoutée',
                            template: 'Nous ne semblons pas pouvoir ajouter votre catégorie.'
                        });
                    } else {
                        var alertPopup = $ionicPopup.alert({
                            title: "Catégorie ajoutée",
                            template: "Nouvelle catégorie ajoutée avec succès !"
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

        $scope.backToThematics = function () {
            $state.go("app.admin_manage_thematics");
        }
    })
