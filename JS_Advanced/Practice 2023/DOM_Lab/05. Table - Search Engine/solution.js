function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let textValue = document.querySelector('#searchField').value.toLowerCase();
      const table = [...document.querySelectorAll('tbody tr')];

      table.forEach((tr) => {
         tr.classList.remove('select');
      });

      table.forEach((tr, i) => {
         
         let cells = Array.from(tr.children);

         if (cells.some(cell => cell.textContent.toLowerCase().includes(textValue))) {
            tr.classList.add('select');
         }
      });
   }
}

// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);
//    let table = document.querySelectorAll('tbody>tr');

//    function onClick() {

//       const input = document.getElementById('searchField').value.toLowerCase();

//       for (const row of table) {

//          if (row.textContent.toLowerCase().includes(input)) {
//             row.setAttribute('class', 'select');
//          } else {
//             row.removeAttribute('class');
//          }
//       }
//    }
// }