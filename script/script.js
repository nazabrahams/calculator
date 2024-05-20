     document.addEventListener('DOMContentLoaded', function () {
    let display = document.querySelector('.display');
    let clearBtn = document.querySelector('#calc input[value="c"]');
    let calcBtn = document.querySelectorAll('#calc input[type="button"]');
    
    
    calcBtn.forEach(button => {
        button.addEventListener('click', function () {
            let value = this.value;

            if (value === '=') {
                result();
            } else if (value === 'c') {
                clear();
            } else {
                display.textContent += value;
            }
        });
    });
    
            function clear() {
                display.textContent = '';
            }
            

    function result() {
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