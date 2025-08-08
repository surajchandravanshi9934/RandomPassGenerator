const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthInput = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?/|~";

function generatePassword() {
    let charset = "";
    if (uppercase.checked) charset += upperChars;
    if (lowercase.checked) charset += lowerChars;
    if (numbers.checked) charset += numberChars;
    if (symbols.checked) charset += symbolChars;

    const length = parseInt(lengthInput.value);

    if (!charset || isNaN(length) || length < 4) {
        passwordBox.value = "⚠️ Select valid options and length!";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randIndex);
    }

    passwordBox.value = password;
}

copyBtn.addEventListener("click", () => {
    const password = passwordBox.value;
    if (password && password !== "⚠️ Select valid options and length!") {
        navigator.clipboard.writeText(password).then(() => {
            copyBtn.textContent = "✅ Copied!";
            setTimeout(() => {
                copyBtn.textContent = "📋 Copy";
            }, 1500);
        });
    }
});

generateBtn.addEventListener("click", generatePassword);
