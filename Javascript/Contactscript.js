document.addEventListener("DOMContentLoaded", function () {

    const sendButton = document.getElementById("sendButton");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const messageInput = document.getElementById("messageInput");
    const feedback = document.getElementById("formMessage");

    sendButton.addEventListener("click", function () {

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        feedback.textContent = "";
        feedback.style.color = "#e42d2dff"; 

        if (name === "" || email === "" || message === "") {
            feedback.textContent = "Please fill in all fields.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            feedback.textContent = "Please enter a valid email.";
            return;
        }

        feedback.style.color = "#4bd950ff";
        feedback.textContent = "Message sent successfully!";

        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    });

});
