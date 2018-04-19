let movieElements = [];
let categories = [];

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

module.exports = {
  setCategories,
  setMovieElements,
  getCategories,
  getMovieElements,
};
