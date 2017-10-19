(function () {
  'use strict';
  angular.module('data')
  .component('myItems',{
    templateUrl : 'src/items.component.html',
    bindings : {
      items : '<'
    }
  });}
  )()
