import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        rating: parseInt(this.get('rating')),
        item: this.get('item')
      };
      this.sendAction('saveReview', params);
      this.set('author', '');
      this.set('comment', '');
      console.log(params);
    }
  }
});
