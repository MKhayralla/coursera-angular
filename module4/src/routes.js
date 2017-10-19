(function () {
  'use strict';
  angular.module('MenuApp')
  .config(routesConfig) ;
  routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'] ;
  function routesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
      url : '/',
      templateUrl : 'src/home.html'
    })
    .state('categories',{
      url : '/categories' ,
      templateUrl : 'src/categories.html'
    })
    .state('items',{
      url : '/items/{short}' ,
      templateUrl : 'src/items.html' ,
      controller : 'lastStateController as ctrl' ,
      resolve : {
        menuArray : ['$stateParams','MenuDataService',
        function ($stateParams,MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.short)
          .then(function (response) {
            return response.data.menu_items ;
          })
          .catch(function (error) {
            console.log('Error loading category'+error);

          })
        }]
      }
    })
;
  }
})()
