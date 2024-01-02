function search() {
   let inputText = document.querySelector('#searchText').value;
   const towns = [...document.querySelectorAll('#towns li')];  // from node list to array
   let displayBox = document.querySelector('#result');

   // Clear the text from prev search => Not included in the task. 

   towns.forEach(town => {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = 'none';
   });

   let reducedTowns = [];

   // Check if input is empty string to not select all the values!

   if (inputText != '') {

      reducedTowns = towns.reduce((acc, el, i, arr) => {

         if (el.textContent.toLowerCase().includes(inputText.toLowerCase())) {
            acc.push(el);
         }
         return acc;
      }, []);

      reducedTowns.forEach(town => {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      });
   }

   displayBox.textContent = reducedTowns.length + ' ' + 'matches found';
}


// function search() {

//    let elements = document.getElementById('towns');  // will hold the HTML collection .children which need to be cast to array
//    let input = document.getElementById('searchText').value;   // will take the input text content

//    let matches = 0;

//    Array.from(elements.children).map(el => {

//       if (el.textContent.toLowerCase().includes(input.toLowerCase())) {
//          matches++;
//          el.style.fontWeight = 'bolder';
//          el.style.textDecoration = 'underline';
//       }
//    })

//    document.getElementById('result').textContent = `${matches} matches found`;

// }