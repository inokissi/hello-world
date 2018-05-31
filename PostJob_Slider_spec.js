describe('SLIDER', function(){
  it('The page should load',function() {
    cy.visit('/job/new/?budgetSlider=1')
  })
  context('When category and subcategory are NOT selected ', function() {
    it('then the SLIDER should be disabled', function() {
      cy.visit('/job/new/?budgetSlider=1')
      cy.get('#main-container  .budget-slider-container  .noUi-handle-lower').should('have.value','')
    })
    it('then the BUDGET field should not be editable', function() {
      cy.get('#Projects_budget_actual').should('be.disabled')
    })
    it('then no price should be displayed above the BUDGET SLIDER ', function() {
      cy.get('.tooltip-budget').should('have.value','')
    })
    it('then no price should be displayed in the BUDGET field', function() {
      cy.get('#Projects_budget_actual').should('have.value','0')
    })
  })
  context('When category and subcategory selected ', function() {
    it('then the slider should move to the TOP CERT median', function() {
      cy.get('select[name="Projects[category_id]"]').select('Business Support')
      cy.get('select[name="Projects[subcate_id]"]').select('Accounting')
      cy.get('select[name="Projects[project_type]"]').select('Fixed Price')
      cy.get('.tooltip-budget').should('not.eq','0')
      cy.get('.tooltip-text').should('contain','TOP CERT')
    })
    it('then the BUDGET field should be editable', function() {
      cy.get('#Projects_budget_actual').should('not.be.disabled')
    })
    it('then the cert level that the slider is currently on should appear on the slider', function() {
      cy.get('.average-job-list > :nth-child(1) > .cert-badge').click()
      cy.get('.tooltip-text').should('contain','CERT 4')
      cy.get('.average-job-list > :nth-child(2) > .cert-badge').click()
      cy.get('.tooltip-text').should('contain','CERT 5')
      cy.get('.average-job-list > :nth-child(3) > .cert-badge').click()
      cy.get('.tooltip-text').should('contain','TOP CERT')
    })
    it('then a price should be displayed above the slider', function() {
      cy.get('#main-container  .budget-slider-container  .noUi-handle-lower').should('not.eq','0')
    })
    it('then a price should be displayed in the BUDGET field', function() {
      cy.get('#Projects_budget_actual').should('not.eq','0')
    })
    it('then a price should be displayed next to each CERT button', function() {
      cy.get('.average-job-header').should('contain','Business Support (Accounting).')
      cy.get('.average-job-list > :nth-child(1)').should('not.eq','0')
      cy.get('.average-job-list > :nth-child(2)').should('not.eq','0')
      cy.get('.average-job-list > :nth-child(3)').should('not.eq','0')
    })
    it('then the CERT buttons below the slider should be displayed based on the following order: CERT4, CERT5, TOP CERT', function() {
      cy.get('.average-job-list > :nth-child(1) > .cert-badge').should('contain','CERT 4')
      cy.get('.average-job-list > :nth-child(2) > .cert-badge').should('contain','CERT 5')
      cy.get('.average-job-list > :nth-child(3) > .cert-badge').should('contain','TOP CERT')
    })
    it('then the CERT buttons below the slider should also be clickable', function() {
      cy.get('.average-job-list > :nth-child(1) > .cert-badge').click()
      cy.get('.average-job-list > :nth-child(2) > .cert-badge').click()
      cy.get('.average-job-list > :nth-child(3) > .cert-badge').click()
    })
    it('then once a CERT button is clicked, the slider should move', function() {
      cy.get('#Projects_budget_actual').not('[disabled]')
    })
    it('then once a CERT button is clicked, the wording should change', function() {
      cy.get('.average-job-list > :nth-child(1) > .cert-badge').should('contain','CERT 4').click()
      cy.get('.average-job-header').should('contain','CERT 4')
      cy.get('.average-job-list > :nth-child(2) > .cert-badge').should('contain','CERT 5').click()
      cy.get('.average-job-header').should('contain','CERT 5')
      cy.get('.average-job-list > :nth-child(3) > .cert-badge').should('contain','TOP CERT').click()
      cy.get('.average-job-header').should('contain','TOP CERT')
      cy.get('.tooltip-budget').trigger('mousedown')
    })
    it('then if no budget has been set,an error message should be displayed upon clicking the POST JOB button', function() {
      cy.get('#Projects_budget_actual').clear().type('0')
      cy.get('#btPostJob').click()
      cy.get('.state-error > .tooltip-inner').contains('Budget is required')
    })
  })
  context('When different currency is selected', function() {
    it('then the currency next to the CERT buttons should match the currency selected', function() {
      cy.get('select[name="Projects[currency]"]').select('GBP')
      cy.get('.average-job-list > :nth-child(1)').should('contain','£')
      cy.get('.average-job-list > :nth-child(2)').should('contain','£')
      cy.get('.average-job-list > :nth-child(3)').should('contain','£')
    })
    it('then the currency above the slider should match the currency selected', function() {
      cy.get('.tooltip-budget').should('contain','£')
    })
  })
  context('When all mandatory fields have been filled', function() {
    it('then the form should be submitted successfully', function() {

      // Login
      cy.visit('/site/login')
      cy.get('#main-container .login-form-container form input[name="LoginForm[email]"]').type('penny+buyer5555@peopleperhour.com')
      cy.get('#main-container .login-form-container form input[name="LoginForm[password]"]').type('qwerty123')
      cy.get('#main-container .login-form-container form input[type="submit"]').click()
      cy.wait(3000)

      // Go to job post form
      cy.visit('/job/new/?budgetSlider=1')

      // Fill out the form
      cy.get('#Projects_title').type('This is what I want to be done')
      cy.get('select[name="Projects[category_id]"]').select('Business Support')
      cy.get('select[name="Projects[subcate_id]"]').select('Accounting')
      cy.get('select[name="Projects[project_type]"]').select('Fixed Price')
      cy.get('#Projects_proj_desc').type('This is the description of the project. Please read carefully and feel free to ask if you have any questions.')

      // Submit form
      cy.get('#form-job').submit()
    })
  })
})
