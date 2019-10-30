import item from './item.js';
import store from './store.js';
import shoppingList from './shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};


$(main);