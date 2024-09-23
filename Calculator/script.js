function insert(value) {
    let display = document.getElementById('display'); // Get the display element
    display.value += value; // Append the pressed button's value to the display
}


function clearDisplay() {
    document.getElementById('display').value = ''; // Set display value to an empty string
}


function backspace() {
    let display = document.getElementById('display'); // Get the display element
    display.value = display.value.slice(0, -1); // Remove the last character
}

function calculate() {
    let display = document.getElementById('display'); // Get the display element
    try {
        display.value = eval(
            display.value
            .replace(/sin/g, 'Math.sin') // Replace 'sin' with the JavaScript Math function
            .replace(/cos/g, 'Math.cos') // Replace 'cos' with the JavaScript Math function
            .replace(/tan/g, 'Math.tan') // Replace 'tan' with the JavaScript Math function
            .replace(/log/g, 'Math.log10') // Replace 'log' with the JavaScript Math function for log base 10
            .replace(/sqrt/g, 'Math.sqrt') // Replace '√' with the JavaScript Math function for square root
        );
    } catch (e) {
        display.value = 'Error'; // If there's an error (like invalid input), display 'Error'
    }
}
