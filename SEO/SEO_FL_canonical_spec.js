// Jira story   : https://peopleperhour.atlassian.net/browse/PCM-681

describe('Freelancer Listing : URLs', function(){
  context('Canonical URL', function(){
    it('should have the following format /hire-freelancers/<Category>/<Subcategory>', function(){

      //Go to Freelancer listing
      cy.visit('/hire-freelancers')

      // Read file
      cy.readFile('cypress/integration/SEO/SEO_FL_redirects.json').then(function (json) {
        for (var i = 200; i < json.length; i++) {

          // Visit URL
          cy.visit(json[i].New)

          // Check "canonical"
          cy.get('link[rel="canonical"]').should('have.attr', 'href', 'https://www.peopleperhour.com'+json[i].New)
        }
      })
    })
  })
  context('Next URL', function(){

    it('should have the following format /hire-freelancers/<Category>/<Subcategory>?page=<CurrentPageNum+1>', function(){


      //Go to Freelancer listing
      cy.visit('/hire-freelancers')

      // Read file
      cy.readFile('cypress/integration/SEO/SEO_FL_redirects.json').then(function (json) {
        for (var i = 200; i < json.length; i++) {
          for (var j = 2; j < 5; j++) {
            var k = j+1
            // Visit next page
            cy.visit(json[i].New+'?page='+j+'')

            // Check "next" on 2nd page
            cy.get('link[rel="next"]').should('have.attr', 'href', 'https://www.peopleperhour.com'+json[i].New+'?page='+k+'')
          }
        }
      })
    })
  })
  context('Prev URL', function(){
    it('should not exist on first page', function(){

      //Go to Freelancer listing
      cy.visit('/hire-freelancers')

      // Read file
      cy.readFile('cypress/integration/SEO/SEO_FL_redirects.json').then(function (json) {
        for (var i = 1; i < json.length; i++) {

            // Visit First page
            cy.visit(json[i].New)

            // Check if "prev" exists on 1st page
            cy.get('link[rel="prev"]').should('not.exist')
        }
      })
    })
    it('should have the following format /hire-freelancers/<Category>/<Subcategory>?page=<CurrentPageNum-1> on any other page', function(){

      //Go to Freelancer listing
      cy.visit('/hire-freelancers')

      // Read file
      cy.readFile('cypress/integration/SEO_FL_redirects.json').then(function (json) {
        for (var i = 1; i < json.length; i++) {
          for (var j = 2; j < 5; j++) {
            var k = j+1
            // Visit next page
            cy.visit(json[i].New+'?page='+k+'')

            // Check "prev" on next page
            cy.get('link[rel="prev"]').should('have.attr', 'href', 'https://www.peopleperhour.com'+json[i].New+'?page='+j+'')
          }
        }
      })
    })
  })
})
