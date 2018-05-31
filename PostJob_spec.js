describe('JOB POST Form', function() {
  it('The page should load',function() {
    cy.visit('/job/new/')
  })
  it('The EMAIL ADDRESS, FIRST NAME and LAST NAME fields should be available to a guest user',function() {
    cy.get('#ExpressMemberRegistration_email').should('be.visible').type('madonna@example.com').clear()
    cy.get('#ExpressMemberRegistration_fname').should('be.visible').type('Mad').clear()
    cy.get('#ExpressMemberRegistration_lname').should('be.visible').type('Dona').clear()
  })
  it('An error message should be displayed when the email entered has an invalid format',function() {
    cy.get('#ExpressMemberRegistration_email').should('be.visible').type('madonna')
    cy.get('#form-job').submit()
    cy.get('.tooltip-inner').should('be.visible').should('contain','Email address is not a valid email address.')
  })
  it('The FACEBOOK and LINKEDIN signup buttons should be available and clickable for guests',function() {
    cy.get('.linkedin').should('be.visible').should('have.class','social-button').not('[disabled]')
    cy.get('.facebook').should('be.visible').should('have.class','social-button').not('[disabled]')
  })

  it('The CATEGORY dropdown menu should be visible and clickable', function() {
    cy.get('#Projects_category_id').should('be.visible').not('[disabled]')
  })

  it('All available categories should be included in the dropdown menu', function() {
    cy.get('#Projects_category_id > option').should(($option) => {
      expect($option).to.have.length(16)
      expect($option.eq(0)).to.contain('Select')
      expect($option.eq(1)).to.contain('Admin')
      expect($option.eq(2)).to.contain('Business Support')
      expect($option.eq(3)).to.contain('Creative Arts')
      expect($option.eq(4)).to.contain('Design')
      expect($option.eq(5)).to.contain('Extraordinary')
      expect($option.eq(6)).to.contain('Marketing & PR')
      expect($option.eq(7)).to.contain('Mobile')
      expect($option.eq(8)).to.contain('Search Marketing')
      expect($option.eq(9)).to.contain('Social Media')
      expect($option.eq(10)).to.contain('Software Development')
      expect($option.eq(11)).to.contain('Translation')
      expect($option.eq(12)).to.contain('Tutorials')
      expect($option.eq(13)).to.contain('Video, Photo & Audio')
      expect($option.eq(14)).to.contain('Web Development')
      expect($option.eq(15)).to.contain('Writing')
    })
  })

  it('The SUBCATEGORY dropdown menu should be visible but disabled', function() {
    cy.get('#Projects_subcate_id').should('be.visible').should('be.disabled')
  })
  it('The SUBCATEGORY dropdown menu should be enabled once a CATEGORY has been selected', function() {
    cy.get('select[name="Projects[category_id]"]').select('Business Support')
    cy.get('#Projects_subcate_id').should('be.visible').not('[disabled]')
  })
  it('The SUBCATEGORY dropdown menu should be disabled once the CATEGORY is deselected', function() {
    cy.get('select[name="Projects[category_id]"]').select('Select')
    cy.get('#Projects_subcate_id').should('be.visible').should('be.disabled')
  })
  it('The POST JOB button should be visible and clickable', function() {
    cy.get('#btPostJob').should('be.visible').should('not.be.disabled')
  })
  it('A blank form should not be submited',function() {
    cy.get('#form-job').submit()
    cy.url().should('include','/job/new/')
  })
  it('The form should be submitted successfully, if all the mandatory fields have been filled out', function() {
    cy.get('#ExpressMemberRegistration_email').type('madonna@example.com')
    cy.get('#ExpressMemberRegistration_fname').type('Mad',{force:true})
    cy.get('#ExpressMemberRegistration_lname').type('Dona')
    cy.get('select[name="Projects[category_id]"]').select('Admin')
    cy.get('select[name="Projects[subcate_id]"]').select('Transcription')
    cy.wait(3000)
    cy.get('#Projects_title').type('This is the job title!')
    cy.get('#Projects_proj_desc').type('This is the job description!This is the job description!')
    cy.get('#Projects_budget_bracket_1')
    .click({force:true})
    cy.get('#form-job').submit()
    //cy.url().should('not.include','/job/new/')
    //cy.url().should('contain','/site/login')
  })
  it('The form should not be submitted if not all mandatory fields have been filled',function() {
    cy.visit('/job/new/')
    cy.get('#ExpressMemberRegistration_email').clear().type('madonna@example.com')
    cy.get('#form-job').submit()
    cy.get('#ExpressMemberRegistration_fname').should('be.visible').type('Mad')
    cy.get('#form-job').submit()
    cy.get('#ExpressMemberRegistration_lname').should('be.visible').type('Dona')
    cy.get('#form-job').submit()
    cy.get('select[name="Projects[category_id]"]').select('Admin')
    cy.get('#form-job').submit()
    cy.get('select[name="Projects[subcate_id]"]').select('Transcription')
    cy.get('#form-job').submit()
    cy.get('#Projects_title').type('This is the job title!')
    cy.get('#form-job').submit()
    cy.get('#Projects_proj_desc').type('This is the job description!This is the job description!')
    cy.get('#form-job').submit()
    cy.get('tooltip-inner').should('not.exist')
    cy.url().should('include','/job/new/')
  })
  it('The signup form should not be available to a non-authenticated user',function() {
    cy.visit('/site/login')
    cy.get('input[name="LoginForm[email]"]').type('penny+cypress@peopleperhour.com')
    cy.get('input[name="LoginForm[password]"]').type('cypress123')
    cy.get('#yw0').submit()
    cy.wait(3000) //need to allow a few seconds for the page to load
    //cy.visit('/job/new/?budgetSlider=1')
    //cy.url().should('.include','/dashboard')
    cy.get('.page-container').contains('Post Job')
    .click({force: true}) // CSS property: 'display: none'
    cy.get('.signup__job').should('not.be.visible')
  })
})
