// Challenge coded by Paul O
// Submitted on July 5, 2024

// DOM Element References
const form = document.getElementById('form')
const errorMsg = document.getElementById('error-message')
const emailInput = document.getElementById('email-input')
const confirmModal = document.getElementById('confirm-modal')
const closeModalBtn = document.getElementById('close-modal-btn')
const emailEntered = document.getElementById('email-entered')

// Event Listeners
form.addEventListener('submit', e => {
  e.preventDefault()
  const emailAddress = emailInput.value
  if (!validateEmail(emailAddress)) {
    emailInput.classList.add('input-error')
    errorMsg.innerText = 'Valid email required'
  } else {
    emailEntered.innerText = emailAddress
    confirmModal.showModal()
    emailInput.classList.remove('input-error')
    errorMsg.innerText = ''
    emailInput.value = ''
  }
})

emailInput.addEventListener('focus', () => {
  if (emailInput.classList.contains('input-error')) {
    emailInput.classList.remove('input-error')
    errorMsg.innerText = ''
  }
})

closeModalBtn.addEventListener('click', () => {
  confirmModal.close()
  emailEntered.innerText = 'your email address'
})

// Functions
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}
