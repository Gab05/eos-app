<template>
  <div class="main-body">
    <section class="hero is-success">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Inscription
          </h1>
          <h2 class="subtitle">
            Nouvel utilisateur
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="field has-text-left">
            <label class="label">Prénom</label>
            <div class="control has-icons-left has-icons-right">
              <input id="firstname_input" v-on:keyup="validateName('first')" class="input" type="text" placeholder="Entrez votre prénom">
              <span class="icon is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-right">
                <i id="firstname_check" class="fas fa-check has-text-success" style="display: none;"></i>
                <i id="firstname_cross" class="fas fa-times has-text-danger" style="display: none;"></i>
              </span>
            </div>
            <p id="firstname_help_empty" class="help is-danger has-text-centered" style="display: none;">Champ requis</p>
            <p id="firstname_help_invalid" class="help is-danger has-text-centered" style="display: none;">Prénom invalide</p>
          </div>
          <div class="field has-text-left">
            <label class="label">Nom</label>
            <div class="control has-icons-left has-icons-right">
              <input id="lastname_input" v-on:keyup="validateName('last')" class="input" type="text" placeholder="Entrez votre nom de famille">
              <span class="icon is-left">
                <i class="fas fa-user"></i>
              </span>
              <span class="icon is-right">
                <i id="lastname_check" class="fas fa-check has-text-success" style="display: none;"></i>
                <i id="lastname_cross" class="fas fa-times has-text-danger" style="display: none;"></i>
              </span>
            </div>
            <p id="lastname_help_empty" class="help is-danger has-text-centered" style="display: none;">Champ requis</p>
            <p id="lastname_help_invalid" class="help is-danger has-text-centered" style="display: none;">Nom invalide</p>
          </div>
          <label class="label has-text-left">Date de naissance</label>
          <div class="field is-horizontal">
            <div class="control has-icons-right">
              <input id="birthdate_day_input" v-on:keyup="validateBirthdate" class="input" type="text" placeholder="JJ">
              <span class="icon is-right">
                <i id="birthdate_day_check" class="fas fa-check has-text-success" style="display: none;"></i>
                <i id="birthdate_day_cross" class="fas fa-times has-text-danger" style="display: none;"></i>
              </span>
            </div>
            <div class="control has-icons-right">
              <input id="birthdate_month_input" v-on:keyup="validateBirthdate" class="input" type="text" placeholder="MM">
              <span class="icon is-right">
                <i id="birthdate_month_check" class="fas fa-check has-text-success" style="display: none;"></i>
                <i id="birthdate_month_cross" class="fas fa-times has-text-danger" style="display: none;"></i>
              </span>
            </div>
            <div class="control has-icons-right">
              <input id="birthdate_year_input" v-on:keyup="validateBirthdate" class="input" type="text" placeholder="AAAA">
              <span class="icon is-right">
                <i id="birthdate_year_check" class="fas fa-check has-text-success" style="display: none;"></i>
                <i id="birthdate_year_cross" class="fas fa-times has-text-danger" style="display: none;"></i>
              </span>
            </div>
          </div>
          <p id="birthdate_help" class="help is-danger" style="margin-top:-4%; display: none;">Date invalide</p>
        </div>
        <div class="column">
          <div class="field has-text-left">
            <label class="label">Adresse courriel</label>
            <div class="control has-icons-left has-icons-right">
              <input id="email_input" v-on:keyup="validateEmail" class="input" type="text" placeholder="Entrez votre adresse courriel">
              <span class="icon is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-right">
                <i id="email_check" class="fas fa-check has-text-success" style="display: none;"></i>
                <i id="email_cross" class="fas fa-times has-text-danger" style="display: none;"></i>
              </span>
            </div>
            <p id="email_help_empty" class="help is-danger has-text-centered" style="display: none;">Champ requis</p>
            <p id="email_help_invalid" class="help is-danger has-text-centered" style="display: none;">Adresse courriel invalide</p>
          </div>
          <div class="field has-text-left">
            <label class="label">Numéro de téléphone</label>
            <div class="control has-icons-left has-icons-right">
              <input id="phone_input" v-on:keyup="validatePhone" class="input" type="text" placeholder="Entrez votre numéro de téléphone">
              <span class="icon is-left">
                <i class="fas fa-phone"></i>
              </span>
              <span class="icon is-right">
                <i id="phone_check" class="fas fa-check has-text-success" style="display: none;"></i>
                <i id="phone_cross" class="fas fa-times has-text-danger" style="display: none;"></i>
              </span>
            </div>
            <p id="phone_help_empty" class="help is-danger has-text-centered" style="display: none;">Champ requis</p>
            <p id="phone_help_invalid" class="help is-danger has-text-centered" style="display: none;">Numéro de téléphone invalide</p>
          </div>
          <label class="label has-text-left">Adresse</label>
          <div class="field">
            <div class="control has-icons-left has-icons-right" style="margin-bottom: 2%;">
              <input id="address_input" v-on:keyup="validateAddress" class="input" type="text" placeholder="Numéro et rue">
              <span class="icon is-left">
                <i class="fas fa-road"></i>
              </span>
              <span class="icon is-right">
                <i id="address_check" class="fas fa-check has-text-success" style="display: none;"></i>
                <i id="address_cross" class="fas fa-times has-text-danger" style="display: none;"></i>
              </span>
            </div>
            <div class="control has-icons-left has-icons-right">
              <input id="postalcode_input" v-on:keyup="validatePostalCode" class="input" type="text" placeholder="Code Postal">
              <span class="icon is-left">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span class="icon is-right">
                <i id="postalcode_check" class="fas fa-check has-text-success" style="display: none;"></i>
                <i id="postalcode_cross" class="fas fa-times has-text-danger" style="display: none;"></i>
              </span>
            </div>
            <p id="address_help_empty" class="help is-danger has-text-centered" style="display: none;">Champ requis</p>
            <p id="address_help_invalid" class="help is-danger has-text-centered" style="display: none;">Adresse invalide</p>
            <p id="postalcode_help_invalid" class="help is-danger has-text-centered" style="display: none;">Code postal invalide</p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control has-text-centered">
          <button id="submitButton" class="button is-info is-rounded" disabled>
            <span>Continuer</span>
            <span class="icon is-right">
              <i class="fas fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inscription',
  methods: {
    validateName: validateName,
    validateBirthdate: validateBirthdate,
    validateEmail: validateEmail,
    validatePhone: validatePhone,
    validateAddress: validateAddress,
    validatePostalCode: validatePostalCode,
    validSubmit: validSubmit,
    validFields: validFields
  }
}

