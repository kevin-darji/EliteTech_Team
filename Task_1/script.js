const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            currentInput += button.textContent;
        } else if (button.classList.contains('operator')) {
            currentInput += button.textContent;
        } else if (button.classList.contains('clear')) {
            currentInput = '';
        } else if (button.classList.contains('equals')) {
            try {
                currentInput = eval(currentInput).toString(); 
            } catch (error) {
                currentInput = 'Error';
            }
        }
        display.value = currentInput;
    });
});