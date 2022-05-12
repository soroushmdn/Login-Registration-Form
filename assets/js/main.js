const signUp = document.getElementById('sign-up'),
  signIn = document.getElementById('sign-in'),
  loginIn = document.getElementById('login-in'),
  loginUp = document.getElementById('login-up');

signUp.addEventListener('click', () => {
  // Remove classes first if they exist
  loginUp.classList.remove('none');

  // Add classes
  loginIn.classList.add('none');
});

signIn.addEventListener('click', () => {
  // Remove classes first if they exist
  loginIn.classList.remove('none');

  // Add classes
  loginUp.classList.add('none');
});
