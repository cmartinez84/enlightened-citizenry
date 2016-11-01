import config from '../config/environment';
import Ember from 'ember';

export default Ember.Component.extend({
  key: config.myApiKey,
  actions: {
    zipLookup() {
      var params = {
        queryString: "legislators/locate?apikey="+this.get('key')+'&zip=' + this.get('zip'),
        // query: '&zip=' + this.get('zip'),
        type: "legislators"
      };
      this.sendAction('toLookUp', params);
    },
    committeesLookup() {
      var params = {
        queryString: "committees?subcommittee=false&apikey="+this.get('key'),
        type: "committees"
      };
      this.sendAction('toLookUp', params);
    },
    billsLookup() {
      var query = "&page=1&per_page=50";
      var params = {
        queryString: "bills?apikey="+this.get('key') +query,
        type: "bills"
      };
      this.sendAction('toLookUp', params);
    },
    getSubCommittees(){
      var parent_committee_id = this.get('parent_committee_id');
      var params = {
        queryString: "committees?parent_committee_id="+ parent_committee_id +"&apikey="+this.get('key'),
        type: "subcommittees"
      };
      this.sendAction('toLookUp', params);
    }
  }
});
