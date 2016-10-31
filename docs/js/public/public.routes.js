(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'js/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'js/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'js/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'js/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'js/public/signup/signup.html',
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'js/public/myinfo/myinfo.html',
      controller: 'MyinfoController',
      controllerAs: 'myinfoCtrl',
      resolve: {
        member: ['AccountService', function(AccountService) {
          return AccountService.getMember();
        }],
        menuItem: ['MenuService', 'member', function(MenuService, member) {
          if(member && member.favouriteDish) {
            return MenuService.getMenuItem(member.favouriteDish)
              .then(function(response) {
                console.log('response data', response.data);
                return response.data;
              });
          } else {
            return null;
          }
        }]
      }
    });
}
})();
