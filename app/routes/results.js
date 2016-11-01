import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/' +params.queryString;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return Ember.RSVP.hash({
        results: responseJSON.results,
        type: params.type
      });
  });
},
actions: {
   toLookUp(params) {
     this.transitionTo('results',params.queryString, params.type);
   },
   getSubcommittees(params){
     this.refresh('results',params.queryString, params.type);
   }
 }
});
