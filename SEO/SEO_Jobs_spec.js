// JIRA link : https://peopleperhour.atlassian.net/browse/PCM-481
// Description :
// Categories
// From: https://www.peopleperhour.com/freelance-jobs?category=31&subcat=
// To: https://www.peopleperhour.com/freelance-jobs/writing/
// Subcategories
// From: https://www.peopleperhour.com/freelance-jobs?category=31&subcat=408
// To: https://www.peopleperhour.com/freelance-jobs/writing/letter/
//
describe('Job Listing : URLs', function(){
  var url,Category,subs,numOfRows,numOfCatItems

  it('should not contain any numbering ', function(){

    // Enter URL
    cy.visit('/freelance-jobs')

    // Click "All Categories" button
    cy.get('.categories-group > .input-group-btn > .btn > span').click()

    // Count the number of Category items
    cy.get('.category-tree li').then(function ($CatItems) {
      const numOfCatItems = $CatItems.length

      // Read Categories and Subcategories from file
      cy.readFile('cypress/integration/SEO/SEO_Jobs.json').then(function (json) {
       for (var i = 2; i < numOfCatItems; i++) {

         // Select Category
         cy.get('.category-tree > :nth-child('+i+') > a').click()

         // Count the number of subcategory items
         cy.get('.selected > .tree-node li').then(function ($SubCatItems) {
           const numOfSubCatItems = $SubCatItems.length

           // Select Subcategory
           for (var j = 0; j < numOfSubCatItems; j++) {
            cy.get('.selected > .tree-node > :nth-child('+(j+1)+') > a').click()

            // Check if the URL displayed is the new format
            cy.url().should('include', json[j].URL)

            // Check if the Heading match the Category
            cy.get('.results-wording').should('contain',json[j].Category);
           }
         })
        }
      })
    })
  })
})

