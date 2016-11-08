import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    lookUp(params){
      this.transitionTo('results');
    }
  }
});
