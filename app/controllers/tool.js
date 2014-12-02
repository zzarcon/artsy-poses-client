import Ember from "ember";

export default Ember.ArrayController.extend({
  images: 1,

  actions: {
    increment: function() {
      this.incrementProperty('images');
    }
  }
});