import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('item', {path: '/item/:item_id'});
  this.route('admin');
  this.route('posters');
  this.route('candles');
  this.route('inspiration');
  this.route('floppydisks');
  this.route('shopping-cart');
});

export default Router;
