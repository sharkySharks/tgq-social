(function () {
    angular
        .module('tgq')
        .controller('HomeCtrl', HomeCtrl);

        function HomeCtrl() {
            var vm = this;

            vm.name = 'Sharky';
        }
})();



