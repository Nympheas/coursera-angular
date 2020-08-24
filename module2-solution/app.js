(function () {
  'use strict';
  
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController);
  .controller('AlreadyBoughtController', AlreadyBoughtController);
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  
  function ToBuyController(ShoppingListCheckOffService) {
    var ToBuy = this;
    ToBuy.removeItem = function (itemIndex) {
    	ShoppingListCheckOffService.removeItem(itemIndex);
    }
  }
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var AlreadyBought = this;
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var ToBuyItems = [{ name: "cookies", quantity: 10 },
    { name: "cookies", quantity: 10 },{ name: "cookies", quantity: 10 },
    { name: "cookies", quantity: 10 },{ name: "cookies", quantity: 10 }];
    var boughtItems = [];

    service.removeItem = function (itemIndex) {
    	var item = ToBuyItems[itemIndex];
        boughtItems.push(item);
        ToBuyItems.splice(itemIndex, 1);
	  };
    }

  }
})();