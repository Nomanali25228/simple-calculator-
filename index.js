let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (i) => {
        if (i.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }

        else if (i.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (i.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += i.target.innerHTML;
            input.value = string;
        }

    })
})
