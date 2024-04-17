<?php
// Replace with 'relivest.partners@gmail.com' (or your desired recipient email)
$recipientEmail = 'relivest.partners@gmail.com';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$subject = 'Contact Form Submission from Relivest Partners Website';

$body = "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message";

$headers = "From: $email\n";
$headers .= "Reply-To: $email\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

if (mail($recipientEmail, $subject, $body, $headers)) {
  echo 'success'; // Send a success response to JavaScript
} else {
  echo 'error'; // Send an error response to JavaScript
}
?>
