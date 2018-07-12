// describe('Login page', function() {
//   it('should login the user', function() {
//     cy.visit('/site/login')
//     cy.get('#main-container .login-form-container form input[name="LoginForm[email]"]').type('penny+cypress@peopleperhour.com')
//     cy.get('#main-container .login-form-container form input[name="LoginForm[password]"]').type('cypress123')
//     cy.get('#main-container .login-form-container form input[type="submit"]')
//     .click()
//     cy.url().should('include', '/dashboard')
//   })
// })

describe('Login page', function() {
  it('Page loaded', function() {
    cy.visit('/site/login')
  })
  it('Password and Username available', function() {
    cy.get('#LoginForm_email').should('be','visible')
    cy.get('#LoginForm_password').should('be','visible')
  })
  it('"Remember Me" option available', function() {
    cy.get('.rememberMe').should('be.visible')
    cy.get('#LoginForm_rememberMe').should('be.checked')
  })
  it('The "Forgot Password" link should be present on the form', function() {
    cy.get('.forgotPassword').should('be.visible')
  })
  it('"Login" button visible', function() {
    cy.get('.call-to-action').contains('Log In').should('be.visible')
  })
  it('Error message displayed when no username and password are entered', function() {
    cy.get('#main-container .login-form-container form input[type="submit"]')
    .click()
    cy.get('.tooltip-inner').contains('Please enter your email')
    cy.get('.tooltip-inner').contains('Please enter your password')
  })
  it('Error message displayed when incorrect password is entered', function() {
    cy.get('#main-container .login-form-container form input[name="LoginForm[email]"]').type('penny+cypress@peopleperhour.com')
    cy.get('#main-container .login-form-container form input[name="LoginForm[password]"]').type('cypress12')
    cy.get('#main-container .login-form-container form input[type="submit"]')
    .click()
    //cy.get('.tooltip-inner').contains('Wrong email or password.')
  })
  it('Successfull login as Buyer', function() {
    cy.LoginAsBuyer()
    cy.url().should('include', '/dashboard')
  })
  it('Successfull login as Seller', function() {
    cy.LoginAsSeller()
    cy.url().should('include', '/dashboard')
  })
  // it('The user should be able to reset password', function() {
  //   cy.visit('/site/login')
  //   cy.get('.forgotPassword').click()
  //   cy.get('#ForgotPasswordForm_email').type('penny+cypressNEW@peopleperhour.com')
  //   cy.get('#recaptcha-anchor .recaptcha-checkbox').check()
  //   cy.get('.call-to-action').contains('Reset').click()
  //   cy.wait(3000)
  // })
})
