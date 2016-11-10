import Ember from 'ember';

export default Ember.Component.extend({
  watchUser: Ember.inject.service('watch-user'),
  actions: {
    removeFromWatch(developer){
      this.get('watchUser').remove(developer);
    }
  }
});
