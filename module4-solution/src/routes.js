(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/categories',
    templateUrl: 'src/menulist/templates/main-categorieslist.template.html',
    controller: 'MainCategoriesListController as mainList',
    resolve: {
      response: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  
  .state('mainList.items', {
    url: '/items/{shortName}',
     templateUrl: 'src/menulist/templates/items.template.html',
    //template: '<items></items>',
    controller: "ItemsController as items",
    resolve: {
      menuItemsResponse: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  })
  
  ;

}

})();
