document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // For demonstration, log the message to the console (you can replace this with actual form submission logic)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Show a simple alert for feedback
    alert("Thank you for your message! We will get back to you shortly.");

    // Reset the form
    this.reset();
  });
