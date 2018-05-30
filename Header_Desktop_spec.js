// Jira story   : https://peopleperhour.atlassian.net/browse/TRO-771
// Description  : Designs: https://projects.invisionapp.com/share/72E9L0PVR#/screens/293556644
//                New menu items:
//                Browse (instead of Buy, Sell)
//                Become a Freelancer -> Signup page (Seller/Individual option is preselected)
//                Check video and prototype in the Epic.

describe('Header displayed to anonymous user', function(){

  it('should have "Buy" and "Sell" categories removed',function() {

    // Visit website
    cy.visit('')

    cy.get('#reactContainer .header__nav⤍Header⤚3MZJC').should('not.contain','Buy')
    cy.get('#reactContainer .header__nav⤍Header⤚3MZJC').should('not.contain','Sell')
  })

  it('should have "Browse" category added',function() {
    cy.get('#reactContainer .header__nav⤍Header⤚3MZJC').should('contain','Browse')
  })
  context('Become a Freelancer',function(){

    it('should have "Become a Freelancer" category added',function() {
      cy.get('#reactContainer .header__nav⤍Header⤚3MZJC').should('contain','Become a freelancer')
    })

    it('the user should land on signup page when clicking on "Become a Freelancer" ',function() {
      cy.get('#reactContainer .header__nav⤍Header⤚3MZJC').contains('Become a freelancer').click()
      cy.url().should('contain','/site/register')
    })
  })
})
