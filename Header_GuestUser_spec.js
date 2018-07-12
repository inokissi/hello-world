// Checking header elements for visibility and functionality as a guest user

describe('Anonymous user header - Desktop', function() {
  context('Removed items',function() {
    it('"Buy" category : Removed',function() {
      cy.visit('')
      cy.get('#reactContainer Header').should('not.contain','Buy')
    })
    it('"Sell" category : Removed',function() {
      cy.visit('')
      cy.get('#reactContainer Header').should('not.contain','Sell')
    })
  })
  context('Logo',function() {
    // Logo should be visible
    it('Logo : Visible',function() {
      cy.get('#reactContainer Header .logo__wrapper⤍Header⤚2oVZL svg').should('be.visible')
    })
    // Clicking Logo should lead user to homepage
    it('Clicking Logo should lead user to homepage',function() {
      cy.get('#reactContainer Header .logo__wrapper⤍Header⤚2oVZL svg').click()
      cy.url().should('eq','https://www.peopleperhour.com/')
    })
  })
  context('Post Job',function() {
    // "Post job" button should be visible
    it('"Post job" button : Visible',function() {
      cy.get('#reactContainer Header').contains('Post Job').should('be.visible')
    })
    // Clicking 'Post Job' button should lead to post job form
    it('Clicking "Post job" button lead user to "Post Job" form',function() {
      cy.get('#reactContainer Header').contains('Post Job').click()
      cy.url().should('contain','/job/new?ref=header')
    })
  })

  context('Browse',function() {
    it('"Browse" category : Visible',function() {
      cy.get('#reactContainer Header').contains('Browse').should('be.visible')
    })
    // "Browse" category contains 3 subcategories
    it('"Browse" category contains 3 subcategories',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY').children().should('have.length',3)
    })
    // 1st subcategory : Freelancers
    it('1st subcategory : Freelancers',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(1)').should('contain','Browse Jobs')
    })
    // Selecting on "Freelancers" leads to Freelancer listing
    it('Selecting "Freelancers" leads to Freelancer listing',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(1)').contains('Browse Jobs').click({force:true})
      cy.url().should('contain','/freelance-jobs')
    })
    // 2nd subcategory : Hourlies
    it('2nd subcategory : Hourlies',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(2)').should('contain','Browse Hourlies')
    })
    // Selecting on "Hourlies" leads to Hourlies listing
    it('Selecting "Hourlies" leads to Hourlies listing',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(2)').contains('Browse Hourlies').click({force:true})
      cy.url().should('contain','/hourlies')
    })
    // 3rd subcategory : Jobs
    it('3rd subcategory : Jobs',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(3)').should('contain','Browse Freelancers')
    })
    // Selecting on "Jobs" leads to Jobs listing
    it('Selecting "Jobs" leads to Jobs listing',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(3)').contains('Browse Freelancers').click({force:true})
      cy.url().should('contain','/hire-freelancers')
    })
  })

  context('How it works',function() {
    // "How it Works" link should be visible and should lead to /how-it-works-buyer page
    it('How it Works" link : Visible',function() {
      cy.get('#reactContainer Header').contains('How it works').should('be.visible')
    })
    // Clicking on "How it Works" should lead user to a specific page
     it('Clicking on "How it Works" should lead user to a specific page',function() {
      cy.get('#reactContainer Header').contains('How it works').click()
      cy.url().should('contain','/static/how-it-works-buyer')
    })
  })
    // "Login" link should be visible and lead to login form
  context('Login',function() {
    it('"Login" : Visible',function() {
      cy.get('#reactContainer Header').should('contain','Log in')
    })
    it('Clicking on "Login" lead user to signup page',function() {
      cy.get('Header').contains('Log in').click()
      cy.url().should('contain','/site/login')
    })
  })
    // "Signup" link should be visible and lead to signup form
  context('Signup',function() {
    it('"Signup" : Visible',function() {
      cy.get('#reactContainer Header').should('contain','Sign up')
    })
    it('Clicking on "Signup" lead user to signup page',function() {
      cy.get('Header').contains('Sign up').click()
      cy.url().should('contain','/site/register')
    })
  })
  context('Freelancer',function() {
    it('"Freelancer?" category : Visible',function() {
      cy.get('#reactContainer Header').should('contain','Freelancer?')
    })
    it('Clicking on "Freelancer?" lead user to signup page',function() {
      cy.get('Header').contains('Freelancer?').click()
      cy.url().should('contain','/site/register')
    })
  })
})
