/*<a class="collapsed topNavA" cfg="{type:'h2h',level1:'Basketball'}">
*/
/*<a class="subNavA" cfg="{type:'h2h',level1:'Basketball',level2:'NBA'}">NBA</a>*/

var Horseman = require('node-horseman');
var horseman = new Horseman();

horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('https://www.pinnacle.com/en/odds/match/basketball/usa/nba?sport=True')
/*  .waitForSelector('td.displayOdds')*/
  .wait(2000)
/*  .plainText()*/
  .text('span.ng-binding.ng-scope')
/*  .count('tbody.event')*/
  .then(function(text){
  	console.log(text);
    return horseman.close();
  });

