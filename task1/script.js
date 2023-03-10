const output = document.getElementById('output');

function appendToOutput(value) {
    output.innerHTML += value;
}

function clearOutput() {
    output.innerHTML = '';
}

function deleteLast() {
    output.innerHTML = output.innerHTML.slice(0, -1);
}

function calculate() {
    try {
        output.innerHTML = eval(output.innerHTML);
    } catch (error) {
        output.innerHTML = 'Error';
    }
}
