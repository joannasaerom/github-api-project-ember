import Ember from 'ember';

export function emailLink(params) {
  if (params[0] === undefined || params[0] === null){
    return new Ember.String.htmlSafe('<span> </span>');
  } else{
    return new Ember.String.htmlSafe('<a href="mailto:' + params[0] +'"><i class="glyphicon glyphicon-envelope"></i></a>');
  }

}

export default Ember.Helper.helper(emailLink);
