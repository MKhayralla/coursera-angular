(function () {
  'use strict' ;
  angular.module('public')
  .service('signupService',signupService) ;
  function signupService() {
    var service = this ;
    service.info = {} ;
    service.stored = false ;
    service.item = {} ;
    service.setInfo = function (userData) {
      service.info = userData ;
      service.stored = true ;
    }
    service.getInfo = function () {
      return service.info ;
    }
    service.isStored =function () {
      return service.stored ;
    }
    service.setItem =function (preference) {
      service.item = preference ;
    }
    service.getItem = function () {
      return service.item ;
    }
  }
})()
