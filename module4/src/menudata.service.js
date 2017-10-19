(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService',MenuDataService);
  MenuDataService.$inject = ['base','$http'] ;
  function MenuDataService(base,$http) {
    var service = this ;
    service.getAllCategories = function () {
      var response = $http({
        method : 'GET' ,
        url : base + 'categories.json'
      })
      return response ;
    }

    service.getItemsForCategory = function(categoryShortName){
      var response = $http({
        method : 'GET' ,
        url : base + 'menu_items.json' ,
        params : {
          category : categoryShortName
        }
      })
      return response ;
    }
  }
})()
