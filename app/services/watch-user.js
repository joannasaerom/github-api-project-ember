import Ember from 'ember';

export default Ember.Service.extend({
  users: [],
  add(user){
    if(!this.get('users').includes(user)){
      this.get('users').pushObject(user);
    },
  remove(user){
    this.get('users').removeObject(user);
  }
  }
});
