import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        searchVar: "legislators/locate",
        query: '&zip=' + this.get('zip'),
        type: "legislators"
      };
      this.sendAction('zipLookup', params);
    },
    committeesLookup() {
      var params = {
        searchVar: "committees",
        query:"&",
        type: "committees"
      };
      this.sendAction('committeesLookup', params);
    },
    billsLookup() {
      var params = {
        searchVar: "bills",
        query:"&",
        type: "bills"
      };
      this.sendAction('billsLookup', params);
    }
  }
});
