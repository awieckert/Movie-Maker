const mainDiv = document.getElementById('main-div');

const printToDom = (categories, movieElements) => {
  mainDiv.innerHTML = domString(categories, movieElements);
};

const domString = (categories, movieElements) => {
  let stringToPrint = '';
  // categories.forEach((item) => {
  //   stringToPrint += `<h4>${item.categoryName}</h4>`;
  // });
  // movieElements.forEach((item) => {
  //   stringToPrint += `<h4>${item.name}</h4>`;
  // });
  // return stringToPrint;

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
    movieElements.forEach ((element) => {
      // Add If statement to compare element ID and item ID
      stringToPrint += `<tr>`;
      stringToPrint += `<td>`;
      stringToPrint += `<input type="checkbox" id="${element.id}" data-${element.categoryId} value="movie-element"><label for="contactChoice1">${element.name}</label>`;
      stringToPrint += `</td>`;
      stringToPrint += `</tr>`;
    });
    stringToPrint += `</tbody>`;
  });
  return stringToPrint;
};

module.exports = printToDom;
