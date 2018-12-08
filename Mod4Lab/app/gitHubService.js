//Name of Module: githubService, Dependency of Module: ngResource
//Name of Factory method: github, Dependency of factory method; $resource
angular.module('gitHubService', ['ngResource'])
    .factory('gitHub', [
    '$resource',
    function ($resource) {
        return $resource(
            //Url
            // 'https://api.github.com/:action/angular/:id', Here organization is hard-coded
            'https://api.github.com/:action/:org/:id',
            //default params
            {
                action: '@action',
                org: '@org',
                id: '@id'
            },
            //Custom Methods
            {
                getAll: {
                    method: 'GET',
                    isArray: true,
                    // params: {action: 'orgs',  id: 'repos'}
                    params: {action: 'orgs', id: 'repos'}
                },
                getDetail: {
                    method: 'GET',
                    params: {action: 'repos'}
                },
            });
    }
]);