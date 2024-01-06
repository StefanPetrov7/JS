// function create(words) {
//    let input = words;
//    let rootElement = document.querySelector('#content');

//    for (let i = 0; i < words.length; i++) {
//       let div = document.createElement('div');
//       let p = document.createElement('p');
//       p.textContent = words[i];
//       p.style.display = 'none';
//       div.appendChild(p);
//       div.addEventListener('click', showText);
//       rootElement.appendChild(div);
//    }

//    function showText(event){
//       event.target.firstChild.style.display = 'block';
//    }
// }


// => solved using event delegation

function create(words) {
   let rootElement = document.querySelector('#content');
   rootElement.addEventListener('click', showText);

   for (let i = 0; i < words.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = words[i];
      p.style.display = 'none';
      div.appendChild(p);
      rootElement.appendChild(div);
   }

   function showText(event) {

      if (event.target == event.currentTarget) {
         return;
      }

      if (event.target.firstChild.style.display == 'none') {
         event.target.firstChild.style.display = 'block';
      } 
   }
}