(function () {
  angular.module('data')
  .controller('lastStateController',lastStateController);
  lastStateController.$inject = ['menuArray','$stateParams'];
  function lastStateController(menuArray,$stateParams) {
    var ctrl = this ;
    ctrl.items = menuArray ;
    ctrl.title = $stateParams.short ;

  }

})()
