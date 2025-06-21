const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const passwordOutput = document.getElementById("password-output");
const warning = document.getElementById("warning");

generateBtn.addEventListener("click", () => {
  const useLetters = document.getElementById("include-letters").checked;
  const useNumbers = document.getElementById("include-numbers").checked;
  const useSymbols = document.getElementById("include-symbols").checked;

  const selectedLength = document.querySelector('input[name="length"]:checked').value;

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+{}[];:<>,.?/~";

  let charPool = "";
  if (useLetters) charPool += letters;
  if (useNumbers) charPool += numbers;
  if (useSymbols) charPool += symbols;

  if (!charPool) {
    warning.textContent = "Please select at least one character type!";
    passwordOutput.value = "";
    return;
  }

  warning.textContent = "";
  let password = "";
  for (let i = 0; i < selectedLength; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  passwordOutput.value = password;
});

copyBtn.addEventListener("click", () => {
  const password = passwordOutput.value;
  if (!password) return;

  navigator.clipboard.writeText(password).then(() => {
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
  });
});
