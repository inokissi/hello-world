describe('Post Job', function() {
    it('Fill out and submit form', function() {
        cy.clearCookies()

        cy.LoginAsBuyer()
        cy.wait(3000)

        cy.get('a').contains('Post Job').click()

        cy.get('#Projects_title').type('This is the job title!')                                        //
        cy.get('select[name="Projects[category_id]"]').select('Admin')
        cy.get('select[name="Projects[subcate_id]"]').select('Transcription')
        cy.get('#Projects_proj_desc').type('This is the job description!This is the job description!')
        cy.get('#Projects_budget_bracket .xpHead').contains('Intermediate').click({force:true})
        //cy.get('#form-job').submit()
        cy.get('#btPostJob').contains('Post Job').click()
        cy.wait(3000)

        cy.get('.call-to-action').contains('Skip').click()

        cy.get('.call-to-action').contains('Skip').click()

    })
})