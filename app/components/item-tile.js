import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteItem(item) {
      if(confirm('Sure you wanna do that?')) {
        this.sendAction('deleteItem', item);
      }
    }
  }
});
