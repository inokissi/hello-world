describe('ZERO COMMISSION', function() {
  it('should send multiple invitations and take a screenshot', function() {
    // Login
    cy.LoginAsSeller()
    cy.wait(3000)

    // Go to "Zero Commission" page
    cy.visit('/zero-service-fee')
    var j = Math.floor((Math.random() * 100) + 1)
    var NumberOfInvitations = 3

    for (var i = 0; i < NumberOfInvitations; i++) {
      cy.get('#reactContainer form input[placeholder="Enter email address"]').type('penny+dd696'+j+'@peopleperhour.com,')
      }
    cy.get('.zero__cta⤍ZeroCommission⤚3wPXF').should('contain','INVITE CLIENTS').click()
    cy.get('#reactContainer .copy__input⤍ZeroCommission⤚1XdJU').scrollIntoView()
    cy.wait(2000)
    cy.screenshot('Invitation sent')
  })
})
