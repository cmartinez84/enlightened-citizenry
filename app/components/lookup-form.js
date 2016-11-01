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
    }
  }
});
