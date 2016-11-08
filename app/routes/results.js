import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'https://api.github.com/search/users?q=location:' + params.location + '+language:' + params.language;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
