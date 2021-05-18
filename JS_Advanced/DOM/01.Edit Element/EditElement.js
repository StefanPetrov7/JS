function editElement(ref, match, replacer) {
    const matcher = RegExp(match,'g');
    const result = ref.textContent.replace(matcher, replacer);
    ref.textContent = result;
}