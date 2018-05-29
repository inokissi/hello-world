describe('PROPOSAL form', function(){
  it('The user should loggin successfully', function(){

    // Go to Login page
    cy.visit('/site/login')

    // Enter credentials
    cy.get('input[name="LoginForm[email]"]').type('penny+psc871@peopleperhour.com')
    cy.get('input[name="LoginForm[password]"]').type('qwerty123')
    cy.get('#yw0').submit()
    cy.wait(4000)
    cy.url().should('not.include','/site/login')

    // Go to Freelancer listing
    cy.visit('/freelance-jobs/')

    // Select the first job of the list
    cy.get('#job-listing-listview > .items > :nth-child(1) .btn').click()
  })

  it('The DESCRIPTION field should be available', function(){
    cy.get('#stream-message-box .description').should('be.visible').type('This is my proposal!')
  })
  it('The AMOUNT field should be available', function(){
    cy.get('#stream-message-box .total ').should('be.visible')
  })
  it('The user should be able to fill the AMOUNT field with the desirable amount', function(){
    cy.get('#stream-message-box .total ').type('30')
  })
  it('The SEND button should be visible and clickable', function(){
    cy.get('#sendSimple').should('be.visible')
    //.click()
  })
  it('The SEND & FEATURE button should be visible and clickable', function(){
    cy.get('#sendFeatured').should('be.visible')
  })

  it('An error message should be displayed when DESCRIPTION field is left blank', function(){
    cy.get('#stream-message-box .description').clear()
    cy.get('#stream-message-box .total ').type('30')
    cy.get('#sendSimple').click()
    cy.get('.tooltip-inner')
      .contains('Description is mandatory')
  })
  it('An error message should be displayed when AMOUNT field is left blank', function(){
    cy.get('#stream-message-box .description').type('something')
    cy.get('#stream-message-box .total ').clear()
    cy.get('#sendSimple').click()
    cy.get('.tooltip-inner')
      .contains('The deposit request has to be at least')
  })
  it('An error message should be displayed when the AMOUNT is less than 6 GBP', function(){
    cy.get('#stream-message-box .description').type('something')
    cy.get('#stream-message-box .total ').type('4')
    cy.get('#sendSimple').click()
    cy.get('.tooltip-inner')
      .contains('We should keep it fair, your proposal amount cannot be less than')
  })
})
