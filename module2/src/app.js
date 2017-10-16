(function () {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',toBuyController)
  .controller('AlreadyBoughtController',alreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  toBuyController.$inject = ['ShoppingListCheckOffService'];
  function toBuyController (ShoppingListCheckOffService) {
    var list1 = this ;
    list1.isEmpty = function () {
      if (ShoppingListCheckOffService.getItemsRemaining().length==0) {
        return true ;
      }
      return false ;
    }
    list1.list = ShoppingListCheckOffService.getItemsRemaining();
    list1.buy = function(index){
      ShoppingListCheckOffService.buy(index);
    }
  }
  alreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function alreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this ;
    list2.isEmpty = function () {
      if (ShoppingListCheckOffService.getItemsBought().length==0) {
        return true ;
      }
      return false ;
    }
    list2.list = ShoppingListCheckOffService.getItemsBought();
    list2.cancel = function(index){
      ShoppingListCheckOffService.cancel(index);
    }

  }
  function ShoppingListCheckOffService() {
    var service = this ;
    service.itemsRemaining = ['sugar','salt','tea','coffee','nescafe'] ;
    service.itemsBought = [] ;
    service.getItemsBought = function () {
      return service.itemsBought ;
    }
    service.getItemsRemaining = function () {
      return service.itemsRemaining ;
    }
    service.buy = function(index) {
      service.itemsBought.push(service.itemsRemaining[index]);
      service.itemsRemaining.splice(index,1);
    }
    service.cancel = function(index) {
      service.itemsRemaining.push(service.itemsBought[index]);
      service.itemsBought.splice(index,1);
    }
  }

})()
