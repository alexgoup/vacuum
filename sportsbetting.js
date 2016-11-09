/*<a class="collapsed topNavA" cfg="{type:'h2h',level1:'Basketball'}">
*/
/*<a class="subNavA" cfg="{type:'h2h',level1:'Basketball',level2:'NBA'}">NBA</a>*/

var Horseman = require('node-horseman');
var horseman = new Horseman();

//caca

horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('https://www.sportsbetting.ag/sportsbook')
  .click('[cfg="{type:\'h2h\',level1:\'Baseball\',level2:\'INTL\'}"]')
  .wait(2000)
  .waitForSelector('tbody.event')
  .count('tbody.event')
  .log() // prints out the number of results
  .close();