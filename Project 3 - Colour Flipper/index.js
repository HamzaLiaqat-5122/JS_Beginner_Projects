const newColourBtnElement = document.getElementById('new-colour-button');
const currentColourElement = document.getElementById('current-colour');

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexValue() {
    const randomIndexPosition = Math.floor(
        Math.random() * hexValues.length
    );

    const RandomHexValue = hexValues[randomIndexPosition]

    return RandomHexValue;
}

function getRandomHexString(stringlength) {
    let hexString = '';
    for(let i = 0; i < stringlength; i++) {
        hexString += getRandomHexValue();
    }

    return hexString;
}

newColourBtnElement.addEventListener('click', () => {
    const RandomHexString = '#' + getRandomHexString(6);

    document.body.style.setProperty(
        'background-color',
        RandomHexString
    );

    currentColourElement.textContent = RandomHexString;
});