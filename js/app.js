const display = document.querySelector('.calc-display p');
const calc = document.querySelector('.calc');

calc.addEventListener('click', (e) => {
    if(!e.target.classList.contains('btn')) return;

    const result = e.target.textContent;

    switch(result) {
        case "A/C":
            display.textContent = '';
            break;
        case "←":
            display.textContent = (display.textContent).slice(0, -1);
            break;
        case "=":
            display.textContent = eval(display.textContent);
            break;
        default:
            display.textContent += result;
        break;
    }
})

// (13 - enter,96-111)    48-57, 189(-), 187(+)

document.addEventListener('keydown', (e) => {
        if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 111)){
            display.innerHTML += e.key;
    }
    switch(e.key) {
        case "Backspace":
            display.textContent = (display.textContent).slice(0, -1);
            break;
        case "Enter":
            display.textContent = eval(display.textContent);
            break;
    } 
});