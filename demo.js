const productNameInputElement = document.getElementById('product-name');
const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
	const enteredText = event.target.value;
	const enteredTextLength = enteredText.length;

	const remainingCharacters = maxAllowedChars - enteredTextLength;

	remainingCharsElement.textContent = remainingCharacters;

	if (remainingCharacters <= 10) {
		remainingCharacters.classList.add('warning');
		productNameInputElement.classList.add('warning');
	}
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);
