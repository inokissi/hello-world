//
describe('Pay Invoice', function() {
  it('should go to Workstream and release funds', function() {
    cy.clearCookies()

    cy.LoginAsBuyer()
    cy.wait(3000)

    // Go to Workstream
    cy.visit('/stream/view?id=14802290')

    // Click on the "Release" button
    cy.get('#reactContainer .invoice-release-btn').contains('Pay').should('have.class','btn').click()

    // click on the "Release funds" button'
    cy.get('.modal-footer').contains('Yes').should('have.class','btn').click()

    // User should land on Checkout page
    cy.url().should('contain','checkout')
  })
})
