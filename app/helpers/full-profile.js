import Ember from 'ember';

export function fullProfile(params) {
  console.log(params[0]);
  if (params[0] === undefined || params[0] === null){
    return new Ember.String.htmlSafe('<span> No Email for Fullcontact </span>');
  } else{
    // return {{#link-to 'fullcontact'}}Full Profile{{/link-to}};
  }
}

export default Ember.Helper.helper(fullProfile);
