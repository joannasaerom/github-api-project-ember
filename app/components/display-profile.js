import Ember from 'ember';

export default Ember.Component.extend({
  fullContact: Ember.inject.service('full-contact'),
  // didInsertElement: function(params) {
  //   console.log(this.get('fullContact').twitter_user);
  //   var a  = window.document.createElement('a');
  //   a.href = this.get('fullContact.twitter_user');
  //   a.class = 'twitter-timeline';
  //   window.$('#twitter').append(a);
  //   var script = window.document.createElement('script');
  //   script.id = 'twitter-script';
  //   script.src = '//platform.twitter.com/widgets.js';
  //   script.charset = 'utf-8';
  //   window.$('#twitter').append(script);
  // }
});
