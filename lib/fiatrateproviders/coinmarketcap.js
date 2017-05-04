var _ = require('lodash');

var FIAT_SYMBOL = 'USD';

var provider = {
  name: 'coinmarketcap',
  url: 'https://api.coinmarketcap.com/v1/ticker/decred/?convert=' + FIAT_SYMBOL,
  parseFn: function(raw) {
    var rates = _.compact(_.map(raw, function(d) {
      if (!d.price_usd) return null;
      return {
        code: FIAT_SYMBOL,
        value: d.price_usd,
      };
    }));
    return rates;
  },
};

module.exports = provider;
