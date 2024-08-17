document.getElementById("startButton").addEventListener("click", function() {
    let resultDiv = document.getElementById("result");
    let codeDiv = document.getElementById("code");
    let scanner = document.getElementById("scanner");
    let extraInfoDiv = document.getElementById("extraInfo");

    // Set your backend code here
    let backendCode = "";  // Set your code here; leave empty or null to keep scanning indefinitely
    let extraInfo = "Additional Info: The code has been successfully retrieved."; // Information to show after code is found

    // Clear previous results
    resultDiv.style.visibility = 'hidden';
    extraInfoDiv.style.visibility = 'hidden';

    // Clear any previous intervals
    if (window.scanInterval) {
        clearInterval(window.scanInterval);
    }

    // Generate random patterns for scanning
    function generateRandomPattern() {
        let length = 16; // Fixed length of 16 digits
        let possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let pattern = "";
        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * possibleChars.length);
            pattern += possibleChars[randomIndex];
        }
        return pattern;
    }

    if (backendCode && backendCode.trim() !== "") {
        // If a backend code is provided, show it as the result after a short delay
        setTimeout(function() {
            codeDiv.innerText = backendCode;
            resultDiv.innerHTML = "Redeem Code Found: " + backendCode;
            resultDiv.style.visibility = 'visible';
            extraInfoDiv.innerHTML = extraInfo;
            extraInfoDiv.style.visibility = 'visible';

            // Stop the scanning animation
            scanner.style.animationPlayState = 'paused';
        }, 1000); // Short delay before showing the code
    } else {
        // Start scanning effect immediately
        scanner.style.animationPlayState = 'running';

        // Update scanning code continuously
        window.scanInterval = setInterval(function() {
            let randomPattern = generateRandomPattern(); // Generate a single pattern
            codeDiv.innerText = randomPattern;
        }, 100); // Adjust this value for smoother/faster scanning effect
    }
});
