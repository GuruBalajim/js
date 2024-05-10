var passwordInput = document.getElementById('password');
var passwordStrength = document.getElementById('color');
var Show = document.getElementById('color1');
var Show1 = document.getElementById('color2');
var Show2 = document.getElementById('color3');

passwordInput.addEventListener('input', function() {
  var password = passwordInput.value;
  var strength = '';

  if (password.length < 4) {
    strength = 'Weak';
    Show.style.backgroundColor='red';
  } else if (password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[!@#$]/)) {
    strength = 'Strong';
    Show2.style.backgroundColor='green';
  } else {
    strength = 'Medium';
    Show1.style.backgroundColor='orange';
  }

  passwordStrength.innerText = 'you password is '+ strength;
});
