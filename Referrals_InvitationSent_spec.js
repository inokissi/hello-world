describe('REFERRAL PROGRAM', function() {
  var j
  it('should send invitation', function() {
    cy.visit('/site/login')

    // Enter email address
    cy.get('#main-container .login-form-container form input[name="LoginForm[email]"]')
      .type('penny+cypress@peopleperhour.com')

    // Enter password
    cy.get('#main-container .login-form-container form input[name="LoginForm[password]"]')
      .type('cypress123')

    // Click the LOG IN button
    cy.get('#main-container .login-form-container form input[type="submit"]')
      .click()

    // Check if the login was successfull
    cy.url().should('include', '/dashboard')

    // Go to Referrals page through the user menu
    cy.get('.pph-c-dropdown⤍Dropdown⤚1kENb').contains("Invite & Earn")
      .click({force:true})

    // Check if the URL is correct
    cy.url().should('include', '/referral-program')

    // Generate a random number between 1 and 100
    j = Math.floor((Math.random() * 100) + 1)

    // Enter the email address of the person that is going to be invited
    for (var i = 0; i < 3; i++) {
      cy.get('#reactContainer form input[placeholder="Enter email address (separate multiple email addresses with comma)"]')
        .type('refpenny+'+j+'@gmail.com,')
    }
    // Click the INVITE FRIENDS button
    cy.get('.referral__cta⤍Referral⤚2N8AF')
      .should('contain','INVITE FRIENDS')
      .click()

    cy.wait(5000)

    // Check if the tooltip is displayed
    cy.get('form').should('be.visible').should('contain','Invitation sent')
  })
})
