import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/' +params.searchVar+ '?apikey=' +key+ params.query
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return Ember.RSVP.hash({
        results: responseJSON.results,
        type: params.type
      });
  });
  }
});
