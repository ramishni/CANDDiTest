const request = require('request');
const cheerio = require('cheerio');
var Knwl = require("knwl.js");

var knwlInstance = new Knwl('english');

request('https://www.canddi.com/contact', (error, response, html) => {
    if (!error && response.statusCode == 200) {

        const $ = cheerio.load(html);
        knwlInstance.register('dates', require('C:/Users/ra/AppData/Roaming/Code/User/Me 01/node_modules/knwl.js/default_plugins/dates'));
        // knwlInstance.init("This is a string. This was written on the 2nd of June, of 2015.");
        knwlInstance.init($);
        var dates = knwlInstance.get('phones');
        console.log(dates);
        // knwlInstance.register('dates', require('./node_modules/knwl.js/default_plugins/default_plugins/dates'));
        // console.log($.text());
        // console.log($.text());
    }
});
