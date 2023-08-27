const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

form.addEventListener('submit', function(event) {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Invalid email format';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message is required';
    isValid = false;
  } else {
    messageError.textContent = '';
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function isValidEmail(email) {
  // Basic email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}