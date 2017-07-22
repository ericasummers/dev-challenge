import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    convertCurrency(params) {
      return https.get('https://citadel-miner.appspot.com/data/v1/converter?set=devtest')
      .then(converterResponse => {

      });
      // var newQuestion = this.store.createRecord('question', params);
      // newQuestion.save();
      // this.transitionTo('index');
    }
  }
});