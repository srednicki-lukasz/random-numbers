class RandomNumbers {
    
    /**
     * Random numbers array.
     * @memberof RandomNumbers
     */
    numbers = [];

    constructor(container, minimum, maximum, length) {
        this.container = container;
        this.minimum = minimum;
        this.maximum = maximum;
        this.length = length;
    }

    /**
     * Draw random number.
     * @memberof RandomNumbers
     */
    drawNumber() {
        const min = parseInt(this.minimum.value);
        const max = parseInt(this.maximum.value);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Draw random numbers.
     * @memberof RandomNumbers
     */
    drawNumbers() {
        this.numbers = [];

        if (this.maximum.value - this.minimum.value + 1 < this.length.value) {
            while (this.numbers.length < this.length.value) {
                this.numbers.push(this.drawNumber());
            }
        }
        else {
            while (this.numbers.length < this.length.value) {
                this.numbers.push(
                    this.drawNumber()
                );
                this.numbers = Array.from(new Set(this.numbers));
            }
        }

        this.createAlert();
    }

    /**
     * Create alert with numbers.
     * @memberof RandomNumbers
     */
    createAlert() {
        if (this.minimum.value === ''
            || this.maximum.value === ''
            || this.length.value  < 0
            || this.length.value.includes('.')
            || this.length.value.includes(',')
            || this.maximum.value < this.minimum.value) {
            alert('Invalid value for minimum, maximum or length.');
        }
        else {
            const div = document.createElement('div');

            this.maximum.value - this.minimum.value + 1 < this.length.value
            ? div.className = 'alert alert-danger alert-dismissible m-1'
            : div.className = 'alert alert-success alert-dismissible m-1';

            div.innerHTML = `
                ${this.numbers.join(', ')}
                <button class='close h-100' style='font-size:1em;' data-dismiss='alert'>
                    &times;
                </button>
            `;

            this.container.insertBefore(div, this.container.firstChild); 
        }
    }
}

const randomNumbers = new RandomNumbers(
                        document.querySelector('main'), 
                        document.querySelector('#minimum'), 
                        document.querySelector('#maximum'), 
                        document.querySelector('#length')
                    );

document.querySelector('.btn-draw').addEventListener('click', () => randomNumbers.drawNumbers());
