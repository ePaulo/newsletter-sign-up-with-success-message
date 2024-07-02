// Coded by Paul O
// Date: 2024-7-1

// DOM Element References
const form = document.getElementById('form')
const errorMsg = document.getElementById('error-message')
const emailInput = document.getElementById('email-input')

// Event Listeners
form.addEventListener('submit', e => {
  e.preventDefault()
  const emailAddress = emailInput.value
  if (!validateEmail(emailAddress)) {
    emailInput.classList.add('input-error')
    errorMsg.innerText = 'Valid email required'
  } else {
    emailInput.classList.remove('input-error')
    errorMsg.innerText = ''
  }
})

emailInput.addEventListener('focus', () => {
  if (emailInput.classList.contains('input-error')) {
    emailInput.classList.remove('input-error')
    errorMsg.innerText = ''
  }
})

// Functions
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}
