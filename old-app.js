// "Drill into elements"
// document.body.children[1].children[0].href = 'https://google.com';

//Queryng elements
// getElementById('some-id") - Select a HTML element by its ID (selects only one element, since IDs should be unique)
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

// querySelector('<some-css-selector>') - Selects the first matching (!) HTML element that is met / selected by the provided CSS selector; The CSS selector can basically be any kind of valid CSS selector (e.g. ID selector, tag type selector, class selector, combined selectors etc.)
anchorElement = document.querySelector('a'); // a { color: red; }
anchorElement.href = 'https://academind.com';

//querySelectorAll('<some-css-selector>') - Selects ALL matching HTML elements that are met / selected by the provided CSS selector

// document.getElementsByClassName('some-css-class')- Selects all HTML elements that have the provided CSS class

// document.getElementsByTagName('tag') - Selects all HTML elements that are of the provided HTML tag type

// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This lead to Google!';

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that shoul be removed
let firstH1Element = document.querySelector('h1');
// 2. Remove it!
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element);  - alternative

// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';
