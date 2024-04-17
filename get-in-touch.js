const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation (you can enhance this)
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // Send email using PHP (explained below)
  fetch('send-email.php', {
    method: 'POST',
    body: new URLSearchParams({ name, email, message })
  })
  .then(response => {
    if (response.ok) {
      alert('Your message has been sent successfully!');
      form.reset(); // Clear the form after successful submission
    } else {
      alert('There was an error sending your message. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An unexpected error occurred. Please try again later.');
  });
});
