function solve() {

  let input = document.getElementById('input').value.split('.');

  let paragraphs = [];
  let paragraph = '';

  paragraphs = input.reduce((acc, cur, i, arr) => {

    if (i % 3 === 0 && i !== 0) {
      paragraphs.push(paragraph);
      paragraph = '';
      paragraph += cur;
      return paragraphs;
    }

    paragraph += cur;

    if (i === arr.length - 1) {
      paragraphs.push(paragraph);
      return paragraphs;
    }
  }, [])

  let div = document.getElementById('output');

  paragraphs.forEach(par => {

    let p = `<p>${par + '.'}</p>`
    div.innerHTML += p;
  });
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


// function solve() {
//   let input = document.getElementById('input').value.split('.');
//   let paragraphs = [];
//   let element = '';

//   for (let i = 0; i < input.length; i++) {

//     if (i % 3 === 0 && i !== 0) {
//       paragraphs.push(element);
//       element = ''
//       element += input[i];
//       continue;
//     }
//     element += input[i];
//   }

//   if (element != '') {
//     paragraphs.push(element);
//   }

//   let div = document.getElementById('output');

//   for (let i = 0; i < paragraphs.length; i++) {

//     let par = `<p>${paragraphs[i] + '.'}</p>`;
//     div.innerHTML += par;
//   }
// }