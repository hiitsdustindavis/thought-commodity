import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  cartIsShowing: false,
  actions: {
    showCart: function(){
      this.set('cartIsShowing', true);
    },
    hideCart: function(){
      this.set('cartIsShowing', false);
    },
    removeFromCart(product) {
      this.get('shoppingCart').remove(product);
    },
    emptyCart(products) {
      this.get('shoppingCart').empty();
    }
  },
  total: Ember.computed("shoppingCart.products.[]", function() {
    var cartTotal = 0;
    for(var i = 0; i < this.get("shoppingCart.products.length"); i++) {
      cartTotal += this.get("shoppingCart.products")[i].get("price");
    }
    return cartTotal;
  })
});
// All of our items are being push to our products[] with our add button. Because our added items are in an array we us a for loop with this.get() to access the object "shoppingCart" (Services are objects!)

// 'shoppingCart.products.[]' means you access the shoppingCart object, then the products array[], and finally access the product(s) inside the products array. (notice the plural vs singular)
