import Ember from 'ember';

export function itemRating(params) {
  var itemRating = params[0].get('rating');

  if(itemRating === 5) {
    return Ember.String.htmlSafe('<p>&bigstar; &bigstar; &bigstar; &bigstar; &bigstar;</p>');
  } else if(itemRating === 4) {
    return Ember.String.htmlSafe('<p>&bigstar; &bigstar; &bigstar; &bigstar;</p>');
  } else if(itemRating === 3) {
    return Ember.String.htmlSafe('<p>&bigstar; &bigstar; &bigstar;</p>');
  } else if(itemRating === 2) {
    return Ember.String.htmlSafe('<p>&bigstar; &bigstar;</p>');
  } else {
  return Ember.String.htmlSafe('<p>&bigstar;</p>');
  }
}

export default Ember.Helper.helper(itemRating);
