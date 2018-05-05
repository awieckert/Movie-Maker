const inputValue = document.getElementById('project-budget').value;
const allTheBoxes = document.getElementsByClassName('checkbox');
console.log('alltheBoxes: ', allTheBoxes);
// const enableButtons = () => {

// };

const disableButtons = () => {
  if (inputValue === '') {
    for (let i = 0; i < allTheBoxes.length; i++) {
      allTheBoxes[i].setAttribute('disabled');
    }
  }
};

module.exports = {
  disableButtons,
};
