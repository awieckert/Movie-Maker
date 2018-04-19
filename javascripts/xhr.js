
const xhrRequest = (successFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest;
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/movie-elements.json');
  myRequest.send();
};

const xhrRequest2 = (successFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest;
  myRequest.addEventListener('load', successFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/categories.json');
  myRequest.send();
};

module.exports = {
  xhrRequest,
  xhrRequest2,
};
