(function () {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'AccountService'];

  function SignupController(MenuService, AccountService) {
    var $ctrl = this;

    $ctrl.register = function() {
      if($ctrl.member.favouriteDish) {
        $ctrl.member.favouriteDish = $ctrl.member.favouriteDish.toUpperCase();
        MenuService.getMenuItem($ctrl.member.favouriteDish)
          .then(function() {
            AccountService.addMember($ctrl.member);
            $ctrl.completed = true;
          })
          .catch(function() {
            $ctrl.favouriteDish_invalid = true;
          });
      }
    };
  }
})();
