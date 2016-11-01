import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        searchVar: "legislators/locate",
        zip: this.get('zip'),
        query: '&zip=' + this.get('zip')
      };
      console.log(params);
      this.sendAction('zipLookup', params);
    }
  }
});
