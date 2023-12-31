function extractText() {
    const el = [...document.getElementsByTagName('li')];
    const elText = el.map(x => x.textContent);
    const textArea = document.getElementById('result');
    return textArea.value = elText.join('\n');
}