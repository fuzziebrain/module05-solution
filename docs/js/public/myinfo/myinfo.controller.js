(function () {
  "use strict";

  angular.module('public')
    .controller('MyinfoController', MyinfoController);

  MyinfoController.$inject = ['ApiPath', 'member', 'menuItem'];

  function MyinfoController(ApiPath, member, menuItem) {
    var $ctrl = this;

    $ctrl.basePath = ApiPath;
    $ctrl.member = member;
    $ctrl.menuItem = menuItem;
  }
})();
