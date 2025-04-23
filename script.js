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
    // Get file input and image preview element
    const fileInput = document.getElementById('fileUpload');
    const imagePreview = document.getElementById('imagePreview');

    // Event listener for when the user selects a file
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0]; // Get the file selected by the user

        // Check if the file is an image
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            // Once the file is loaded, set it as the source for the preview image
            reader.onload = function (e) {
                imagePreview.src = e.target.result; // Set the image source to the uploaded image
                imagePreview.style.display = 'block'; // Show the preview
            };

            // Read the file as a Data URL (base64 encoding)
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    });
    // 🎧 Audio Progress
    const audio = document.getElementById("audioPlayer");
    const progressBar = document.getElementById("progressBar");

    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressBar.value = percent;
        }
    });
});