let firstnameIsValid = false
let lastnameIsValid = false
let birthdateIsValid = false
let emailIsValid = false
let phoneIsValid = false
let addressIsValid = false
let postalcodeIsValid = false

function validSubmit () {
  if (validFields()) {
    document.getElementById('submitButton').removeAttribute('disabled')
  } else {
    document.getElementById('submitButton').setAttribute('disabled', '')
  }
}

function validFields () {
  console.log('\nfirstnameIsValid: ' + firstnameIsValid)
  console.log('lastnameIsValid: ' + lastnameIsValid)
  console.log('birthdateIsValid: ' + birthdateIsValid)
  console.log('emailIsValid: ' + emailIsValid)
  console.log('phoneIsValid: ' + phoneIsValid)
  console.log('addressIsValid: ' + addressIsValid)
  console.log('postalcodeIsValid: ' + postalcodeIsValid)
  return firstnameIsValid &&
    lastnameIsValid &&
    birthdateIsValid &&
    emailIsValid &&
    phoneIsValid &&
    addressIsValid &&
    postalcodeIsValid
}

function validateName (nameType) {
  if (nameType === 'first') {
    firstnameIsValid = false
  } else lastnameIsValid = false

  let nameInput = document.getElementById(nameType + 'name_input')
  let nameCross = document.getElementById(nameType + 'name_cross')
  let nameCheck = document.getElementById(nameType + 'name_check')
  let nameHelpEmpty = document.getElementById(nameType + 'name_help_empty')
  let nameHelpInvalid = document.getElementById(nameType + 'name_help_invalid')

  if (/^[A-Za-zéÉîÎêÊàÀïÏëËçÇôÔèÈâÂ \-']+$/.test(nameInput.value) && /^[^ \-']/.test(nameInput.value)) {
    showSuccess(nameInput, nameCheck, nameCross, [nameHelpEmpty, nameHelpInvalid])
    if (nameType === 'first') {
      firstnameIsValid = true
    } else lastnameIsValid = true
  } else if (nameInput.value === '') {
    showDanger(nameInput, nameCross, nameCheck, [nameHelpEmpty], [nameHelpInvalid])
  } else {
    showDanger(nameInput, nameCross, nameCheck, [nameHelpInvalid], [nameHelpEmpty])
  }
  validSubmit()
}

function validateBirthdate () {
  birthdateIsValid = false
  let day = Number(document.getElementById('birthdate_day_input').value)
  let month = Number(document.getElementById('birthdate_month_input').value)
  let year = Number(document.getElementById('birthdate_year_input').value)
  let date = new Date()
  date.setFullYear(year, month - 1, day)
  let validD = false
  let validM = false
  let validY = false
  if (date.getFullYear() >= year &&
    /^[1-2]{1}[0-9]{3}$/.test(document.getElementById('birthdate_year_input').value)) {
    validY = true
    displayBirthdayValidation('year', true)
  } else {
    validY = false
    displayBirthdayValidation('year', false)
  }
  if (date.getMonth() === month - 1) {
    validM = true
    displayBirthdayValidation('month', true)
  } else {
    validM = false
    displayBirthdayValidation('month', false)
  }
  if (date.getDate() === day) {
    validD = true
    displayBirthdayValidation('day', true)
  } else {
    validD = false
    displayBirthdayValidation('day', false)
  }
  if (validD && validM && validY) {
    hideDateHelp()
    birthdateIsValid = true
  }
  validSubmit()
}

