// Jira link : https://peopleperhour.atlassian.net/browse/TRO-772  
describe('Seller header - Desktop', function() {
  context('Removed items',function() {
    beforeEach(() => {
      cy.LoginAsSeller()
      cy.wait(3000)
    })
    it('"Buy" category : Removed',function() {
      cy.visit('')
      cy.get('#reactContainer Header .header⤍Header⤚3P2AL').should('not.contain','Buy')
    })
    it('"Sell" category : Removed',function() {
      cy.visit('')
      cy.get('#reactContainer Header .header⤍Header⤚3P2AL').should('not.contain','Sell')
    })
  })
  context('Post Job',function() {
    beforeEach(() => {
      cy.LoginAsSeller()
      cy.wait(3000)
    })
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
    beforeEach(() => {
      cy.LoginAsSeller()
      cy.wait(3000)
    })
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
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(1)').should('contain','Freelancers')
    })
    // Selecting on "Freelancers" leads to Freelancer listing
    it('Selecting "Freelancers" leads to Freelancer listing',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(1)').contains('Freelancers').click({force:true})
      cy.url().should('contain','/hire-freelancers')
    })
    // 2nd subcategory : Hourlies
    it('2nd subcategory : Hourlies',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(2)').should('contain','Hourlies')
    })
    // Selecting on "Hourlies" leads to Hourlies listing
    it('Selecting "Hourlies" leads to Hourlies listing',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(2)').contains('Hourlies').click({force:true})
      cy.url().should('contain','/hourlies')
    })
    // 3rd subcategory : Jobs
    it('3rd subcategory : Jobs',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(3)').should('contain','Jobs')
    })
    // Selecting on "Jobs" leads to Jobs listing
    it('Selecting "Jobs" leads to Jobs listing',function() {
      cy.get('#reactContainer Header').contains('Browse').click()
      cy.get('.dropdown⤍Header⤚3U6fY :nth-child(3)').contains('Jobs').click({force:true})
      cy.url().should('contain','/freelance-jobs')
    })
  })
  //Boost Your Sales and View Leaderboard are removed
  context('Favourites',function() {
    // Favourites menu: People -> Freelancers
    it('User name removed from avatar',function() {
      cy.get('[href="/freelance?favourites=my-favourites]').should('not.contain','Hi Penny')
    })
  })
  context('Workstreams',function() {
    // Workstreams menu shows how many of them are unread
  })
  context('Notifications',function() {
    // Notifications menu shows how many of them are unread
    // Notifications icons have been removed
    // Notifications/Notification Settings -> Settings/Notifications
  })
  // User menu
  context('User menu',function() {
    beforeEach(() => {
      cy.LoginAsSeller()
      cy.wait(3000)
    })
    // User name should be removed from the avatar.
    it('User name removed from avatar',function() {
      cy.get('.menu__link--greeting⤍HeaderLoggedLegacy⤚34iIQ').should('not.contain','Hi Penny')
    })

    // Full user name displayed on the avatar menu
    it('Full user name displayed on the avatar menu',function() {
      cy.get('.dropdown__label⤍Header⤚2uaEI > .member__figure⤍avatar⤚3r19V > .link--image⤍avatar⤚1Js3- > .user-avatar⤍avatar⤚qr_k5').click()
      cy.get('.member__fname⤍Header⤚1sf8A').should('contain','Penny Withdrawals')
    })

    // Email displayed on the avatar menu
    it('Email displayed on the avatar menu',function() {
      cy.get('.dropdown__label⤍Header⤚2uaEI > .member__figure⤍avatar⤚3r19V > .link--image⤍avatar⤚1Js3- > .user-avatar⤍avatar⤚qr_k5').click()
      cy.get('.member__email⤍Header⤚2Sk05').should('contain','penny+cypress@peopleperhour.com')
    })

    // Profile Edit option is provided on hovering over the avatar on the avatar menu
    it('Edit option displayed on hovering over the avatar in dropdown menu',function() {
      cy.get('.dropdown__label⤍Header⤚2uaEI > .member__figure⤍avatar⤚3r19V > .link--image⤍avatar⤚1Js3- > .user-avatar⤍avatar⤚qr_k5').click()
      cy.get('.member__edit-profile⤍Header⤚3Sksd').contains('Edit').invoke('show').should('be','visible')
      //.invoke('show')
      //.click()
      //cy.url().should('contain','/freelancer/penny/quality-specialist-google-sheets/1935443/edit')
    })
  })
})
