function solve() {
  let input = document.getElementById('input').value.split('.');
  let paragraphs = [];
  let element = '';

  for (let i = 0; i < input.length; i++) {

    if (i % 3 === 0 && i !== 0) {
      paragraphs.push(element);
      element = ''
      element += input[i];
      continue;
    }
    element += input[i];
  }

  if (element != '') {
    paragraphs.push(element);
  }

  let div = document.getElementById('output');

  for (let i = 0; i < paragraphs.length; i++) {

    let par = `<p>${paragraphs[i] + '.'}</p>`;
    div.innerHTML += par;
  }
}


// function solve() {
//   const text = document.getElementById('input')
//     .value.split('.')
//     .filter((el) => el);

//   const appendTo = document.getElementById('output');

//   createParagraphs(text);

//   function createParagraphs(text) {
//     const paragraph = [];
//     while (text.length > 0) {
//       paragraph.push(text.splice(0, 3).join('.') + '.');
//     }
//     paragraph.forEach((pa) => (appendTo.innerHTML += `<p>${pa}</p>`));
//   }
// }