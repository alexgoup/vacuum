// Print all of the news items on Hacker News 
var jsdom = require("jsdom");
 
jsdom.env({
  url: "https://www.betonline.ag/sportsbook",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (err, window) {
    var $ = window.$;
    console.log("HN Links");
    $("tr.h2hSeq:not(:last) td").each(function() {
      console.log(" -", $(this).text());
    });
  }
});