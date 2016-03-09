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

.controller('SuggestionsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('SuggestionCtrl', function($scope, $stateParams) {

  $scope.idees = [
{id: 0, title: 'Assistant personnnel', category: 'SUIVI', date: '15/09/2015', like: 89,description: 'Itaque earum rerum hic tenetur a sapiente delectus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. Corrupti quos dolores et quas molestias excepturi sint occaecati. Et harum quidem rerum facilis est et expedita distinctio. Totam rem aperiam. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia. Laboris nisi ut aliquip ex ea commodo consequat. Corrupti quos dolores et quas molestias excepturi sint occaecati. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'},
{id: 1, title: 'Vélo en libre service', category: 'DEPLACEMENT',  date: '27/08/2014', like: 29,description: 'Itaque earum rerum hic tenetur a sapiente delectus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. Corrupti quos dolores et quas molestias excepturi sint occaecati. Et harum quidem rerum facilis est et expedita distinctio. Totam rem aperiam. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia. Laboris nisi ut aliquip ex ea commodo consequat. Corrupti quos dolores et quas molestias excepturi sint occaecati. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'},
{id: 2, title: 'Jacuzzi privatif', category: 'DETENTE', date: '18/02/2016', like: 72,description: 'Itaque earum rerum hic tenetur a sapiente delectus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. Corrupti quos dolores et quas molestias excepturi sint occaecati. Et harum quidem rerum facilis est et expedita distinctio. Totam rem aperiam. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia. Laboris nisi ut aliquip ex ea commodo consequat. Corrupti quos dolores et quas molestias excepturi sint occaecati. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'},
{id: 3, title: 'Navette aéroport', category: 'DEPLACEMENT', date: '22/07/2014', like: 75,description: 'Itaque earum rerum hic tenetur a sapiente delectus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. Corrupti quos dolores et quas molestias excepturi sint occaecati. Et harum quidem rerum facilis est et expedita distinctio. Totam rem aperiam. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia. Laboris nisi ut aliquip ex ea commodo consequat. Corrupti quos dolores et quas molestias excepturi sint occaecati. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'},
{id: 4, title: 'Literie personnnel', category: 'CONFORT', date: '12/06/2015', like: 9,description: 'Itaque earum rerum hic tenetur a sapiente delectus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. Corrupti quos dolores et quas molestias excepturi sint occaecati. Et harum quidem rerum facilis est et expedita distinctio. Totam rem aperiam. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia. Laboris nisi ut aliquip ex ea commodo consequat. Corrupti quos dolores et quas molestias excepturi sint occaecati. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'},
{id: 5, title: 'Room service', category: 'SERVICE', date: '19/11/2015', like: 48,description: 'Itaque earum rerum hic tenetur a sapiente delectus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus. Corrupti quos dolores et quas molestias excepturi sint occaecati. Et harum quidem rerum facilis est et expedita distinctio. Totam rem aperiam. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia. Laboris nisi ut aliquip ex ea commodo consequat. Corrupti quos dolores et quas molestias excepturi sint occaecati. Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'}
  ];

  $scope.idee_selected = $scope.idees[$stateParams.suggestionId -1];

  console.log($scope.idee_selected);
});

