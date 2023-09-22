/* Random Codes 
function generateCode() {
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    for (let i = 1; i <= 8; i++) {
        var charIndex = Math.floor(Math.random() * str.length);
        code += str.charAt(charIndex);
    }
    return code;
}

// Ensure that the DOM is fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('codes').innerHTML = generateCode();
    disableButton();
});

function disableButton() {
    document.getElementById('submit').disabled = true;
}

var generatedCode = generateCode(); // Generate the initial random code

        // Function to generate a random code
        function generateCode() {
            var code = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
            for (let i = 1; i <= 8; i++) {
                var charIndex = Math.floor(Math.random() * str.length);
                code += str.charAt(charIndex);
            }
            return code;
        }

        // Function to enable/disable the "submit" button based on input value
        function toggleSubmitButton() {
            var input = document.getElementById('randomcodeInput');
            var submitButton = document.getElementById('submit');

            if (input.value === generatedCode) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        }

        // Add an input event listener to the "randomcodeInput" field
        document.getElementById('randomcodeInput').addEventListener('input', toggleSubmitButton);

        // Initialize the displayed random code
        document.getElementById('codes').textContent = generatedCode;

        // Disable the "submit" button initially
        toggleSubmitButton();
*/

// script.js

var generatedCode = generateCode();

function generateCode() {
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    for (let i = 1; i <= 8; i++) {
        var charIndex = Math.floor(Math.random() * str.length);
        code += str.charAt(charIndex);
    }
    return code;
}

function toggleSubmitButton() {
    var input = document.getElementById('randomcodeInput');
    var submitButton = document.getElementById('submit');

    if (input.value === generatedCode) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('codes').textContent = generatedCode;
    toggleSubmitButton();

    document.getElementById('randomcodeInput').addEventListener('input', toggleSubmitButton);
});
