angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatos, operadoras, contatosAPI, $document, $modal) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = contatos.data;
	$scope.operadoras = operadoras.data;
	
	function getAllContatos(){
		contatosAPI.getContatos().then((res)=>{
			$scope.contatos = res.data;
		})
	}

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
	
	$scope.openModal = function (contato) {
		var modalInstance = $modal.open({
		  animation: $scope.animationsEnabled,
      templateUrl: 'view/detalhesContato.html',
      controller: 'modalController',
      resolve: {
      	contatoModal: ()=>{
      		return angular.copy(contato);
      	},
      	operadorasModal: ()=>{
      		return angular.copy($scope.operadoras);
      	}
			}
		});
		modalInstance.result.then((res)=>{
		if (res) {
  			getAllContatos();
  		}
  	});
	}

});