/*<a class="collapsed topNavA" cfg="{type:'h2h',level1:'Basketball'}">
*/
/*<a class="subNavA" cfg="{type:'h2h',level1:'Basketball',level2:'NBA'}">NBA</a>*/

var Horseman = require('node-horseman');
var horseman = new Horseman();
var horseman2 = new Horseman();

//caca
var array = []; 

horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('https://www.sportsbetting.ag/sportsbook')
  .click('[cfg="{type:\'h2h\',level1:\'Basketball\',level2:\'NBA\'}"]')
/*  .waitForSelector('td.displayOdds')*/
  .wait(2000)
/*  .plainText()*/
  .text('td.moneylineodds')
/*  .count('tbody.event')*/
  .then(function(text){
  	console.log(text);
    return horseman.close();
  });

horseman2
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('https://www.sportsbetting.ag/sportsbook')
  .click('[cfg="{type:\'h2h\',level1:\'Basketball\',level2:\'NBA\'}"]')
/*  .waitForSelector('td.displayOdds')*/
  .wait(2000)
/*  .plainText()*/
  .text('td.col_teamname')
/*  .count('tbody.event')*/
  .then(function(text){
  	console.log(text);
    return horseman2.close();
  });