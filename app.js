// "Drill into elements"
// document.body.children[1].children[0].href = 'https://google.com';

//Queryng elements
// getElementById - query for element trough ID
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

// querySelector - like CSS selector, but matching  just first element
anchorElement = document.querySelector('a'); // a { color: red; }
anchorElement.href = 'https://academind.com';

//querySelectorAll - matches all elements
