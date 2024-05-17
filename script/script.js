     document.addEventListener('DOMContentLoaded', function () {
    let display = document.querySelector('.display');
    let clearButton = document.querySelector('#calc input[value="c"]');
    let calcButtons = document.querySelectorAll('#calc input[type="button"]');
    
    
    calcButtons.forEach(button => {
        button.addEventListener('click', function () {
            let value = this.value;

            if (value === '=') {
                calculate();
            } else if (value === 'c') {
                clearDisplay();
            } else {
                display.textContent += value;
            }
        });
    });

    function calculate() {
        try {
            let result = eval(display.textContent);
            display.textContent = result;
        } catch (error) {
            display.textContent = 'Error';
        }
    }
});







































































































































// let keys = document.getElementsByTagName('button')

// for(let keys of button) {
//     button.addEventListener('click',(event)=>{
//         console.log(event.target);
//     }
    
//  )}