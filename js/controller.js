(function(){
    'use_strict'

    angular
        .module('MyPortfolio')
        .controller('MyPortfolio',MyPortfolio);

    MyPortfolio.$inject = ['AuditService', '$state'];
    function MyPortfolio(AuditService, $state){
        var vm = this;

        vm.Prueba = function(){
            console.log("Probandoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
        }

    };
})();