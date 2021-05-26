function create(words) {

   const divContent = document.querySelector('#content');

   words.forEach(w => {
      const div = createElement('div', '');
      const p = createElement('p', w);
      p.style.display = 'none';
      divContent.appendChild(div);
      div.appendChild(p)
      div.addEventListener('click', (ev) => {
         ev.target.firstChild.style.display = '';
      })
   })

   function createElement(type, value) {
      const element = document.createElement(type);
      element.textContent = value;
      return element;
   }
}