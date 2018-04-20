const data = require('./data.js');
const printItems = require('./secondPrintToDom.js');
const allTheCheckBoxes = document.getElementsByClassName('checkbox');

const addCheckBoxEvents = () => {
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

module.exports = {
  addCheckBoxEvents,
};
