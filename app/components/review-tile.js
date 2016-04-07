import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('item.reviews', 'sortBy')
});
