import Ember from 'ember';

export default Ember.Component.extend({
    currencyFrom: null,
    currenciesFrom: Ember.String.w('BTC ETH EUR USD ZEC'),
    currencyTo: null,
    currenciesTo: Ember.String.w('BTC ETH EUR USD ZEC')
});
