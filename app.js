const display = document.querySelector('#display');
const button = document.querySelectorAll('button');
const showNumber = document.querySelector('#showNumber')

button.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
            showNumber.innerText = '';
        }
        else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1)
        }
        else if (display.innerText != '' && item.id == 'equal') {
            showNumber.innerText = '=' + eval(display.innerText);
        }
        else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        }
        else {
            display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector('.theme-toggle');
const calculator = document.querySelector('.calculator');
const toogleIcon = document.querySelector('.toggler-icon');
const body = document.querySelector('body');

let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    if(isDark){
        body.style.backgroundColor='#ecf0f3';
    }
    else{
        body.style.backgroundColor='#1a1b1c';

    }
    isDark = !isDark;

}

