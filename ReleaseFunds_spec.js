describe('PAY INVOICE form', function() {
  it('The Buyer should login in and release escrow funds in order to pay the invoice', function() {
    cy.visit('/site/login')
    cy.get('#main-container .login-form-container form input[name="LoginForm[email]"]').type('penny@peopleperhour.com')
    cy.get('#main-container .login-form-container form input[name="LoginForm[password]"]').type('qwerty123')
    cy.get('#main-container .login-form-container form input[type="submit"]').click()
    cy.wait(3000)
    cy.visit('stream/view?id=12942256')
    cy.get('#main-container .invoice-release-btn').contains('Release').should('have.class','btn').click()
    cy.get('.modal-footer').contains('Release Funds').should('have.class','btn').click()
    })
})
