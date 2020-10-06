(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);



  ItemsController.$inject = [ 'menuItemsResponse'];
function ItemsController(menuItemsResponse) {
  var items = this;
  
  
  items.menuItems =[];
 
   for(var i=0;i<menuItemsResponse.data.menu_items.length;i++){
  
      var item = {
        id: menuItemsResponse.data.menu_items[i].id,
        short_name: menuItemsResponse.data.menu_items[i].short_name,
        name: menuItemsResponse.data.menu_items[i].name,
        description: menuItemsResponse.data.menu_items[i].description
      };
      
      
      items.menuItems.push(item);
    }

  

}

})();
