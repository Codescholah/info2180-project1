document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const messageDiv = document.querySelector('.message'); 

    /**
     *
     * @param {string} message - The message text.
     * @param {boolean} isSuccess - True for success (white text), False for error (light red text).
     */
    function displayMessage(message, isSuccess = true) {
        messageDiv.innerHTML = ''; 
        const span = document.createElement('span');
        span.textContent = message;
        span.style.color = isSuccess ? 'white' : '#FFDDDD'; 
        messageDiv.appendChild(span);
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Get the entered email address and trim whitespace
            const emailAddress = emailInput.value.trim();

            if (emailAddress === "") {
                displayMessage("Please enter a valid email address.", false);
            } else {
                const successMessage = `Thank you! Your email address ${emailAddress} has been added to our mailing list!`;
                displayMessage(successMessage, true);
                
                // Clear the input field
                emailInput.value = '';
            }
        });
    }
});