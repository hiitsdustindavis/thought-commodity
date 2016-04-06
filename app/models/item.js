import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  price: DS.attr('number'),

  shoppingCart: Ember.inject.service(),
  inCart: Ember.computed('shoppingCart.products.[]', function() {
    return this.get('shoppingCart').includes(this);
  })
});
// Placing out shoppingCart service in our model works, but we will never be able to add multiples of the same item.

//The includes method in the shoppingCart service is called in item-detail which makes it so that if the item has been added to the products[] the add button(with the addToCart method) will be hidden and instead 'this item is already in your cart' will show.
