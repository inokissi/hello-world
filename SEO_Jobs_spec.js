// JIRA link : https://peopleperhour.atlassian.net/browse/PCM-481
// Project : PCM
//
describe('New URL structure on Job listing', function(){
  var url,Category,H1,H2,Meta,cat,subs,numOfRows,j


  it('should visit Job Listing page and check if the URL is displayed in the new format', function(){

    // Enter URL
    cy.visit('/freelance-jobs')

    // Click "All Categories" button
    cy.get('.categories-group > .input-group-btn > .btn > span').click()

    // Read Categories and Subcategories from file
    cy.readFile('cypress/integration/SEO_Jobs.json').then(function (json) {
     for (var i = 2; i < 3; i++) {

       // Select Category
       cy.get('.category-tree > :nth-child('+i+') > a').click()

       // Count the category length
       cy.get('.selected > .tree-node li').then(function ($element) {
         const numOfRows = $element.length

         // Select Subcategory
         for (var j = 0; j < numOfRows; j++) {
          cy.get('.selected > .tree-node > :nth-child('+(j+1)+') > a').click()

          // Check if the URL displayed is the new format
          cy.url().should('include', json[j].New)

          // Check if the Heading match the Category
          cy.get('.results-wording').should('contain',json[i].Category);
         }
       })
      }
    })
  })
})
