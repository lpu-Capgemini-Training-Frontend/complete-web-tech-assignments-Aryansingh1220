const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
function setError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  formControl.querySelector('small').innerText = message
}
function setSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}
function isEmailValid(emailValue) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
}
function isPasswordValid(passwordValue) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(
    passwordValue
  )
}

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const confirmPasswordValue = confirmPassword.value.trim()
  if (usernameValue.length < 3 || usernameValue.length > 25) {
    setError(username, 'Username must be between 3 and 25 characters')
  } else {
    setSuccess(username)
  }

  if (!isEmailValid(emailValue)) {
    setError(email, 'Enter a valid email')
  } else {
    setSuccess(email)
  }
  if (!isPasswordValid(passwordValue)) {
    setError(
      password,
      'Password must be 8+ chars, include upper, lower, number, special char'
    )
  } else {
    setSuccess(password)
  }
  if (confirmPasswordValue === '') {
    setError(confirmPassword, 'Please re-enter password')
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, 'Passwords do not match')
  } else {
    setSuccess(confirmPassword)
  }
})
