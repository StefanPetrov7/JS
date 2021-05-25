function addItem() {
    let input = document.getElementById('newItemText');                      // => getting the element
    let element = createElement('li', input.value);                          // => creating new <li> element with the input value

    const deleteBtn = createElement('a', '[Delete]');                        // => creating delete button element <a [Delete]>
    deleteBtn.href = '#';                                                    // => attaching # ref to link the delete button

    deleteBtn.addEventListener('click', (ev) => {                            // => adding event to the delete button 'click' with a lambda for the delete action
        ev.target.parentNode.remove();
    })

    element.appendChild(deleteBtn);                                          // => attaching delete buuton to the <li> new created element

    document.querySelector('ul').appendChild(element);                       // => appending the <li> el to the <ul> list
    input.value = '';                                                        // => clearing the input value

    function createElement(type, content) {                                  // => create element factory pattern
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}






