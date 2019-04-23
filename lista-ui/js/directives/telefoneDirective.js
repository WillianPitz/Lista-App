angular.module('listaTelefonica').directive('telefone',
 function validaTelefoneCompletoDirective() {
   return {
     restrict: 'A',
     require: 'ngModel',
     scope: {
       telefoneTypeId: '@'
     },
     link: function (scope, element, attrs, ctrl) {
       element.bind('keyup', function () {
         if(!this.value) return;

         let telefone = this.value;

         let reg;
         let formatted;

         switch (scope.telefoneTypeId){
           case '1': //TELEFONE RESIDENCIAL
             reg = new RegExp(/^\(\d{2}\) \d{4}-\d{4}$/);
             formatted = telefone.replace(/^(\d{4})(\d{4})$/, '$1-$2');
             break;

           case '18': //TELEFONE CELULAR
             reg = new RegExp(/^\(\d{2}\) 9\d{4}-\d{4}$/);
             formatted = telefone.replace(/^(\(\d{2}\))(\d{5})(\d{4})$/, '$1 $2-$3');
             break;
         }

         let valid = reg.test(formatted);
         ctrl.$setValidity('telefone', valid);
         this.value = formatted;
            
       });
     }
   };
 }
);