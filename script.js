

document.addEventListener("DOMContentLoaded", function () {
    var result = "";
    const input = document.getElementById('input');
    const prevInput = document.getElementById('prev-input');
    const numbers = document.querySelectorAll('button');

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        element.addEventListener('click', (event) => {
            event.preventDefault();
            if (element.innerHTML === 'C') {
                result = "";
                input.value = "";
            }
            else if (element.innerHTML === 'del') {
                result = "";
                input.value = "";
            }
            else if (element.innerHTML === 'CE') {
                result = String(result);
                result = result.slice(0, -1);
                input.value = result;
            }
            else if (element.innerText === '=') {
                try {
                    result = eval(input.value);
                    input.value = result;
                }
                catch {
                    input.value = "Error";
                }
            }
            else if (element.innerText === "%") {
                result = `(${input.value}/100)`;
                input.value = result;
            }
            else {
                result += element.innerText;
                input.value = result;
            }


        });
    }
    validkeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '.'];
    document.addEventListener("keydown", (event) => {

        if (validkeys.includes(event.key)) {
            input.value += event.key;
            console.log(event.key);
        }
        else if (event.key === "Enter") {
            try {
                input.value = eval(input.value);
            }
            catch {
                input.value = "Error";
            }
        }
        else if (event.key === "%") {
            if (input.value !== "") {
                input.value = `(${input.value}/100)`;
            }
        }
        else if (event.key === "Backspace") {
            result = String(input.value);
            result = result.slice(0, -1);
            input.value = result;
        }



    });






});
