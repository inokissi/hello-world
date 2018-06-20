describe('Pay Invoice', function() {
  it('should login', function() {
    cy.visit('/site/login')
    cy.get('#reactContainer .login-form-container form input[name="LoginForm[email]"]').type('penny+1438948203@peopleperhour.com')
    cy.get('#reactContainer .login-form-container form input[name="LoginForm[password]"]').type('qwerty')
    cy.get('#reactContainer .login-form-container form input[type="submit"]').click()
    cy.wait(3000)
    cy.visit('stream/view?id=12942256')
  })
  it('should go to Workstream', function() {
    cy.get('#reactContainer .invoice-release-btn').contains('Release').should('have.class','btn').click()
  })
  it('should click on the "Release funds" button', function() {
    cy.get('.modal-footer').contains('Release Funds').should('have.class','btn').click()
  })
})
