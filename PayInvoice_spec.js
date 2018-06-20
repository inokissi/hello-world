describe('Pay Invoice', function() {
  it('should go to Workstream and release funds', function() {

    // Login
    cy.visit('/site/login')
    cy.get('#reactContainer .login-form-container form input[name="LoginForm[email]"]').type('penny+1438948203@peopleperhour.com')
    cy.get('#reactContainer .login-form-container form input[name="LoginForm[password]"]').type('qwerty')
    cy.get('#reactContainer .login-form-container form input[type="submit"]').click()
    cy.wait(3000)

    // Go to Workstream
    cy.visit('stream/view?id=12942256')

    // Click on the "Release" button
    cy.get('#reactContainer .invoice-release-btn').contains('Release').should('have.class','btn').click()

    // click on the "Release funds" button'
    cy.get('.modal-footer').contains('Release Funds').should('have.class','btn').click()
    //cy.get('[data-bb-handler="confirm"]').click()
  })
})
