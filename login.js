document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // You can add validation logic here if needed
  
    // Redirect to index.html after successful login
    window.location.href = "index.html";
  });
  
  // Password show/hide functionality
  const passwordFields = document.querySelectorAll('.password-field .show-hide');
  passwordFields.forEach((eyeIcon) => {
    eyeIcon.addEventListener('click', () => {
      const input = eyeIcon.previousElementSibling;
      if (input.type === "password") {
        input.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
      } else {
        input.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      }
    });
  });
  