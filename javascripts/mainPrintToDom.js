const mainDiv = document.getElementById('main-div');

const printToDom = (categories, movieElements) => {
  mainDiv.innerHTML = domString(categories, movieElements);
};

const domString = (categories, movieElements) => {
  let stringToPrint = '';
  categories.forEach((item) => {
    stringToPrint += `<h4>${item.categoryName}</h4>`;
  });
  movieElements.forEach((item) => {
    stringToPrint += `<h4>${item.name}</h4>`;
  });
  return stringToPrint;
};

module.exports = printToDom;
