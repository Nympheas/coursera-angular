(function () {
'use strict';

angular.module('Data')
.controller('MainCategoriesListController', MainCategoriesListController);



MainCategoriesListController.$inject = ['response'];
function MainCategoriesListController(response) {
  var mainlist = this;
  mainlist.items =[];
  for(var i=0;i<response.data.length;i++){

    var item = {
      id: response.data[i].id,
      short_name: response.data[i].short_name,
      name: response.data[i].name
    };
    
    
    mainlist.items.push(item);
  }


  

 };


})();
