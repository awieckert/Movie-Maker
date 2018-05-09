const data = require('./data.js');
const printItems = require('./secondPrintToDom.js');
const enable = require('./disabled.js');
const allTheCheckBoxes = document.getElementsByClassName('checkbox');
const submitBudgetButton = document.getElementById('submit-budget');
const projectBudgetH1 = document.getElementById('project-budget');
const progressBar = document.getElementById('progress-bar');

const addCheckBoxEvents = () => {
  submitBudgetButton.addEventListener('click', submitBudget);
  for (let i = 0; i < allTheCheckBoxes.length; i++) {
    allTheCheckBoxes[i].addEventListener('change', moveToItems);
  };
};

const moveToItems = (e) => {
  console.log('event: ', e);
  if (e.target.checked) {
    const targetId = e.target.id;
    const currentElement = [];
    data.getMovieElements().forEach((item) => {
      if (targetId === item.id) {
        currentElement.push(item);
      }
    });
    data.setCurrentBudget(currentElement[0].cost);
    printItems(currentElement);
    data.compareBudgets();
    console.log('progressBar: ', progressBar);
    progressBar.setAttribute('style', 'width: ' + data.getCurrentPercent() + '%;');
    data.canIMakeMovie();
  }
};

const submitBudget = (e) => {
  const desiredBudget = e.target.parentNode.children[0].children[0].value;
  data.setProjectBudget(desiredBudget);
  projectBudgetH1.innerHTML = data.getProjectBudget();
  enable.enableButtons();
  enable.disableButtons();
};

module.exports = {
  addCheckBoxEvents,
};
