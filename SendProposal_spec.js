describe('Send Proposal', function(){
  it('The user should loggin successfully', function(){
  	cy.clearCookies()
	  cy.LoginAsSeller()
    cy.wait(3000)

    // Go to Freelancer listing
    cy.visit('/freelance-jobs')

    // Select the first job of the list
    cy.get('#job-listing-listview .btn').contains('Send Proposal').click()

  	// Enter description
    cy.get('#stream-message-box .description').should('be.visible').type('This is my proposal!')

  	// Enter amount
    cy.get('#stream-message-box .total ').type('300')

    // Click the "Send" button to submit form
    cy.get('#sendSimple').contains('Send')//.click()
  })
})
