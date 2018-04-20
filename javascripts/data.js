let movieElements = [];
let categories = [];
let projectBudget = 0;
let currentBudget = 0;

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
  projectBudget += datas;
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
};
