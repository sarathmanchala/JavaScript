const generateBtn = document.getElementById('generateBtn');
        const lengthInput = document.getElementById('length');
        const lowercaseCheckbox = document.getElementById('lowercase');
        const uppercaseCheckbox = document.getElementById('uppercase');
        const numbersCheckbox = document.getElementById('numbers');
        const symbolsCheckbox = document.getElementById('symbols');
        const passwordOutput = document.getElementById('password');

        function generatePassword(length, lowercase, uppercase, numbers, symbols) {
            const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
            const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const numberChars = "0123456789";
            const symbolChars = "!@#$%^&*()";

            let allowedChars = "";
            let password = "";

            if (lowercase) allowedChars += lowercaseChars;
            if (uppercase) allowedChars += uppercaseChars;
            if (numbers) allowedChars += numberChars;
            if (symbols) allowedChars += symbolChars;

            if (allowedChars.length === 0) {
                return "Please select at least one character set.";
            }

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * allowedChars.length);
                password += allowedChars[randomIndex];
            }

            return password;
        }

        generateBtn.addEventListener('click', () => {
            const length = parseInt(lengthInput.value);
            const includeLowercase = lowercaseCheckbox.checked;
            const includeUppercase = uppercaseCheckbox.checked;
            const includeNumbers = numbersCheckbox.checked;
            const includeSymbols = symbolsCheckbox.checked;

            if (length <= 0) {
                passwordOutput.value = "Password length must be at least 1.";
                return;
            }

            const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
            passwordOutput.value = password;
        });