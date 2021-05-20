function search() {

   let elements = document.querySelectorAll('#towns>li');
   let input = document.querySelector('input').value;
   let result = document.getElementById('result');
   let sum = 0;

   for (let li of elements) {
      if (li.textContent.toLowerCase().includes(input.toLowerCase())) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         sum++
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }
   result.textContent = `${sum} matches found`
}










// function search() {
//    let elements = Array.from(document.querySelectorAll('#towns>li'));
//    let lookUp = document.getElementById('searchText').value;
//    let length = lookUp.length
//    let matches = [];

//    for (let i = 0; i < elements.length; i++) {

//       let word = elements[i].textContent;
//       let compare = word.substring(0, length);

//       if (compare == lookUp) {
//          matches.push(elements[i])
//       }
//    }

//    Array.from(document.querySelectorAll('ul li'))
//       .map((entry) => {
//          matches.map((match) => {
//             if (match.textContent === entry.textContent) {
//                entry.style.fontWeight = 'bolder';
//                entry.style.textDecoration = 'underline';
//             }
//          })
//       });

//    document.getElementById('result').innerText = matches.length + ' ' + 'matches found';

// }