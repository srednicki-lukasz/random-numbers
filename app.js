// draw numbers
function getRandomNumbers(min, max, q) {
    let randomNumbers = [];

    for (let i = 0; i < q; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push(randomNumber);
    }

    let stringOutput = randomNumbers.join(', ');

    return stringOutput;
}

// press button to draw numbers
document.querySelector('.draw-numbers').addEventListener('click', () => {
    const min = parseInt(document.querySelector('.min').value);
    const max = parseInt(document.querySelector('.max').value);
    const q = parseInt(document.querySelector('.q').value);

    document.querySelector('.numbers').innerText = getRandomNumbers(min, max, q);
});