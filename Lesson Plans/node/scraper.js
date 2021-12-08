const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

function removeLineBreaksString(str) {
  return str.replace(/(\r\n|\n|\r)/gm, '');
}

let dataHolder = [];

axios(
  'https://newyork.craigslist.org/search/fua?query=lamp&purveyor-input=all'
).then((response) => {
  const $ = cheerio.load(response.data);
  let results = $('#search-results').find('li.result-row');
  results.each((d, resultEl) => {
    let header = $(resultEl).find('.result-info .result-heading').text();
    header = removeLineBreaksString(header);

    let dateTime = $(resultEl).find('.result-info .result-date').attr('title');

    let link = $(resultEl).find('.result-image').attr('href');

    let dataObj = {
      header: header,
      time: dateTime,
      link: link,
    };
    dataHolder.push(dataObj);
  });

  //write to file
  let jsonString = JSON.stringify(dataHolder);
  fs.writeFile('./lamps.json', jsonString, (err) => {
    if (err) {
      throw err;
    }
    console.log('JSON data is saved.');
  });
});
