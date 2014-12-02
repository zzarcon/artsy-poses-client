import Ember from "ember";

export default Ember.ArrayController.extend({
  isFullScreenActive: false,

  actions: {
    increment: function() {
      this.incrementProperty('images');
    }
  }
});