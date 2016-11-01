import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
     zipLookup(params) {
       this.transitionTo('results',params.searchVar, params.query, params.type);
     },
     committeesLookup(params) {
       this.transitionTo('results',params.searchVar, params.query, params.type);
     },
     billsLookup(params) {
       this.transitionTo('results',params.searchVar, params.query, params.type);
     }
   }
});
