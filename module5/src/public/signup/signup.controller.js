(function () {
  angular.module('public')
  .controller('signupController',signupController) ;
  signupController.$inject = ['$http','signupService','ApiPath'];
  function signupController($http,signupService,ApiPath) {
    var ctrl = this ;
    ctrl.wrong = false ;
    ctrl.saved  = false ;
    ctrl.short = '' ;
    ctrl.saveData = function () {
      var promise  = $http({
        url : ApiPath + '/menu_items/'+ctrl.user.short+'.json',
        method : 'GET'
      })
      promise
      .then(function (response) {
        var item = response.data ;
        console.log(response.data);
          ctrl.wrong = false ;
          signupService.setInfo(ctrl.user);
          ctrl.saved = true ;
          signupService.setItem(item)
        }
      )
      .catch (function(error){
          ctrl.wrong = true ;
          console.log(error);
        });
    }
  }
})()
