//
describe('Pay Invoice', function() {
  it('should go to Workstream and release funds', function() {
    cy.clearCookies()

    cy.LoginAsBuyer()
    cy.wait(3000)

    // Go to Workstream
    cy.visit('/stream/view?id=14802290')

    // Click on the "Release" button
    cy.get('#reactContainer .invoice-release-btn').contains('Release').should('have.class','btn').click()

    // click on the "Release funds" button'
    cy.get('.modal-footer').contains('Release Funds').should('have.class','btn')
    //.click()

  })
})
