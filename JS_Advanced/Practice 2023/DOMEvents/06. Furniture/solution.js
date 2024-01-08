function solve() {
  let [inputTextArea, outPutTextArea] = document.querySelectorAll('textarea');
  let [generateButton, buyButton] = document.querySelectorAll('button');
  let table = document.querySelector('.table');

  generateButton.addEventListener('click', onGenerate);
  buyButton.addEventListener('click', buy);

  function buy() {

    let furnitures = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(x => x.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent),
      }));

    let result = 'Bought furniture: ';
    result += furnitures.map(fur => fur.name).join(', ');
    result += '\nTotal price: ';
    result += furnitures.reduce((sum, el) => sum += el.price, 0).toFixed(2);
    result += '\nAverage decoration factor: ';
    result += (furnitures.reduce((sum, el) => sum += el.decFactor, 0) / furnitures.length);
    outPutTextArea.value = result;
  }

  function onGenerate() {

    let furnitures = JSON.parse(inputTextArea.value);

    for (let i = 0; i < furnitures.length; i++) {

      let row = document.createElement('tr');
      let pName = createCell('p', furnitures[i].name);
      let pPrice = createCell('p', furnitures[i].price);
      let pImg = createCell('img', '', ['src', furnitures[i].img]);
      let pDecor = createCell('p', furnitures[i].decFactor);
      let pcheckBox = createCell('input', '', ['type', 'checkbox']);

      row.appendChild(pImg);
      row.appendChild(pName);
      row.appendChild(pPrice);
      row.appendChild(pDecor);
      row.appendChild(pcheckBox);
      table.querySelector('tbody').appendChild(row);
    }

    function createCell(type, content, attribute) {

      const cell = document.createElement('td');
      const cellValue = document.createElement(type);

      if (attribute) {
        cellValue.setAttribute(attribute[0], attribute[1]);
      }

      cell.textContent = content;
      cell.appendChild(cellValue);
      return cell;

    }
  }
}