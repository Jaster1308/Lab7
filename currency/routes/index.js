var express = require('express');
var router = express.Router();

var exchangeRates = {'EUR' : 0.94, 'JPY': 112.86};
router.get('/', function(req, res){
    res.render('index');
});

router.get('/convert', function(req, res){
    var dollars = req.query.dollar_amount;
    var convertTo = req.query.to_currency;
    var convertFrom = req.query.from_currency;

    var rateTwo= exchangeRates[convertTo];
    var rate = exchangeRates[convertFrom];

    USCurrency =  dollars*rate;
    result2 = USCurrency/rateTwo;


    res.render('results', {dollars: dollars, UsCurrency: USCurrency, result2: result2, currency: convertFrom})
});
module.exports = router;