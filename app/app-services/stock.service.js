(function () {
    'use strict';

    angular
        .module('app')
        .factory('StockService', Service);

    function Service($http, $q) {
        var domain = "localhost";
        var apiURL = "http://" + domain + ":9050/api/stock";
        var apiURLusers = "http://" + domain + ":9050/api/users";
        var service = {};

        service.GetToken = GetToken;
        service.GetUserId = GetUserId;
        service.GetCurrent = GetCurrent;
        service.GetAll = GetAll;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        
        return service;

        function GetUserId() {
            // get userId token from server
            return $.get('/app/userId');
        }

        function GetToken() {
            // get userId token from server
            return $.get('/app/token');
        }

        function GetCurrent(userId) {
            return $http.get(apiURLusers + '/' + userId).then(handleSuccess, handleError);
        }

        function GetAll() {
            return $http.get(apiURL).then(handleSuccess, handleError);
        }

        function Create(stock) {
            return $http.post(apiURL + '/add', stock).then(handleSuccess, handleError);
        }

        function Update(stock, _id) {
            return $http.put(apiURL + '/' + _id, stock).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete(apiURL + '/' + _id).then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
        
    }

})();
