(function () {
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',foundItems);
  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var search = this ;
    search.empty = false ;
    var promise = MenuSearchService.getMenuItems();
    promise.then(function (response) {
      console.log('Secceded to load json !')
      search.items = response.data ;
      console.log(search.items)
    })
    .catch(function (error) {
      console.log('Failed to load json !')
    });
    search.matchMenuItems = function () {
      search.empty = false ;
      search.found = MenuSearchService.findMenuItems(search.items,search.searchItem);
      if(search.found.length===0){
        search.empty = true ;
      }
        }
        search.delete = function(index){
          search.found.splice(index,1) ;
        }
      }
  MenuSearchService.$inject=['$http'];
  function MenuSearchService($http) {
    var service = this ;
    service.getMenuItems = function(){
      var response = $http({
        method : 'GET',
        url : 'https://davids-restaurant.herokuapp.com/menu_items.json'
      })
      return response ;
    }
    service.findMenuItems = function (items,term) {
      var found = [];
      var myItems = items.menu_items ;
      var description = '' ;
      console.log(term);
      if (term==='') {
        return found ;
      }
      for (var i = 0; i < myItems.length; i++) {
        console.log(myItems[i].name);
        description = myItems[i].description ;
        if (description.toLowerCase().indexOf(term.toLowerCase())!==-1) {
          found.push(myItems[i]);
      }
        }
        console.log(found);
      return found ;
     }
  }
  function foundItems() {
    var ddo ={
      templateUrl : 'src/found.html',
      restrict : 'E',
      scope : {
        items : '<?foundItems',
        onRemove : '&'
      }
    }
    return ddo ;
  }
})()
