import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:asc'],
  sortedReviews: Ember.computed.sort('item.reviews', 'sortBy')
});
