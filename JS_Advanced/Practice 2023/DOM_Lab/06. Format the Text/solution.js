function solve() {
  const inputText = document.querySelector('#input').value;
  const sentences = inputText.split('.').map(x => x.trim()).filter(Boolean);
  const div = document.querySelector('#output');

  while (sentences.length > 0) {

    let p = document.createElement('p');
    let counter = 3;

    while (counter > 0) {

      if (sentences.length == 0 ) {
        break;
      }

      let sentence = sentences.shift() + '.';
      p.textContent += sentence;
      counter--;

    }

    div.appendChild(p);
  }
}