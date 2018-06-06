// Jira story   : https://peopleperhour.atlassian.net/browse/PCM-681

describe('Freelancer Listing : URLs', function(){
  it('"canonical" url should have the following format /hire-freelancers/<Category>/<Subcategory>"', function(){

    //Go to Freelancer listing
    cy.visit('/hire-freelancers')

    // Read file
    cy.readFile('cypress/integration/SEO_FL_redirects.json').then(function (json) {
      for (var i = 1; i < 3; i++) {

        // Visit URL
        cy.visit(json[i].New)

        // Check "canonical"
        cy.get('link[rel="canonical"]').should('have.attr', 'href', 'https://staging.peopleperhour.com'+json[i].New)
      }
    })
  })
  it('"next" url should have the following format /hire-freelancers/<Category>/<Subcategory>?page=<CurrentPageNum+1>"', function(){

    //Go to Freelancer listing
    cy.visit('/hire-freelancers')

    // Read file
    cy.readFile('cypress/integration/SEO_FL_redirects.json').then(function (json) {
      for (var i = 1; i < 3; i++) {

        // Visit URL
        cy.visit(json[i].New)

        // Check "next" on 1st page
        cy.get('link[rel="next"]').should('have.attr', 'href', 'https://staging.peopleperhour.com'+json[i].New+'?page=2')

        // Go to next page
        cy.get('#freelancer-listing-pager > :nth-child(3) > a').click()

        // Check "next" on 2nd page
        cy.get('link[rel="next"]').should('have.attr', 'href', 'https://staging.peopleperhour.com'+json[i].New+'?page=3')
      }
    })
  })
  it('"prev" url should have the following format /hire-freelancers/<Category>/<Subcategory>?page=<CurrentPageNum-1>"', function(){

    //Go to Freelancer listing
    cy.visit('/hire-freelancers')

    // Read file
    cy.readFile('cypress/integration/SEO_FL_redirects.json').then(function (json) {
      for (var i = 1; i < 3; i++) {

        // Visit URL
        cy.visit(json[i].New+'?page=2')

        // Check "prev" on 2nd page
        cy.get('link[rel="prev"]').should('have.attr', 'href', 'https://staging.peopleperhour.com'+json[i].New+'?page=1')
      }
    })
  })
})
