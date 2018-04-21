const data = require('./data.js');

const selectedItemsDiv = document.getElementById('right-container');
const currentBudgeth2 = document.getElementById('current-budget');

const printItems = (selectedItem) => {
  console.log('selectedDiv' ,selectedItemsDiv);
  selectedItemsDiv.innerHTML += itemToDom(selectedItem);
};

const itemToDom = (itemToPrint) => {
  let stringToPrint = '';
  stringToPrint += `<div id="${itemToPrint[0].categoryId}" class="col-md-6">`;
  stringToPrint += `<h3>${itemToPrint[0].name}: $${itemToPrint[0].cost}</h3>`;
  stringToPrint += `</div>`;
  // const setCurrentBudgetToThis = data.getCurrentBudget()
  const remainingBudget = (data.getProjectBudget() - data.getCurrentBudget()).toString();
  currentBudgeth2.innerHTML = '$' + remainingBudget;
  console.log('currentbudgeth2: ', currentBudgeth2);
  return stringToPrint;
};

module.exports = printItems;
