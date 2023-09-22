describe('test the test automation page', () => {
	beforeEach(() => {
		cy.visit('/home/automation')
	})

	it.skip('should Fill the form', () => {
		cy.get('#name').as('username')
		cy.get('#phone').as('phone')
		cy.get('#email').as('email')
		cy.get('#password').as('password')
		cy.get('#address').as('address')
		cy.get('@username').type('Tashi Phuntsho', { delay: 50 })
		cy.get('@username').should('have.value', 'Tashi Phuntsho')
		cy.get('@phone').type('77334451')
		cy.get('@email').type('Tashi@gmail.com')
		cy.get('@password').type('12345')
		cy.get('@address').type('Thimphu, Selise')
		cy.contains('Submit').click()
	})

	it('should fill form from fixtures', () => {
		cy.fixture('user').then(user => {
			const username = user.username
			const phone = user.phone
			const email = user.email
			const password = user.password
			const address = user.address

			cy.get('#name').type(username)
			cy.get('#phone').type(phone)
			cy.get('#email').type(email)
			cy.get('#password').type(password)
			cy.get('#address').type(address)
		})
	})

	it.skip('should write data into json and txt files', () => {
		cy.writeFile('authenticatedUser.json', { name: 'Thinley', age: 25 })
		cy.writeFile('authenticatedUser.txt', 'The list of user in the json format')
	})

	it('should read json, txt and document content', () => {
		cy.readFile('authenticatedUser.json').its('age').should('eq', 25)

		cy.readFile('authenticatedUser.txt').should('contain', 'json format')

		cy.wait(2000)
		cy.document().its('contentType').should('eq', 'text/html')
		cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
	})

	it('checkbox and radiobutton', () => {
		cy.get('#male').click()
		cy.get('#monday').click()
	})

	it('Select from the select box', () => {
		cy.get('select').select('Spain')
		cy.get('select').should('contain', 'Spain')
	})

	it('should click the solution button', () => {
		const solutionButton = Cypress.$('button')
	})
})
