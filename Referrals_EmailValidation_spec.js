// Related to https://peopleperhour.atlassian.net/browse/TRO-332
describe('REFERRALS', function() {
  it('should do email validation', function() {
    cy.visit('/site/login')

    // it should enter email address
    cy.get('#main-container .login-form-container form input[name="LoginForm[email]"]')
      .type('penny+cypress@peopleperhour.com')

    // it should enter password
    cy.get('#main-container .login-form-container form input[name="LoginForm[password]"]')
      .type('cypress123')

    // it should click the LOG IN button
    cy.get('#main-container .login-form-container form input[type="submit"]')
      .click()
    cy.url().should('include', '/dashboard')

    // Go to Referrals page through the user menu
    cy.get('.pph-c-dropdown⤍Dropdown⤚1kENb').contains("Invite & Earn")
      .click({force:true})

    // Test if the the URL is correct
    cy.url().should('include', '/referral-program')

     cy.readFile('cypress/integration/Emails.json').then(function (json) {
      for (var i = 0; i < json.length; i++) {
        // Enter the email address of the invitee
        cy.get('#reactContainer form input[placeholder="Enter email address (separate multiple email addresses with comma)"]')
          .clear()
          .type(json[i].email)

        // Click the INVITE FRIENDS button
        cy.get('.referral__cta⤍Referral⤚2N8AF')
          .should('contain','INVITE FRIENDS')
          .click()
      }
    })
  })
})
