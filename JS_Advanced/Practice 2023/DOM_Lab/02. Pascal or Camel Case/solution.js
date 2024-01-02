function solve() {
  const inputText = document.getElementById('text').value;
  const command = document.getElementById('naming-convention').value;
  const camelCase = 'Camel Case';
  const pascalCase = 'Pascal Case';
  let result;

  if (command == camelCase) {
    result = CamelConverter(inputText);
  } else if (command == pascalCase) {
    result = PascalConverter(inputText);
  } else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;

  function PascalConverter(text) {
    let textArr = text.split(' ');
    let result = '';
    for (let i = 0; i < textArr.length; i++) {
      const word = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1).toLowerCase();
      result += word;
    }
    return result;
  }

  function CamelConverter(text) {
    let textArr = text.split(' ');
    let result = textArr[0].toLowerCase();
    for (let i = 1; i < textArr.length; i++) {
      const word = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1).toLowerCase();
      result += word;
    }
    return result;
  }
}