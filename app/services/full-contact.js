import Ember from 'ember';

export default Ember.Service.extend({
  devProfile: {},
  developer: {},
  twitter_user: "",
  test: 'test',
  getProfile(params){
    var controller = this;
    var responseObject;
    var twitter;
    var url = 'https://api.fullcontact.com/v2/person.json?email='
    + params.email + '&apiKey=41c5b4d6ca4abb13';
    Ember.$.getJSON(url).then(function(responseJSON) {
      responseObject = responseJSON;
      for (var i = 0; i < responseJSON.socialProfiles.length; i++){
        if (responseJSON.socialProfiles[i].type === "twitter"){
          twitter = responseJSON.socialProfiles[i].username;
        }
      }

    }).then(function(){
      controller.set('devProfile', responseObject);
      controller.set('developer', params);
      controller.set('twitter_user', twitter);
    });

  }
});
