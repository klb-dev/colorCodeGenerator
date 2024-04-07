const colorsWrapper = document.getElementById('colors-wrapper');
const hexWrapper = document.getElementById('hex-wrapper');
const btnGenerate = document.getElementById('btn-generate');

btnGenerate.addEventListener('click', generateColorScheme);

function getColors(colorSelector, modeSelector) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector}&mode=${modeSelector}&count=5`)
    .then(res => res.json())
    .then(data => {
        data.colors.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.style.backgroundColor = color.hex.value;
            colorBox.classList.add('color-box');
            colorsWrapper.appendChild(colorBox);

            const hex = document.createElement('p');
            hex.innerText = color.hex.value;
            hexWrapper.appendChild(hex);
        })
    });
    clearColors();
}

function generateColorScheme() {
    const colorSelector = document.getElementById('color-selector').value.slice(1);
    const modeSelector = document.getElementById('mode-selector').value;

    getColors(colorSelector, modeSelector);
}

function clearColors() {
    colorsWrapper.innerHTML = '';
    hexWrapper.innerHTML = '';
}
