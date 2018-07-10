// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
// -- This is a parent command --
Cypress.Commands.add('LoginAsBuyer', () => {
  cy.visit('/site/login')
  cy.get('#reactContainer .login-form-container form input[name="LoginForm[email]"]').type('penny+mybuyer@peopleperhour.com') // mem_id=808754
  cy.get('#reactContainer .login-form-container form input[name="LoginForm[password]"]').type('qwerty')
  cy.get('#reactContainer .login-form-container form input[type="submit"]').click()
})
Cypress.Commands.add('LoginAsSeller', () => {
  cy.visit('/site/login')
  cy.get('#reactContainer .login-form-container form input[name="LoginForm[email]"]').type('penny+myseller@peopleperhour.com') // Staging 1935443, Live 1989051
  cy.get('#reactContainer .login-form-container form input[name="LoginForm[password]"]').type('qwerty')
  cy.get('#reactContainer .login-form-container form input[type="submit"]').click()
})

Cypress.Commands.add('SignupAsSeller', () => {
// Create random number in order to use it as memid
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()

// Visit website
    cy.visit('/site/register')

// Fill out the regsitartion form and submit it
    cy.get('#EmailMemberRegistration_fname').type('MyFirstName')
    cy.get('#EmailMemberRegistration_lname').type('MyLastName')
    cy.get('#EmailMemberRegistration_email').type('penny+'+id+'@peopleperhour.com')
    cy.get('#EmailMemberRegistration_password').type('qwerty')
    cy.get('#EmailMemberRegistration_memType_1').check({force:true})
    //cy.get('#EmailMemberRegistration_businessSeller .custom-orange-radio-button').first().should('contain','SELECT').click({force:true})
    cy.get('label[for="EmailMemberRegistration_acceptTerms"]').click({force:true})
})

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
