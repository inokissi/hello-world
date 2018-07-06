// If a user changes their email address through the site,
// then they should not be able to login using the new email address
// unless they click on the confirmation link sent via email (Subject : "Verify your new email address!")
describe('Change email address', function() {
    it('change email', function() {
        cy.clearCookies()

        // Login
        cy.LoginAsBuyer()

        // Check if Login was succesfull
        cy.url().should('include', '/dashboard')

        // Go to "Settings" page
        cy.visit('/settings/general?ref=topmenu_loggedin')

        // Click on "Edit" link
        cy.get(':nth-child(2) > .panel-heading > .row > .col-xs-2 > .call-to-action').click()

        // Enter new email address
        cy.get('#Freelancers_newEmail').type('penny+mynewemail@peopleperhour.com')
        cy.get('#Freelancers_emailConfirm').type('penny+mynewemail@peopleperhour.com')
        cy.get('#emailChange').click()
    })
    it('login with new email should fail', function() {

        // Visit "Login" page again
        cy.visit('/site/login')

        // Enter credentials
        cy.get('#main-container .login-form-container form input[name="LoginForm[email]"]').type('penny+mynewemail@peopleperhour.com')
        cy.get('#main-container .login-form-container form input[name="LoginForm[password]"]').type('qwerty123')
        cy.get('#main-container .login-form-container form input[type="submit"]').click()

        // Check if user is still on the login page
        cy.url().should('contain', '/site/login')

        // Check if there is a tooltip informing user that either the email or the password is incorrect
        cy.get('.tooltip-inner').contains('Wrong email or password')
    })
    it('login with old email should succeed', function() {
        // Login
        cy.LoginAsBuyer()

        // Check if Login was succesfull
        cy.url().should('include', '/dashboard')
    })
})
