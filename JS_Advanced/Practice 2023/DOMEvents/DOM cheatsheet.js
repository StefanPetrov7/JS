// Selecting DOM elements 
const elementById = document.getElementById('content');
const elementQuerySelector = document.querySelector('#content');
const elementsByQuerySelectorAll = document.getElementById('ul li');

// Get <=> Set content 
elementById.textContent;  // => for static elements with hardcoded text ...
elementById.value;        // => for elements which are expected to receive input from the user

// Traversing DOM 
elementById.parentElement;
elementById.children;

// Create element
const paragraph = document.createElement('p');

// Adding to DOM 
elementById.appendChild(paragraph);

// Removing from DOM 
paragraph.remove();

// Events 
elementById.addEventListener('click', e => {
    console.log(e.target);
});

