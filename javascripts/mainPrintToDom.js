const addEvents = require('./events.js');

const mainDiv = document.getElementById('main-div');

const printToDom = (categories, movieElements) => {
  mainDiv.innerHTML += domString(categories, movieElements);
  addEvents.addCheckBoxEvents();
};

const domString = (categories, movieElements) => {
  let stringToPrint = '';
  stringToPrint += `<div class="left-side-stuff col-md-6">`;
  categories.forEach((item) => {
    stringToPrint += `<div id="left-container" class="col-md-10">`;
    stringToPrint +=  `<table class="table table-striped table-responsive table-hover table-condensed">`;
    stringToPrint += `<thead>`;
    stringToPrint += `<tr>`;
    stringToPrint += `<th>${item.categoryName}</th>`;
    stringToPrint += `</tr>`;
    stringToPrint += `</thead>`;
    stringToPrint += `<tbody>`;
    stringToPrint += `<tr>`;
    movieElements.forEach ((element) => {
      if (element.categoryId === item.id) {
        stringToPrint += `<td>`;
        stringToPrint += `<input class="checkbox" type="checkbox" id="${element.id}" data-category="${element.categoryId}" value="movie-element"><label for="contactChoice1">${element.name}</label>`;
        stringToPrint += `</td>`;
      }
    });
    stringToPrint += `</tr>`;
    stringToPrint += `</tbody>`;
    stringToPrint += `</table>`;
    stringToPrint += `</div>`;
  });
  stringToPrint += `</div>`;
  return stringToPrint;
};

module.exports = printToDom;
