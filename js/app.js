// Get random integer
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get random integers
function getRandomIntegers(min, max, len) {
    let integers = [];

    if (max - min + 1 < len) {
        while (integers.length < len) {
            integers.push(getRandomInteger(min, max));
        }
    }
    else {
        while (integers.length < len) {
            integers.push(getRandomInteger(min, max));
            integers = Array.from(new Set(integers));
        }
    }

    return integers.join(', ');
}

// Create alert with random integers
document.querySelector('.draw').addEventListener('click', () => {
    const min = document.querySelector('.min').value;
    const max = document.querySelector('.max').value;
    const len = document.querySelector('.len').value;

    if (min === '' || max === '' || max < min) {
        alert('Invalid value for minumum or maximum');
    }
    else {
        const main = document.querySelector('main');
        const newDiv = document.createElement('div');

        const intMin = parseInt(min);
        const intMax = parseInt(max);
        const intLen = parseInt(len);

        intMax - intMin + 1 < intLen
            ? newDiv.className = 'alert alert-danger alert-dismissible mb-2'
            : newDiv.className = 'alert alert-success alert-dismissible mb-2';

        newDiv.innerHTML = `
            <button type='button' class='close h-100' style='font-size:1em;' data-dismiss='alert' aria-label='Close'>
                <span aria-hidden="true">&times;</span>
            </button>
            ${getRandomIntegers(intMin, intMax, intLen)}
        `;

        main.insertBefore(newDiv, main.firstChild);
    }
});