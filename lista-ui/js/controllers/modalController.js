angular.module("listaTelefonica").controller("modalController", function ($scope, $modalInstance, $modal, contatoModal, contatosAPI, operadorasModal) {
	$scope.operadoras = operadorasModal;
	$scope.contato = contatoModal;

	$scope.save = function () {
		contatosAPI.updateContato($scope.contato).then(()=>{
			closeModal(true);	
		});
	};

	$scope.cancel = function () {
		closeModal(false);
	};

	function closeModal(res){
		$modalInstance.close(res);
	}
	
});