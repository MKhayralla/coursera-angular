(function () {
'use strict';
angular.module('public')
.controller('infoController',infoController) ;
infoController.$inject = ['signupService','ApiPath'];
function infoController(signupService,ApiPath) {
  var ctrl = this ;
  ctrl.basePath = ApiPath ;
  ctrl.set = signupService.isStored() ;
  ctrl.data = signupService.getInfo() ;
  ctrl.item = signupService.getItem() ;
}
})()
