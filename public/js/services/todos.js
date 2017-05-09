angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http', function ($http) {
		return {
			get: function (apiName) {
				return $http.get(apiName);
			},
			create: function (todoData, apiName) {
				return $http.post(apiName, todoData);
			},
			delete: function (id, apiName) {
				return $http.delete(apiName + '/' + id);
			}
		}
	}]);