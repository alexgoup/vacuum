var Horseman = require('node-horseman');
var horseman = new Horseman();

horseman
  .open('http://www.google.com')
  .type('input[name="q"]', 'github')
  .click("button:contains('Google Search')")
  .waitForNextPage()
  .count("li.g")
  .then(function(numLinks){
	console.log("Number of links: " +numLinks);
	horseman.close();
  });