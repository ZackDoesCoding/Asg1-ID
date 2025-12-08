/* Waits for all the Html and CSS to load before starting*/
document.addEventListener("DOMContentLoaded", function () {  

    /* Stores all elememnts in variables by their ID */
    const sendButton = document.getElementById("sendButton");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const messageInput = document.getElementById("messageInput");
    const feedback = document.getElementById("formMessage");

    /* Waits for Send button to be clicked*/
    sendButton.addEventListener("click", function () {

        /*trims all values (removes empty space at front and back)*/
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        /* Resets previous error message */
        feedback.textContent = "";
        feedback.style.color = "#e42d2dff"; 

        /* Checks if any of the text inputs are empty, 
        if they are end the code and give error message */
        if (name === "" || email === "" || message === "") {
            feedback.textContent = "Please fill in all fields.";
            return;
        }

        /* Checks if the email follows the same format,
        if it doesnt end the code and give error message */
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email.";
            return;
        }

        /* If it passes the 2 checks gives completion message */
        feedback.style.color = "#4bd950ff";
        feedback.textContent = "Message sent successfully!";

        /* resets all fields */
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    });

});
