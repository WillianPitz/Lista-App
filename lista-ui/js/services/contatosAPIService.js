angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {
	var _getContatos = function () {
		return $http.get(config.baseUrl + "/contatos");
	};

	var _getContato = function (id) {
		return $http.get(config.baseUrl + "/contatos/" + id);
	};

	var _saveContato = function (contato) {
		return $http.post(config.baseUrl + "/contatos", contato);
	};

	var _deleteContato = function (id) {
		return $http.delete(config.baseUrl + "/contatos/" + id);
	};

	var _updateContato = function (contato) {
		return $http.put(config.baseUrl + "/contatos", contato);
	};	

	return {
		getContatos: _getContatos,
		getContato: _getContato,
		saveContato: _saveContato,
		deleteContato: _deleteContato,
		updateContato: _updateContato
	};
});