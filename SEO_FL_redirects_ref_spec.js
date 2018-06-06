// Jira story   : https://peopleperhour.atlassian.net/browse/PCM-790
// Title        : Apply 301 redirects to ?ref=categories pages
// Description  : Apply 301 redirects as found in the doc

describe('Freelancer Listing : Redirects', function(){
  it('Apply 301 redirects to ?ref=categories pages', function(){

    //Go to Freelancer listing
    cy.visit('/hire-freelancers')

    // Read file
    cy.readFile('cypress/integration/SEO_FL_redirects_ref.json')
      .then(function (json) {
      for (var i = 1; i < 30; i++) {

        // Visit old url
        cy.visit(json[i].Old)

        // Check if the "?ref=categories" has been ommited
        cy.url().should('not.contain','?ref=categories')
      }
    })
  })
})
