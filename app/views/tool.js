import Ember from "ember";

export default Ember.View.extend({
  elementId: 'tool',
  classNames: ['foo', 'bar'],
  classNameBindings: ['isActive'],
  foo: false,
  firstName: 'paco',
  lastName: 'vilva',

  isActive: Ember.computed.bool('foo'),

  fullName: function() {
    return [this.get('firstName'), this.get('lastName')].join(' ');
  }.property('firstName', 'lastName'),

  setupTooltipster: function() {

  }.on('didInsertElement'),

  actions: {
    toggle: function() {
      this.toggleProperty('foo');
    }
  }
});