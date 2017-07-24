import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({
    currencyFrom: null,
    currencyTo: null,
    currencies: Ember.String.w('BTC ETH EUR USD ZEC'),
    actions: {
        convertCurrency() {
            var From = this.currencyFrom;
            console.log('currencyFrom choice ', From);
            var To = this.currencyTo;
            console.log('currencyTo choice ', To);
            var amount = this.get('amount');
            console.log('amount ', amount);
            var convertToWhat = From.concat(To);
            ajax({
                url: 'https://citadel-miner.appspot.com/data/v1/converter?set=devtest',
                type: 'get'
            })
            .then(converterResponse => {
                var conversionValue = amount * converterResponse.From.quotes.convertToWhat;

                console.log(conversionValue + From);
                return conversionValue + To;
            });
        }
    }
});
