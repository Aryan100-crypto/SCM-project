document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent actual form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            
            alert("Please fill in all fields.");
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });
});
