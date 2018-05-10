let movieElements = [];
let categories = [];
let projectBudget = 0;
let currentBudget = 0;
let currentPercent = 0;

const currentBudgetH2 = document.getElementById('current-budget');
const makeTheMovie = document.getElementById('make-movie');

const setMovieElements = (data) => {
  movieElements = data;
};

const getMovieElements = () => {
  return movieElements;
};

const setCategories = (datums) => {
  categories = datums;
};

const getCategories = () => {
  return categories;
};

const setProjectBudget = (datas) => {
  projectBudget = datas;
};

const getProjectBudget = () => {
  return projectBudget;
};

const setCurrentBudget = (datas) => {
  currentBudget += datas;
};

const getCurrentBudget = (datas) => {
  return currentBudget;
};

const resetProjectBudget = () => {
  projectBudget = 0;
};

const resetCurrentBudget = () => {
  currentBudget = 0;
};

const setCurrentPercent = () => {
  currentPercent = ((currentBudget / projectBudget) * 100);
};

const getCurrentPercent = () => {
  return currentPercent;
};

const compareBudgets = () => {
  if (projectBudget >= currentBudget) {
    currentBudgetH2.classList.add('green');
    currentBudgetH2.classList.remove('red', 'white');
  } else {
    currentBudgetH2.classList.remove('green', 'white');
    currentBudgetH2.classList.add('red');
  }
  setCurrentPercent();
};

const canIMakeMovie = () => {
  const containerCollection = document.getElementById('right-container').children;
  const arrayToCheck = [];
  for (let k = 0; k < containerCollection.length; k++) {
    arrayToCheck.push(containerCollection[k].id);
  }
  if (arrayToCheck.indexOf(`category1`) !== -1 && arrayToCheck.indexOf(`category2`) !== -1 && arrayToCheck.indexOf(`category3`) !== -1 && arrayToCheck.indexOf(`category4`) !== -1 && (currentBudget <= projectBudget)) {
    makeTheMovie.innerHTML = `<h2>Hell Yeah! Make the Movie!</h2>`;
  } else {
    makeTheMovie.innerHTML = `<h2>No, No, You no make the movie...</h2>`;
  };
};

module.exports = {
  setCategories,
  setMovieElements,
  getCategories,
  getMovieElements,
  setCurrentBudget,
  setProjectBudget,
  getCurrentBudget,
  getProjectBudget,
  resetCurrentBudget,
  resetProjectBudget,
  compareBudgets,
  currentPercent,
  getCurrentPercent,
  canIMakeMovie,
};
