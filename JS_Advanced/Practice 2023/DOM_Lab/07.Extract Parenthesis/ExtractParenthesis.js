function extract(content) {
    const text = document.getElementById('content').textContent;
    const regex = /\((.*?)\)/g;
    let matches = [...text.matchAll(regex)].map(match => match[1]);
    return matches.join('; ');
}