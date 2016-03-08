angular.module('starter.services', ['ng'])

    .service('LoginService', function ($q) {
        return {
            // TODO CHECK IN API AUTHORIZATION
            loginUser: function (email, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (email == 'toto@toto.fr' && pw == 'toto') {
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

    .factory('CacheService', function ($cacheFactory) {
        return $cacheFactory('CacheService');
    });