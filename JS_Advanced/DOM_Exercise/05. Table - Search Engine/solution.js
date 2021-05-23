function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let table = document.querySelectorAll('tbody>tr');

   function onClick() {

      const input = document.getElementById('searchField').value.toLowerCase();

      for (const row of table) {

         if (row.textContent.toLowerCase().includes(input)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }
   }
}
































