// JIRA link : https://peopleperhour.atlassian.net/browse/PCM-520
// Short Description : For specific categories and subcategories the title tag, meta data,
// H1, h2 and optimized seo text should have specific content
// Project : PCM
// Sprint : 11
//
describe('Optimize SEO content for specific freelancer pages', function(){
  var url,Category,H1,H2,Meta

  //it('should check if the Category is selected when searching by a term that matches a Category', function(){
  //})

  it('should visit URL and check SEO content', function(){
    //cy.viewport('iphone-6')
    cy.readFile('cypress/integration/SEO_FL_content.json').then(function (json) {
     for (var i = 0; i < json.length; i++) {

       // Visit website
       cy.visit(json[i].url)

       // Check Category
       //cy.get('#freelancer-listing-search-form .input-group-btn > .btn > span').contains(json[i].Category)

       // Check the Title Tag
       //cy.title().should('eq', json[i].title_tag)

       // Check H1 Title
       cy.get('.heading__featured-seo-excerpt').should('contain',json[i].H1)

       // Check H2 Title
       cy.get('.featured-seo__title').should('contain',json[i].H2)

       // Check Content
       cy.get('.featured-seo__content').should('contain',json[i].content)

       // Check Meta Description
       //cy.get('[content]').should('contain',json[i].Meta)

       // Check that pagination is working
       cy.get('#freelancer-listing-pager > :nth-child(2) > a').click()
       cy.get('#main-container')
     }
    })
  })
})
