import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        item: this.get('item')
      };
      this.sendAction('saveReview', params);
      this.set('author', '');
      this.set('comment', '');
    }
  }
});
