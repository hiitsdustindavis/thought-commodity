import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        author: this.get('author'),
        comment: this.get('comment'),
        rating: parseInt(this.get('rating')),
        item: this.get('item'),
        date: this.get('date') ? this.get('date') : moment().format('MMMM Do YYYY, h:mm a')
      };
      this.sendAction('saveReview', params);
      this.set('author', '');
      this.set('comment', '');
    }
  }
});
