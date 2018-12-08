//Name of Module: githubService, Dependency of Module: ngResource
//Name of Factory method: github, Dependency of factory method; $resource
angular.module('gitHubService', ['ngResource'])
    .factory('gitHub', [
    '$resource',
    function ($resource) {
        return $resource(
            //Url
            'https://api.github.com/:action/edgemetric/:id',
            //default params
            {
                action: '@action',
                id: '@id'
            },
            //Custom Methods
            {
                getAll: {
                    method: 'GET',
                    isArray: true,
                    params: {action: 'orgs', id: 'repos'}
                },
                getDetail: {
                    method: 'GET',
                    params: {action: 'repos'}
                },
            });
    }
]);