function validateEmail () {
  emailIsValid = false
  let input = document.getElementById('email_input')
  let cross = document.getElementById('email_cross')
  let check = document.getElementById('email_check')
  let helpEmpty = document.getElementById('email_help_empty')
  let helpInvalid = document.getElementById('email_help_invalid')
  if (/^[\w]+@[\w]+\.[\w]+$/.test(input.value)) {
    showSuccess(input, check, cross, [helpEmpty, helpInvalid])
    emailIsValid = true
  } else if (input.value === '') {
    showDanger(input, cross, check, [helpEmpty], [helpInvalid])
  } else {
    showDanger(input, cross, check, [helpInvalid], [helpEmpty])
  }
  validSubmit()
}

function validatePhone () {
  phoneIsValid = false
  let input = document.getElementById('phone_input')
  let cross = document.getElementById('phone_cross')
  let check = document.getElementById('phone_check')
  let helpEmpty = document.getElementById('phone_help_empty')
  let helpInvalid = document.getElementById('phone_help_invalid')
  if (/^\d{10}$/.test(input.value)) {
    showSuccess(input, check, cross, [helpEmpty, helpInvalid])
    phoneIsValid = true
  } else if (input.value === '') {
    showDanger(input, cross, check, [helpEmpty], [helpInvalid])
  } else {
    showDanger(input, cross, check, [helpInvalid], [helpEmpty])
  }
  validSubmit()
}

function validateAddress () {
  addressIsValid = false
  let input = document.getElementById('address_input')
  let cross = document.getElementById('address_cross')
  let check = document.getElementById('address_check')
  let helpEmpty = document.getElementById('address_help_empty')
  let helpInvalid = document.getElementById('address_help_invalid')
  if (/^\d+/.test(input.value)) {
    showSuccess(input, check, cross, [helpEmpty, helpInvalid])
    addressIsValid = true
  } else if (input.value === '') {
    showDanger(input, cross, check, [helpEmpty], [helpInvalid])
  } else {
    showDanger(input, cross, check, [helpInvalid], [helpEmpty])
  }
  validSubmit()
}

function validatePostalCode () {
  postalcodeIsValid = false
  let input = document.getElementById('postalcode_input')
  let cross = document.getElementById('postalcode_cross')
  let check = document.getElementById('postalcode_check')
  let helpEmpty = document.getElementById('address_help_empty')
  let helpInvalid = document.getElementById('postalcode_help_invalid')
  if (/^[a-zA-Z]\d[a-zA-Z][ ]?\d[a-zA-Z]\d$/.test(input.value)) {
    showSuccess(input, check, cross, [helpEmpty, helpInvalid])
    postalcodeIsValid = true
  } else if (input.value === '') {
    showDanger(input, cross, check, [helpEmpty], [helpInvalid])
  } else {
    showDanger(input, cross, check, [helpInvalid], [helpEmpty])
  }
  validSubmit()
}

function hideDateHelp () {
  document.getElementById('birthdate_help').style.display = 'none'
}

function showDanger (input, shownIcon, hiddenIcon, shownMessages, hiddenMessages) {
  input.classList.remove('is-success')
  input.classList.add('is-danger')
  shownIcon.style.display = 'block'
  hiddenIcon.style.display = 'none'
  for (let s of shownMessages) {
    s.style.display = 'block'
  }
  for (let h of hiddenMessages) {
    h.style.display = 'none'
  }
}

function showSuccess (input, shownIcon, hiddenIcon, hiddenMessages) {
  input.classList.add('is-success')
  input.classList.remove('is-danger')
  shownIcon.style.display = 'block'
  hiddenIcon.style.display = 'none'
  for (let h of hiddenMessages) {
    h.style.display = 'none'
  }
}

function displayBirthdayValidation (type, valid) {
  let input = document.getElementById('birthdate_' + type + '_input')
  let cross = document.getElementById('birthdate_' + type + '_cross')
  let check = document.getElementById('birthdate_' + type + '_check')
  let help = document.getElementById('birthdate_help')

  if (valid) {
    showSuccess(input, check, cross, [])
  } else {
    showDanger(input, cross, check, [help], [])
  }
}

</script>

<style scoped>
  .hero {
    margin: 3% 0 3% 0;
    text-align: left;
  }

  .column {
    margin: 0 3% 0 3%;
  }

  .field {
    margin: 0 0 5% 0;
  }

</style>
