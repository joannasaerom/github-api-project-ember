import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'https://api.github.com/search/users?q=location:' + params.location +  '+followers:>100+language:' + params.language + '?access_token=dc59464a6d2be7507b70311bb89fa84fff4701dd&per_page=100';
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.items;
    });
  }
});
