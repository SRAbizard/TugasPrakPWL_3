export default {
  general: {
    missing: 'This field must be filled!',
    invalid: 'Filling is not valid!'
  },

  type: {
    text: {
      missing: 'Please enter the name!',
    },
    email: {
      missing: 'Please enter the email!',
      invalid: 'The email you enter is not valid!'
    },
    password: {
      rule: {
        capitalLetter: 'Please include at least one capital letter!',
        oneNumber: 'Please include at least one number!',
        oneSymbol: 'Please include at least one symbol!',
        minLength: 'Password should consist of 6 character!'
      }
    }
  },

  name: {
    confirmPassword: {
      rule: {
        matches: 'The password you entered does not match!'
      }
    }
  }
}
