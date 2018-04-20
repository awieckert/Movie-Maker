const selectedItemsDiv = document.getElementById('left-container');

const printItems = (selectedItem) => {
  console.log('selectedDiv' ,selectedItemsDiv);
  selectedItemsDiv.innerHTML += itemToDom(selectedItem);
};

const itemToDom = (itemToPrint) => {
  let stringToPrint = '';
  stringToPrint += `<div class="col-md-6">`;
  stringToPrint += `<h3>${itemToPrint[0].name}: $${itemToPrint[0].cost}</h3>`;
  stringToPrint += `</div>`;
  return stringToPrint;
};

module.exports = printItems;
