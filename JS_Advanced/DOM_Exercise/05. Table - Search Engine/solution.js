function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const table = document.querySelectorAll('tbody tr');

   function onClick() {

      const input = document.querySelector('#searchField').value.toLowerCase();

      for (let row of table) {
         
         if (row.textContent.toLowerCase().includes(input)) {
            row.setAttribute('class','select');
         }else{
            row.removeAttribute('class');
         }
      }
   }
}
