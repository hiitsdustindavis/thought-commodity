import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveItem(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        price: this.get('price'),
        image: this.get('image'),
        category: this.get('category')
      };
      this.sendAction('saveItem', params);
    }
  }
});
