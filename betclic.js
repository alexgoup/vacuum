/*<a class="collapsed topNavA" cfg="{type:'h2h',level1:'Basketball'}">
*/
/*<a class="subNavA" cfg="{type:'h2h',level1:'Basketball',level2:'NBA'}">NBA</a>*/
var start = new Date().getTime();
var Horseman = require('node-horseman');
var horseman = new Horseman();
var today_games_betclic;

var med = new Date().getTime();
console.log(med-start);

horseman
  /*.userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')*/
  /*.userAgent('Chrome/54.0.2840.87')*/
  .userAgent('Safari/537.36')
  .open('https://en.betclic.com/football/brazilian-serie-a-e187')
  .waitForSelector('div.match-name')
/*  .wait(2000)*/
/*  .plainText()*/
.evaluate( function(selector1,selector2){
      var games = []; 
      var ngames = $(selector1).length;
      for(i=0;i<ngames-1;i++){
        games.push({
          title:$(selector1)[i.toString()].innerHTML,
          home_odd:$(selector2)[(3*i).toString()].innerHTML,
          draw_odd:$(selector2)[(3*i+1).toString()].innerHTML,
          away_odd:$(selector2)[(3*i+2).toString()].innerHTML,
        });
      }
      return  games     }
    ,'div.match-name > a', 'div.match-odds > div > span')
  .then(function(games){
    today_games_betclic = games;
    console.log(today_games_betclic);
    var end = new Date().getTime();
    console.log(end-start);
    return horseman.close();
  })