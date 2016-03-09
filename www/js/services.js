angular.module('starter.services', ['ng'])

    .service('LoginService', function ($localstorage, $q) {
        return {
            loginUser: function (users, email, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;
                var found = false;
                var user;

                angular.forEach(users, function(value, key)
                {
                    // If user is found
                    if (value.email === email && value.password == pw)
                    {
                        user = {
                            lastname: value.lastname,
                            firstname: value.firstname,
                            email: value.email,
                            photo: value.photo
                        };
                        found = true;
                    }
                });

                if (found === true) {
                    $localstorage.setObject('currentUser', user);

                    console.log($localstorage.getObject('currentUser'));
                    deferred.resolve('Welcome ' + email + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }

                promise.success = function (fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            }
        }
    })