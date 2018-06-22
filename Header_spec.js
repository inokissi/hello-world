// Jira link : https://peopleperhour.atlassian.net/browse/TRO-771
// describe('Anonymous user header - Desktop', function() {
//   it('"Buy" and "Sell" categories removed',function() {
//     cy.visit('')
//     cy.get('#reactContainer Header').should('not.contain','Buy')
//     cy.get('#reactContainer Header').should('not.contain','Sell')
//   })
//   it('"Browse" category added',function() {
//     cy.get('#reactContainer Header').should('contain','Browse')
//   })
//   it('"Freelancer?" category added',function() {
//     cy.get('#reactContainer Header').should('contain','Freelancer?')
//   })
//   it('User lands on signup page when clicking on "Freelancer?" ',function() {
//     cy.get('Header').contains('Freelancer?').click()
//     cy.url().should('contain','/site/register')
//   })
// })

// Jira link : https://peopleperhour.atlassian.net/browse/TRO-772
describe('Seller header - Desktop', function() {
  beforeEach(() => {
    cy.loginAsSeller()
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
  // Notifications menu shows how many of them are unread

  // Notifications icons have been removed

  // Notifications/Notification Settings -> Settings/Notifications

  // Workstreams menu shows how many of them are unread

  // Favourites menu: People -> Freelancers
  // it('User name removed from avatar',function() {
  //   cy.get('[href="/freelance?favourites=my-favourites]').should('not.contain','Hi Penny')
  // })
  // Boost Your Sales and View Leaderboard are removed

})

// // Jira Link : https://peopleperhour.atlassian.net/browse/TRO-773
// describe('Buyer header - Desktop', function() {
//   it('User name is removed from the avatar.',function() {
//   })
// })
//
// // Jira link : https://peopleperhour.atlassian.net/browse/TRO-774
// describe('Dual header - Desktop', function() {
//   it('Navigate',function() {
//
//   })
// })
