(function () {
  "use strict";

  angular.module('common')
    .service('AccountService', AccountService);


  AccountService.$inject = [];

  function AccountService() {
    var service = this;
    var members = [];

    service.addMember = function(member) {
      members.push(member);
    };

    service.getMember = function() {
      return members[members.length - 1];
    }
  }

})();
