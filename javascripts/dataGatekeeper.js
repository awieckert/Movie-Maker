const xhrRequest = require('./xhr.js');
const data = require('./data.js');
const printToDom = require('./mainPrintToDom.js');

function grabMovieElements () {
  const allTheThings = JSON.parse(this.responseText).thingsNStuff;
  data.setMovieElements(allTheThings);
  xhrRequest.xhrRequest2(callPrintToDom, WTF);
};

function callPrintToDom () {
  const categoriesData = JSON.parse(this.responseText).categories;
  data.setCategories(categoriesData);
  const movieElements = data.getMovieElements();
  printToDom(categoriesData, movieElements);
};

function WTF () {
  console.log('PISS!');
};

const initializer = () => {
  xhrRequest.xhrRequest(grabMovieElements, WTF);
};

module.exports = initializer;
