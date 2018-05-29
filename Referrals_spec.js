describe('REFERRAL PROGRAM', function() {
    it('should send invitation', function() {
      cy.visit('/site/login')
      // it should enter email address
      cy.get('#main-container .login-form-container form input[name="LoginForm[email]"]')
        .type('penny+referrals01@peopleperhour.com')
      // it should enter password
      cy.get('#main-container .login-form-container form input[name="LoginForm[password]"]')
        .type('qwerty123')
      // it should click the LOG IN button
      cy.get('#main-container .login-form-container form input[type="submit"]')
        .click()

      cy.url().should('include', '/dashboard')
      //cy.get('.dropdown-menu > :nth-child(7) > a').click({force:true})
      //cy.get('.user-menu .dropdown-toggle .dropdown-menu > :nth-child(6) > a').contains("Invite & Earn").click({force:true})
      // staging
      //cy.get('.menu__dropdown⤍HeaderLogged⤚hrbhS').contains("Invite & Earn").click({force:true})
      cy.get('.menu__dropdown⤍HeaderLoggedLegacy⤚21mc2 > :nth-child(6) > a').contains("Invite & Earn").click({force:true})

      cy.url().should('include', '/referral-program')
      // it should enter the email address of the person that is going to be invited
      for (var i = 0; i < 3; i++) {
        cy.get('#reactContainer form input[placeholder="Enter email address (separate multiple email addresses with comma)"]')
          .type('refpenny+490'+i+'@gmail.com,')
      }
      // it should click the INVITE FRIENDS button
      //cy.get('#site-wrapper button input[type="submit"]').click()
      cy.get('.referral__cta⤍Referral⤚2N8AF')
        .should('contain','INVITE FRIENDS')
        .click()
      // Wait 3 seconds
      cy.wait(5000)
      cy.get('form').should('be.visible').should('contain','Invitation sent')
    })
  })
