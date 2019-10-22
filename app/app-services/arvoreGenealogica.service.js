(function () {
    'use strict';

    angular
        .module('app')
        .factory('arvoresService', Service);

    function Service($http, $q) {
        var service = {};

        service.Create = Create;
        service.List = List;
        service.Delete = Delete;
        service.Update = Update;

        return service;
        function Create(arvore) {
            return $http.post('/api/arvoreGenealogica/create', arvore).then(handleSuccess, handleError);
        }

        function List(perguntas) {
            return $http.get('/api/arvoreGenealogica/list', perguntas).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete('/api/arvoreGenealogica/' + _id).then(handleSuccess, handleError);
        }

        function Update(arvore) {
            return $http.put('/api/arvoreGenealogica/' + arvore._id, arvore).then(handleSuccess, handleError);
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
