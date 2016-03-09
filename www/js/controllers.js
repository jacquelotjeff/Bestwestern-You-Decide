angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('LoginCtrl', function($scope) {
  $scope.data = {};

  $scope.login = function() {
    console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
  }
})

.controller('SuggestionsCtrl', function($scope, $stateParams, $state) {
  
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  //Go to the addSuggestion page
  $scope.addSuggestion = function() {
    $state.go("app.suggestions_add");
  }


})

.controller('SuggestionAddCtrl', function($scope, $http, $ionicPopup, $stateParams, $state) {
    
    $scope.suggestion = {};

    //Get the hotels
    $http.get("http://demo6872153.mockable.io/hostels")
      .success(function(data){
        $scope.hostels = data.hostels;
      })
      .error(function(data){
        var alertPopup = $ionicPopup.alert({
            title: 'Erreur de connexion',
            template: 'L\'API semble ne pas répondre.'
        });
      });

    //Get the thematics
    $http.get("http://demo6872153.mockable.io/thematics")
      .success(function(data){
        $scope.thematics = data.thematics;
      })
      .error(function(data){
        var alertPopup = $ionicPopup.alert({
            title: 'Erreur de connexion',
            template: 'L\'API semble ne pas répondre.'
        });
      });

    $scope.createSuggestion = function(suggestion) {

      var link = 'http://demo6872153.mockable.io/suggestion-add';
        
        suggestion.user = 245777643;

        $http.post(link, suggestion)
          .success(function(response){
            console.log(response);
            if(response.error == false){
              var alertPopup = $ionicPopup.alert({
                title: 'La suggestion n\'a pas pu être ajoutée',
                template: 'Nous ne semblons pas pouvoir ajouter votre suggestion.'
              });    
            } else {
              var alertPopup = $ionicPopup.alert({
                title: response.msg,
                //template: response.long-msg
                template: "Please change long-msg to longMsg or other."
              });                  
            }
          }).error(function(){
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

  $scope.backToHome = function() {
    $state.go("app.suggestions");
  }


  
})

.controller('SuggestionCtrl', function($scope, $stateParams) {


});
