const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  messageError.style.display = 'none';
  successMessage.textContent = '';

  let isValid = true;

  
  if (!nameInput.value.trim()) {
    nameError.style.display = 'block';
    isValid = false;
  }

  
  if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
    emailError.style.display = 'block';
    isValid = false;
  }

  if (!messageInput.value.trim()) {
    messageError.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Thank you! Your message has been submitted successfully.';
    form.reset();
  }
});
