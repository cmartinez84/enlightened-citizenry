import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
     toLookUp(params) {
       this.transitionTo('results',params.queryString, params.type);
     }
   }
});
