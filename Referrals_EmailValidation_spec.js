// Related to https://peopleperhour.atlassian.net/browse/TRO-332
describe('REFERRALS', function() {
  it('should do email validation', function() {

    cy.LoginAsSeller()
    cy.wait(3000)

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
