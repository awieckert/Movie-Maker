let movieElements = [];
let categories = [];
let projectBudget = 0;
let currentBudget = 0;
let currentPercent = 0;

const currentBudgetH2 = document.getElementById('current-budget');

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
    currentBudgetH2.classList.remove('red');
  } else {
    currentBudgetH2.classList.remove('green');
    currentBudgetH2.classList.add('red');
  }
  setCurrentPercent();
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
};
