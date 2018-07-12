describe('Post Job', function() {
  it('Fill out and submit form', function() {
    cy.clearCookies()

    cy.LoginAsBuyer()
    cy.wait(3000)

    // Search for "Post Job" button on header and click it
    cy.get('#reactContainer .page-container .header⤍Header⤚3P2AL a').contains('Post Job').click()

    // The Post job should open
    cy.url().should('include','/job/new?ref=header')

    // Fill in all mandatory fields

    // // WHAT DO YOU NEED TO GET DONE?
    // cy.get('#Projects_title').type('E2E testing expert needed')
    //
    // // PICK CATEGORY
    // cy.get('select[name="Projects[category_id]"]').select('Admin')
    // cy.get('select[name="Projects[subcate_id]"]').select('Transcription')
    //
    // // DESCRIPTION
    // cy.get('#Projects_proj_desc').type('This is the job description!This is the job description!')
    //
    // // EXPERIENCE LEVEL
    // cy.get('#Projects_budget_bracket .xpHead').contains('Intermediate').click({force:true})

    // Click on "+ Show advanced options (location, visibility, duration, interview questions)"
    cy.get('#reactContainer .toggle-advanced').contains('Show advanced options').click({force:true})

    // Check the PRIVATE radio button
    cy.get('#Projects_privacy[Private] input[type="radio"]').check()
    //cy.get('#form-job').submit()
    // Click on 'POST JOB' button
    cy.get('#btPostJob').contains('Post Job')//.click()
    cy.wait(3000)

    cy.get('.call-to-action').contains('Skip').click()

    cy.get('.call-to-action').contains('Skip').click()
  })
})
