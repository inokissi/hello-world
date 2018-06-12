// Jira story : https://peopleperhour.atlassian.net/browse/PCM-842
// Description :
// When clicking on the invite sellers link the following should happen:
// a) The link should be in the form of https://staging.peopleperhour.com/hire-freelancers/customer+service+a+FS+b+testing?proj_id=1800790
// and not https://staging.peopleperhour.com/freelance/customer+service+a+FS+b+testing?proj_id=1800790
// b) a search para should be added at the end of the URL to signify search
// https://staging.peopleperhour.com/hire-freelancers/customer+service+a+FS+b+testing?proj_id=1800790&ref=search

describe('Post Job : Invite Freelancers', function(){
  var Category,Subcategory
  it('the link should have the following format /hire-freelancers/<JobTitle>?proj_id<xxxx>&ref=search', function(){

    // Login
    cy.visit('/site/login')
    cy.get('#main-container .login-form-container form input[name="LoginForm[email]"]').type('penny+cypress@peopleperhour.com')
    cy.get('#main-container .login-form-container form input[name="LoginForm[password]"]').type('qwerty')
    cy.get('#main-container .login-form-container form input[type="submit"]').click()
    cy.wait(4000)

    // Edit job
    cy.visit('/job/update?id=2042276&jobview=1')

    cy.readFile('/cypress/integration/SEO_Jobs.json').then(function (json) {
     for (var i = 0; i < json.length; i++) {

     // Select Category and Subcategory
     cy.get('select[name="Projects[category_id]"]').select(json[i].Category)
     cy.get('select[name="Projects[subcate_id]"]').select(json[i].Subcategory)

     // Submit form
     cy.get('#btPostJob').click()

     // Click the "Invite Freelancers" button
     cy.visit('/job/proposals/2042276?ref=buyer_activity')
     cy.get('.clearfix > .btn').click()
     //cy.get('#proposal-list-container .btn').should('contain','Invite Freelancers').click()

     // Check that the URL is correct
     cy.url().should('contain','/hire-freelancers/')
     cy.url().should('contain','&ref=search')

     // Edit job
     cy.visit('/job/update?id=2042276&jobview=1')
     }
   })
  })
})
