// JIRA link : https://peopleperhour.atlassian.net/browse/PCM-520
// Short Description : For specific categories and subcategories the title tag, meta data,
// H1, h2 and optimized seo text should have specific content
// Project : PCM
// Sprint : 11
//
describe('Freelancer Listing : SEO page optimisation', function(){
  var url,Category,H1,H2,Meta

  //it('should check if the Category is selected when searching by a term that matches a Category', function(){
  //})

  // it('Title', function(){
  //   cy.readFile('cypress/integration/SEO_FL_content.json').then(function (json) {
  //    for (var i = 0; i < 3; i++) {
  //
  //      // Visit website
  //      cy.visit(json[i].url)
  //    }
  //   })
  // })

  it('H1 Title ', function(){

    cy.readFile('cypress/integration/SEO_FL_content.json').then(function (json) {
     for (var i = 0; i < json.length; i++) {

       // Visit website
       cy.visit(json[i].url)

       // Check H1 Title
       cy.get('.heading__featured-seo-excerpt').should('contain',json[i].H1)
     }
    })
  })
  it('H2 Title', function(){
    cy.readFile('cypress/integration/SEO_FL_content.json').then(function (json) {
     for (var i = 0; i < json.length; i++) {

       // Visit website
       cy.visit(json[i].url)

       // Check H2 Title
       cy.get('.featured-seo__title').should('contain',json[i].H2)
     }
    })
  })
  it('Content', function(){
    cy.readFile('cypress/integration/SEO_FL_content.json').then(function (json) {
     for (var i = 0; i < json.length; i++) {

       // Visit website
       cy.visit(json[i].url)

       // Check Content
       cy.get('.featured-seo__content').should('contain',json[i].content)
     }
    })
  })
  // it('Meta Description', function(){
  //   cy.readFile('cypress/integration/SEO_FL_content.json').then(function (json) {
  //    for (var i = 0; i < 3; i++) {
  //
  //      // Visit website
  //      cy.visit(json[i].url)
  //
  //      // Check Meta Description
  //      //cy.get('[content]').should('contain',json[i].meta_description)
  //    }
  //   })
  // })
})
