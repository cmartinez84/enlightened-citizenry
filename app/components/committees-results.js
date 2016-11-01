import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  key: config.myApiKey,
  actions: {
    getSubcommittees(committee_id){
      var params = {
        queryString: "committees?parent_committee_id="+ committee_id +"&apikey="+this.get('key'),
        type: "subcommittees"
      };
      this.sendAction('getSubcommittees', params);
    }
  }
});

// congress.api.sunlightfoundation.com/committees?parent_committee_id=JSTX&apikey=3fb51ab29c5741e7bcac0d248e6065a0
// /committees?committee_id= +COMITTEE ID+ &apikey=3fb51ab29c5741e7bcac0d248e6065a0
