function extractText() {

    const items = [...document.getElementsByTagName('li')];
    let result = items.map(entry => entry.textContent);
    document.getElementById('result').value = result.join('\n');
}