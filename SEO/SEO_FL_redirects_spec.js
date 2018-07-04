// Jira story   : https://peopleperhour.atlassian.net/browse/PCM-789
// Title        : Apply 301 redirects to /freelance pages
// Description  : Apply redirects as found in the attached file. from /freelance to /hire-freelancers pages

describe('Freelancer Listing : Redirects', function(){
  // it('when selecting any combination of category/subcategory,the URL should include /hire-freelancers  ', function(){
  //
  //   // Go to Freelancer listing
  //   cy.visit('/hire-freelancers')
  //
  //   // Click "All Categories" button
  //   cy.get('.categories-group > .input-group-btn > .btn > span').click()
  //
  //   // Select Categrory
  //   for (var i = 3; i < 10; i++) {
  //     cy.get('.category-tree > :nth-child('+i+') > a').click()
  //     // Select Subcategory
  //     for (var j = 0; j < 2; j++) {
  //       cy.get('.selected > .tree-node > :nth-child('+(j+1)+') > a').click()
  //
  //       // Check if the URL contains the "/hire-freelancers" level
  //       cy.url().should('include', '/hire-freelancers')
  //     }
  //   }
  // })

  it('should apply 301 redirects to /freelance pages', function(){

    //Go to Freelancer listing
    cy.visit('/hire-freelancers')

    // Read file
    cy.readFile('cypress/integration/SEO/SEO_FL_redirects.json')
      .then(function (json) {
      for (var i = 1; i < 3; i++) {

        // Visit old url
        cy.visit(json[i].Old)

        // Check if the user is redirected to the new URL
        cy.url().should('contain',json[i].New)
      }
    })
  })

// Jira story   : https://peopleperhour.atlassian.net/browse/PCM-790
// Title        : Apply 301 redirects to ?ref=categories pages
// Description  : Apply 301 redirects as found in the doc
  it('should apply 301 redirects to ?ref=categories pages', function(){

    //Go to Freelancer listing
    cy.visit('/hire-freelancers')

    // Read file
    cy.readFile('cypress/integration/SEO/SEO_FL_redirects_ref.json')
      .then(function (json) {
      for (var i = 1; i < 3; i++) {

        // Visit old url
        cy.visit(json[i].Old)

        // Check if the "?ref=categories" has been ommited
        cy.url().should('not.contain','?ref=categories')
      }
    })
  })
})
