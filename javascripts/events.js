const data = require('./data.js');
const printItems = require('./secondPrintToDom.js');
const allTheCheckBoxes = document.getElementsByClassName('checkbox');
const submitBudgetButton = document.getElementById('submit-budget');
const projectBudgetH1 = document.getElementById('project-budget');

const addCheckBoxEvents = () => {
  submitBudgetButton.addEventListener('click', submitBudget);
  for (let i = 0; i < allTheCheckBoxes.length; i++) {
    allTheCheckBoxes[i].addEventListener('click', moveToItems);
  };
};

const moveToItems = (e) => {
  console.log('checkbox Event: ', e);
  const targetId = e.target.id;
  console.log('Target ID: ', targetId);
  const currentElement = [];
  data.getMovieElements().forEach((item) => {
    if (targetId === item.id) {
      currentElement.push(item);
    }
  });
  console.log('movieElements: ', currentElement);
  data.setCurrentBudget(currentElement[0].cost);
  printItems(currentElement);
};

const submitBudget = (e) => {
  const desiredBudget = e.target.parentNode.children[0].children[0].value;
  data.setProjectBudget(desiredBudget);
  projectBudgetH1.innerHTML = data.getProjectBudget();
};

module.exports = {
  addCheckBoxEvents,
};
