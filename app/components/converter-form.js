import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({
    currencyFrom: null,
    currencyTo: null,
    amount: null,
    finalConversion: null,
    currencies: Ember.String.w('BTC ETH EUR USD ZEC'),
    actions: {
        convertCurrency() {
            var From = this.currencyFrom;
            var To = this.currencyTo;
            this.set('amount', this.get('amount'));
            var convertToWhat = From.concat(To);
            ajax({
                url: 'https://citadel-miner.appspot.com/data/v1/converter?set=devtest',
                type: 'get'
            })
            .then(converterResponse => {
                console.log(converterResponse);
                var conversionValue = this.amount * converterResponse[From].quotes[convertToWhat];
                this.set('finalConversion', conversionValue.toFixed(2) + ' ' + To);
            });
        }
    }
});
