// JIRA link : https://peopleperhour.atlassian.net/browse/PCM-481
// Project : PCM
// Sprint : MAR Sprint 7, MAR Sprint 8, PCM Sprint 11, PCM Sprint 13, PCM Sprint 14
//
describe('New URL structure on Job listing', function(){
  var url,Category,H1,H2,Meta

  it('should visit URL and check SEO content', function(){

    // Enter URL
    cy.visit('/freelance-jobs')

    // Click "All Categories" button
    cy.get('.categories-group > .input-group-btn > .btn > span').click()

    // Read Categories and Subcategories from file
    cy.readFile('cypress/integration/SEO_Jobs.json').then(function (json) {
     for (var i = 2; i < 3; i++) {

       // Select Category
       cy.get('.category-tree > :nth-child('+i+') > a').click()

       // Select Subcategory
       for (var j = 0; j < 2; j++) {
        cy.get('.selected > .tree-node > :nth-child('+(j+1)+') > a').click()

        // Check if the URL is displayed in accordance to the new format
        cy.url().should('include', json[j].New)

        // Check if the Heading match the Category
        cy.get('.results-wording').should('contain',json[i].Category);

       }
     }
    })
  })
})
