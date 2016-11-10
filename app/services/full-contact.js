import Ember from 'ember';

export default Ember.Service.extend({
  devProfile: {},
  test: 'test',
  getProfile(params){
    var controller = this;
    var responseObject;
    var url = 'https://api.fullcontact.com/v2/person.json?email='
    + params + '&apiKey=41c5b4d6ca4abb13';
    Ember.$.getJSON(url).then(function(responseJSON) {
      responseObject = responseJSON;
      // console.log(responseObject);
    }).then(function(){
      controller.set('devProfile', responseObject);
    });
    // console.log(controller.get('devProfile'));
  }
});
