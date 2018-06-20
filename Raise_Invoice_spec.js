describe('Raise Invoice', function() {
  it('login', function() {
    cy.visit('/site/login')
    cy.get('#reactContainer .login-form-container form input[name="LoginForm[email]"]').type('inokissi@yahoo.gr')
    cy.get('#reactContainer .login-form-container form input[name="LoginForm[password]"]').type('qwerty123')
    cy.get('#reactContainer .login-form-container form input[type="submit"]').click()
    cy.wait(3000)
    cy.visit('stream/view?id=12942256')
    cy.get('#stream-message-box .text').contains('Raise Invoice').click()
  })
  it('enter description', function() {
    cy.get('#stream-message-box .stream-attachment-form input[id="description"]').type('Description entered')
  })
  it('enter amount', function() {
    cy.get('#stream-message-box .stream-attachment-form input[id="cost"]').type('10')
  })
  it('check the checkbox', function() {
    cy.get('#jobAcknowledge').check({ force: true })
  })
  it('click the SEND button', function() {
    cy.get('#stream-message-box .post-controls').contains('Send').click()
  })
})
