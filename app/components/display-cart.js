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
