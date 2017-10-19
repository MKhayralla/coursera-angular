(function () {
  'use strict' ;
  angular.module('data')
  .component('myCategories',{
    templateUrl : 'src/categories.component.html',
    controller : categoriesController
  })
  categoriesController.$inject = ['MenuDataService','$rootScope']
  function categoriesController(MenuDataService,$rootScope) {
    var $ctrl = this ;
    $ctrl.categories = [] ;
    var promise = MenuDataService.getAllCategories();
    promise
    .then(function (response) {
      $ctrl.categories = response.data ;
      console.log('loaded categoris (success)');
    })
    .catch(function (error) {
      console.log(error) ;
    })
    


  }
})()
