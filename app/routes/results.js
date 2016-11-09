import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'https://api.github.com/search/users?q=location:' + params.location +  '+followers:>100+language:' + params.language + '?access_token=dc59464a6d2be7507b70311bb89fa84fff4701dd&per_page=100';
    var candidatesInformation = [];
    var candidates = [];

    Ember.$.getJSON(url).then(function(responseJSON){
      var users = responseJSON.items;

      var usernames = [];
      for(var j = 0; j < users.length; j++){
        usernames.push(users[j].login);
      }

      var repos = [];
      for(var i = 0; i < usernames.length; i++){
        repos.push(Ember.$.getJSON('https://api.github.com/users/' + usernames[i] + '/repos?&per_page=100&access_token=dc59464a6d2be7507b70311bb89fa84fff4701dd'));
      }

      $.when.apply($, repos).done(function(){

        var allrepos = [];
        for(var i = 0, len = arguments.length; i < len; i++){
          allrepos.push(arguments[i][0]);
        }

        var candidates = [];
        for(var j = 0; j < allrepos.length; j++){
          var topRepos = [];
          for (var k = 0; k < allrepos[j].length; k++){
            if (allrepos[j][k].language === params.language && allrepos[j][k].forks_count >= 2 && allrepos[j][k].watchers >= 2 && allrepos[j][k].stargazers_count >= 2){
              topRepos.push(allrepos[j][k]);
            }
          }
          if(topRepos.length >= 2){
            candidates.push(topRepos[0].owner.login);
          }
        }

        var candidatesInfo = [];
        for (var l = 0; l < candidates.length; l++){
          candidatesInfo.push(Ember.$.getJSON('https://api.github.com/users/' + candidates[l] +'?access_token=dc59464a6d2be7507b70311bb89fa84fff4701dd'));
        }

        $.when.apply($, candidatesInfo).done(function(){


          for(var m = 0, len = arguments.length; m < len; m++){
            candidatesInformation.pushObject(arguments[m][0]);
          }
          console.log(candidatesInformation);



        }); //end the second when
      }); //end the first when
    }); // end the initial Github API call
    return candidatesInformation;
  } //end model
}); // end ember export
