describe('PAY INVOICE form', function() {
  it('The Buyer should login in and release escrow funds in order to pay the invoice', function() {
    cy.LoginAsBuyer()
    cy.wait(3000)
    cy.visit('stream/view?id=14802290')
    cy.get('#main-container .invoice-release-btn').contains('Release').should('have.class','btn').click()
    cy.get('.modal-footer').contains('Release Funds').should('have.class','btn')
    //.click()
    })
})
