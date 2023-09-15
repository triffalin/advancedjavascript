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
