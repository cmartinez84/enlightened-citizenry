import config from '../config/environment';

import Ember from 'ember';


export default Ember.Component.extend({
  key: config.myApiKey,

  actions:{
    billsLookup(page) {
      var query = "&page=" +page+"&per_page=50";
      var params = {
        queryString: "bills?apikey="+this.get('key') +query,
        type: "bills"
      };
      this.sendAction('toLookUp', params);
    }
  }

});
