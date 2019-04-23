angular.module("listaTelefonica").controller("modalController", function ($scope, $modal, $document) {
	
	$scope.ok = function () {
		$uibModalInstance.close($scope.contato);
	};

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
	
});