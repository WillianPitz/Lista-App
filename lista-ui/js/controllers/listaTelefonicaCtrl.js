angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, serialGenerator, contatosAPI, $document, $modal) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;
	

	var generateSerial = function (contatos) {
		contatos.forEach(function (item) {
			item.serial = serialGenerator.generate();
		});
	};

	function getAllContatos(){
		contatosAPI.getContatos().then((res)=>{
			$scope.contatos = res.data;
		})
	}

	$scope.adicionarContato = function (contato) {
		contato.serial = serialGenerator.generate();
		contatosAPI.saveContato(contato).then(
			function success(data) {
				delete $scope.contato;
				$scope.contatoForm.$setPristine();
				carregarContatos();
			},
			function error(){
				alert('deu erro');
			}
		);
	};
	$scope.apagarContatos = function (contatos) {
		var contatosDelete = contatos.filter(function (contato) {
			if (contato.selecionado) return contato;
		});

		let promises = [];
		contatosDelete.forEach(function(contato) {
			promises.push(contatosAPI.deleteContato(contato.id));
		});

		Promise.all(promises).then(getAllContatos);
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	
	$scope.openModal = function () {
		var modalInstance = $modal.open({
		  animation: $scope.animationsEnabled,
  	      templateUrl: 'view/detalhesContato.html',
	      controller: 'modalController',
	      controllerAs: '$scope'
	  	});
	}
	generateSerial($scope.contatos);
});