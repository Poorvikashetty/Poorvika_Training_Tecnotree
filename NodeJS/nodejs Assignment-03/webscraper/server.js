const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.google.com/search?q=javatpoint&rlz=1C1GCEB_enIN1045IN1045&oq=javatpoint&aqs=chrome..69i57j0i131i433i512j0i67j0i131i433i512l2j0i433i512j69i60l2.3173j0j7&sourceid=chrome&ie=UTF-8';
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(body);
    const links = $('a').map(function() {
      return $(this).text();
    }).get();
    fs.writeFile('output.txt', links.join('\n'), function(err) {
      if (err) {
        console.error(err);
      } else {
        console.log('Data saved to file');
      }
    });
  } else {
    console.error('Error fetching data');
  }
});
