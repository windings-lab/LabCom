document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const email = document.getElementById("mail");
    const regex = /^[\w\.\-\_]+@[\w]+\.[\w]{2,}$/;

    email.addEventListener("input", (event) => {
        const ok = regex.exec(email.value);
        if (!ok) {
            email.setCustomValidity('Please enter a valid email address');
        }
        else
        {
            email.setCustomValidity("");
        }
    });

    form.addEventListener("submit", (event) => {
        // if the email field is invalid
        const ok = regex.exec(email.value);
        if (!ok) {
            // prevent form submission
            event.preventDefault();
        }
    });
});