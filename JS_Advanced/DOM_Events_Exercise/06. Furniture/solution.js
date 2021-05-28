// function solve() {

//   const textAreas = document.querySelectorAll('textarea');
//   const buttons = document.querySelectorAll('button');
//   const body = document.querySelector('tbody');

//   buttons[0].addEventListener('click', () => {
//     const arr = JSON.parse(textAreas[0].value);

//     for (const el of arr) {

//       const row = document.createElement('tr');

//       const cellImg = createCell('img', '', ['src', el.img]);
//       const cellName = createCell('p', el.name);
//       const cellPrice = createCell('p', el.price);
//       const cellDecor = createCell('p', el.decFactor);
//       const cellCheck = createCell('input', '', ['type', 'checkbox']);

//       row.appendChild(cellImg);
//       row.appendChild(cellName);
//       row.appendChild(cellPrice);
//       row.appendChild(cellDecor);
//       row.appendChild(cellCheck);
//       body.appendChild(row);
//     }

//     function createCell(type, text, attribute) {
//       const cell = document.createElement('td');
//       const content = document.createElement(type);

//       if (attribute) {
//         content.setAttribute(attribute[0], attribute[1]);
//       }

//       content.textContent = text;
//       cell.appendChild(content);
//       return cell;
//     }
//   })

//   buttons[1].addEventListener('click', () => {

//     const furnitures = Array.from(body.querySelectorAll('input[type=checkbox]:checked'))
//       .map(el => el.parentNode.parentNode);

//     const result = {
//       bought: [],
//       price: 0,
//       decor: 0,
//     }

//     for (const row of furnitures) {
//       const cells = row.children;
//       const name = cells[1].children[0].textContent;
//       result.bought.push(name);

//       const price = Number(cells[2].children[0].textContent);
//       result.price += price;

//       const decor = Number(cells[3].children[0].textContent);
//       result.decor += decor;
//     }

//     textAreas[1].value = `Bought furniture: ${result.bought.join(', ')}
// Total price: ${result.price.toFixed(2)}
// Average decoration factor: ${result.decor / result.bought.length}`;
//   })
// }



function solve() {

  const [input, output] = document.getElementsByTagName('textarea');
  const tBody = document.querySelector('tbody');
  const [generate, buy] = document.querySelectorAll('button');
  document.getElementById('exercise').addEventListener('click', onClick);

  function onClick(ev) {

    if (ev.target === generate) {

      const arr = JSON.parse(input.value);

      for (const el of arr) {

        const row = document.createElement('tr');
        const pName = createCell('p', el.name);
        const pPrice = createCell('p', el.price);
        const pImg = createCell('img', '', ['src', el.img]);
        const pDecor = createCell('p', el.decFactor);
        const pCheckBox = createCell('input', '', ['type', 'checkbox'])

        row.appendChild(pImg);
        row.appendChild(pName);
        row.appendChild(pPrice);
        row.appendChild(pDecor);
        row.appendChild(pCheckBox);
        tBody.appendChild(row);
      }
      input.value = ''
    }

    if (ev.target === buy) {

      const furnitures = Array.from(tBody.querySelectorAll('input[type=checkbox]:checked'))
        .map(el => (el.parentNode.parentNode));

      const result = {
        bought: [],
        totalPrice: 0,
        decor: 0,
      }

      for (const row of furnitures) {
        result.bought.push(row.children[1].textContent);
        result.totalPrice += Number(row.children[2].textContent);
        result.decor += Number(row.children[3].textContent);
      }

      let outputText = `Bought furniture: ${result.bought.join(', ')}
Total price: ${result.totalPrice.toFixed(2)}
Average decoration factor: ${result.decor / result.bought.length}`;

      output.value = outputText;
    }
  }

  function createCell(type, content, attribute) {

    const cell = document.createElement('td');
    const cellValue = document.createElement(type);

    if (attribute) {
      cellValue.setAttribute(attribute[0], attribute[1])
    }

    cellValue.textContent = content
    cell.appendChild(cellValue);
    return cell;
  }
}


// function solve() {
//   const [generateBtn, buyBtn] = document.querySelectorAll('button');
//   const [input, output] = document.querySelectorAll('textarea');
//   const body = document.querySelector('tbody');

//   generateBtn.addEventListener('click', generate);
//   buyBtn.addEventListener('click', buy);

//   function generate() {
//       const products = JSON.parse(input.value);
//       input.value = '';

//       for (const product of products) {
//           const row = document.createElement('tr');
//           //img
//           const tdImage = createElement('img', ' ', ['src', product.img]);
//           //name
//           const tdName = createElement('p', product.name);
//           //price
//           const tdPrice = createElement('p', product.price);
//           //decFactor
//           const tdFactory = createElement('p', product.decFactor);
//           //checkbox
//           const tdCheck = createElement('input', ' ', ['type', 'checkbox']);
//           //append data in row
//           row.appendChild(tdImage);
//           row.appendChild(tdName);
//           row.appendChild(tdPrice);
//           row.appendChild(tdFactory);
//           row.appendChild(tdCheck);
//           //append in tbody
//           body.appendChild(row);
//       }

//       function createElement(type, textContent, attribute) {
//           const td = document.createElement('td');
//           const content = document.createElement(type);
//           if (attribute) {
//               content.setAttribute(attribute[0], attribute[1]);
//           }
//           content.textContent = textContent;
//           td.appendChild(content);

//           return td;
//       }
//   };

//   function buy() {
//       const chekedProduct = Array.from(document.querySelectorAll("input[type='checkbox']"));
//       const bought = { furniture: [], bill: 0, decFactor: 0 };

//       chekedProduct.forEach((box) => {
//           if (box.checked) {
//               const productName = box.parentNode.parentNode.children[1].textContent;
//               const price = Number(box.parentNode.parentNode.children[2].textContent);
//               const decFactor = Number(box.parentNode.parentNode.children[3].textContent);

//               bought.furniture.push(productName);
//               bought.bill += price;
//               bought.decFactor += decFactor;
//           }
//       });

//       output.value = `Bought furniture: ${bought.furniture.join(', ')}\nTotal price: ${bought.bill.toFixed(2)}\nAverage decoration factor: ${bought.decFactor/bought.furniture.length}`;
//   };
// }