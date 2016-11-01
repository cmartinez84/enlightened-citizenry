import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/' +params.searchVar+ '?apikey=' +key+ params.query
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON);
     return responseJSON.results;
  });
  }
});
