// const inputValue = document.getElementById('project-budget').innerHTML;
const allTheBoxes = document.getElementsByClassName('checkbox');
console.log('alltheBoxes: ', allTheBoxes);

const enableButtons = () => {
  const inputValue = document.getElementById('project-budget').innerHTML;
  if (inputValue !== '') {
    for (let i = 0; i < allTheBoxes.length; i++) {
      allTheBoxes[i].removeAttribute('disabled', '');
    }
  }
};

const disableButtons = () => {
  const inputValue = document.getElementById('project-budget').innerHTML;
  if (!inputValue) {
    for (let i = 0; i < allTheBoxes.length; i++) {
      allTheBoxes[i].setAttribute('disabled', '');
    }
  }
};

module.exports = {
  disableButtons,
  enableButtons,
};
