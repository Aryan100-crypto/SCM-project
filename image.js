<script>
        // Get file input and image preview elemen
        const fileInput = document.getElementById('fileUpload');
        const imagePreview = document.getElementById('imagePreview');

        // Event listener for when the user selects a fil
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0]; // Get the file selected by the user

            // Check if the file is an imag
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();

                // Once the file is loaded, set it as the source for the preview imag
                reader.onload = function(e) {
                    imagePreview.src = e.target.result; // Set the image source to the uploaded image
                    imagePreview.style.display = 'block'; // Show the preview
                };

                // Read the file as a Data URL (base64 encoding)
                reader.readAsDataURL(file);
            } else {
                alert('Please upload a valid image file.');
            }
        });
    </script>
