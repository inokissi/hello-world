describe('Raise Invoice', function() {
  it('should go to Workstream and raise an invoice', function() {

    // Login
    cy.visit('/site/login')
    cy.get('#reactContainer .login-form-container form input[name="LoginForm[email]"]').type('inokissi@yahoo.gr')
    cy.get('#reactContainer .login-form-container form input[name="LoginForm[password]"]').type('qwerty123')
    cy.get('#reactContainer .login-form-container form input[type="submit"]').click()
    cy.wait(3000)

    // Go to Workstream
    cy.visit('stream/view?id=12942256')

    // Click on "Raise Invoice" tab in order to open the Invoice form
    cy.get('#stream-message-box .text').contains('Raise Invoice').click()

    // Enter description
    cy.get('#stream-message-box .stream-attachment-form input[id="description"]').type('Description entered')

    // Enter price
    cy.get('#stream-message-box .stream-attachment-form input[id="cost"]').type('10')

    // Check the aknowledgement checkbox
    cy.get('#jobAcknowledge').check({ force: true })

    // Click the "Send" button
    cy.get('#stream-message-box .post-controls').contains('Send').click()
})
})
