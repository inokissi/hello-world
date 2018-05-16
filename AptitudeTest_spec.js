// Story title : Aptitude Test Front End
// Jira Link : https://peopleperhour.atlassian.net/browse/TRO-654
// Project : TRO
// Sprint : 11
// Date : 16-Apr-2018

describe('Aptitude Test', function(){
  it('should score 100% and pass the test (content-based)', function(){
    // Select viewport


    // Login
    cy.visit('/site/login')
    cy.get('input[name="LoginForm[email]"]').type('whatever+1868731@peopleperhour.com')
    cy.get('input[name="LoginForm[password]"]').type('a')
    cy.get('#yw0').submit()
    cy.wait(4000)

    // Go to test page
    cy.visit('/aptitude-test')

    // Click on the "START TEST" button to start the TEST
    cy.get('.pph-l-col-xs-12 > .pph-c-button⤍Button⤚3tdgy').should('contain','Start').click()


    // Check the validity of URL
    cy.url().should('include', '/aptitude-test/start')

    // Read answers from file
    cy.readFile('cypress/integration/AptitudeTest_CorrectAnswers.json').then(function (json) {
     for (var i = 0; i < 24; i++) {
       cy.get('#reactContainer .container__questions⤍AptitudeTest⤚cvxmz ul li').contains(json[i].A).click() // Select answer
       cy.get('.u-txt--center > .pph-c-button⤍Button⤚3tdgy').click() // Click on the "Continue" button
       cy.wait(2000)
     }
    })
  })
})
