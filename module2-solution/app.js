(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.initToBuyList();

  toBuyList.bought = function (index) {
    ShoppingListCheckOffService.toBoughtList(index);
    ShoppingListCheckOffService.dropBoughtItem(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;
  var buyItems = [];
  var boughtItems = [];

  // List of shopping items
  service.initToBuyList = function() {
    buyItems = [
    {
      name: "Milk",
      quantity: "3"
    },
    {
      name: "Donuts",
      quantity: "20"
    },
    {
      name: "Cookies",
      quantity: "30"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Pepto Bismol",
      quantity: "2"
    }
    ];
    return buyItems;
  };

  service.toBoughtList = function (index) {
    var item = buyItems[index];
    boughtItems.push(item);   
  };

  service.dropBoughtItem = function (index) {
    buyItems.splice(index, 1);
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();