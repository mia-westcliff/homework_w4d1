/* Random Codes */

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
