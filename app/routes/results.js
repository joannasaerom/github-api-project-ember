import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'https://api.github.com/search/users?q=location:' + params.location +  '+followers:>100+language:' + params.language + '?access_token=dc59464a6d2be7507b70311bb89fa84fff4701dd&per_page=100';
    var candidates = [];
    Ember.$.getJSON(url).then(function(responseJSON){
      var users = JSON.parse(JSON.stringify(responseJSON.items));
      var usernames = [];


      for(var j = 0; j < users.length; j++){
        usernames.push(users[j].login);
      }
      console.log(usernames);
      for(var i = 0; i < usernames.length; i++){
        $.getJSON('https://api.github.com/users/' + usernames[i] + '/repos?&per_page=100&access_token=dc59464a6d2be7507b70311bb89fa84fff4701dd').then(function(responseJSON){
          var repos = JSON.parse(JSON.stringify(responseJSON));
          // console.log(repos);
          var topRepos = [];
          for (var k = 0; k < repos.length; k++){

            if (repos[k].language === params.language && repos[k].forks_count >= 2 && repos[k].watchers >= 2 && repos[k].stargazers_count >= 2){
              topRepos.push(repos[k]);

            }
          }
          if(topRepos.length >= 2){
            candidates.push(topRepos[0].owner.login);
          }


        });
      }

    });
    console.log(candidates);
    return candidates;
  }
});
