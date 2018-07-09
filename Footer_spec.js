describe('Footer', function() {
    it('should be at the bottom of the screen', function() {
    	cy.visit('/')
    	cy.LoginAsBuyer()
    	cy.readFile('/cypress/integration/Devices.json').then(function (json) {
	     	for (var i = 1; i < json.length; i++) {
	     		cy.viewport(json[i].device)
	     		cy.get('footer .footer__top-row⤍Footer⤚2pr4q').scrollIntoView()
	     		cy.wait(1000)
	     	}
     	})
	})
})