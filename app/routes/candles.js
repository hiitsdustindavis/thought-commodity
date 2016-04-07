import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('item', {
      orderBy: 'category',
      equalTo: 'candles'
    });
  },
  afterModel: function(model){
    return model.get('reviews');
  },
  actions: {
    deleteItem(item) {
      var review_deletions = item.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return item.destroyRecord();
      });
    }
  }
});
