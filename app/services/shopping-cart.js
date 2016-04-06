import Ember from 'ember';

export default Ember.Service.extend({
  products: [],

  add(product) {
    this.get('products').pushObject(product);
  },
  remove(product) {
    this.get('products').removeObject(product);
  },
  includes(product) {
    return this.get('products').includes(product);
  },
  empty() {
    this.get('products').setObjects([]);
  }
});
// These are methods to be used in components. They are general enough to be applied in multiple areas.

//For example the .empty() method is in the emptyCart() method in the display-cart.js. The emptyCart() method is run when the button with the 'emptyCart' action in display-cart.js is clicked.
