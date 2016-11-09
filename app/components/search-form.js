import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    lookUp() {
      var params = {
        location: this.get('location'),
        language: this.get('language')
      };

      this.sendAction('lookUp', params);
    },
    updateLocation(value){
      this.set('location', value);
    },
    updateLanguage(value){
      this.set('language', value);
    }
  }
});
