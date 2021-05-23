function solve() {

  let input = document.getElementById('text').value;
  let param = document.getElementById('naming-convention').value;
  let result = '';

  if (param === 'Camel Case') {

    result = input.toLowerCase().split(' ').reduce((acc, cur) => {
      acc += (cur[0].toUpperCase() + cur.substring(1));
      return acc;
    })

  } else if (param === 'Pascal Case') {

    result = input.toLowerCase().split(' ').reduce((acc, cur, i, arr) => {
      acc += (cur[0].toUpperCase() + cur.substring(1));
      return acc;
    }, "")

  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;

}



// function solve() {

//   const input = document.getElementById('text').value.split(' ');
//   let cmd = document.getElementById('naming-convention').value;
//   let result = '';

//   if (cmd === 'Camel Case') {

//     result = input
//       .map(el => el.toLowerCase())
//       .reduce((returned, word, i) => {
//         i === 0 ? word : (word = word[0].toUpperCase() + word.slice(1));
//         return returned + word;
//       }, '');

//   } else if (cmd === 'Pascal Case') {

//     result = input
//       .map(el => el.toLowerCase())
//       .reduce((returned, word, i) => {
//         return returned + (word[0].toUpperCase() + word.slice(1))
//       }, '');

//   } else {
//     result = 'Error!';
//   }

//   document.getElementById('result').textContent = result;

// }




