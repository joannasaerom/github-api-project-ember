import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    lookUp() {
      var params = {
        location: this.get('location'),
        language: this.get('language')
      };
      this.sendAction('lookUp', params);
    }
  }
});
