function extract(id) {

    const text = document.getElementById('content').textContent;
    const regex = /\((.*?)\)/gm;
    let result = [];
    let matches = regex.exec(text);

    while (matches != null) {
        result.push(matches[1]);
        matches = regex.exec(text);
    }

    return result.join('; ');
}
