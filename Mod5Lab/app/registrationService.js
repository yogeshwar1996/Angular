//Declaring and defining a service to send form data to an api
angular.module('registrationService', ['ngResource']).
        factory('registration', [
            '$resource',
            function ($resource) {
                return $resource(
                    //url
                    'https://reqres.in/api/register',
                    //defaultparams
                    {},
                    //custom method
                    {
                        submit: {
                            method: 'POST'
                        },
                    });
            }
        ]);