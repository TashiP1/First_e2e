class Base {
	static LoadHome() {
		cy.visit('https://itera-qa.azurewebsites.net')
	}
}

class homePage extends Base {
	static addUser() {
		cy.get('a').contains('Sign Up').click()

		cy.fixture('signup').then(signup => {
			const firstname = signup.Firstname
			const surname = signup.surname
			const epost = signup.epost
			const mobile = signup.mobile
			const username = signup.username
			const password = signup.password
			const confirm = signup.confirm

			cy.get('#FirstName').type(firstname)
			cy.get('#Surname').type(surname)
			cy.get('#E_post').type(epost)
			cy.get('#Mobile').type(mobile)
			cy.get('#Username').type(username)
			cy.get('#Password').type(password)
			cy.get('#ConfirmPassword').type(confirm)
			cy.get('#FirstName').should('have.value', firstname)
			cy.get('#Surname').should('have.value', surname)
			cy.get('#E_post').should('have.value', epost)
			cy.get('#Mobile').should('have.value', mobile)
			cy.get('#Username').should('have.value', username)
			cy.get('#ConfirmPassword').should('have.value', confirm)
			cy.get('#Password').should('have.value', confirm)
			cy.xpath('//input[@id="submit"]').should('be.visible')
			cy.xpath('//input[@id="submit"]').click()
			cy.xpath('//form').should('have.length', '2')
			// cy.get('#submit').click()
			// cy.get('.label-success')
			// 	.contains('Registration Successful')
			// 	.should('be.visible')

			// if (registrationWasSuccessful()) {
			// 	cy.get('.label-success')
			// 		.contains('Registration Successful')
			// 		.should('be.visible')
			// 	cy.get('.label-danger').should('not.be.visible')
			// } else {
			// 	cy.get('.label-success').should('not.be.visible')
			// 	cy.get('.label-danger')
			// 		.contains('Registration Failed')
			// 		.should('be.visible')
			// }
		})

		// function registrationWasSuccessful() {
		// 	return true
		// }
	}

	static loginuser() {
		cy.get('a').contains('Login').click()

		cy.fixture('login').then(login => {
			const username = login.username
			const password = login.password

			cy.get('#Username').type(username)
			cy.get('#Password').type(password)

			cy.get('input[type="submit"]').click()
			cy.get('h3').contains('Welcome').should('contain', username)
		})
	}
}

describe('Url and home page test', () => {
	it('should check the title', () => {
		Base.LoadHome()
		cy.title().should('include', 'Home Page - Testautomation practice page')
	})

	it('should overide the current time', () => {
		const date = new Date(2023, 12, 7).getTime()
		cy.clock(date)
		cy.log(date)
	})

	it('Loads the Itera URL', () => {
		Base.LoadHome()
		cy.url().should('include', 'itera-qa.azurewebsites.net')
		cy.log('Before Reload')
		cy.reload()
		cy.log('After Reload')

		cy.get('h1').contains('Test Automation').should('be.visible')
	})

	it('should handle searchbox', () => {
		Base.LoadHome()
		cy.get('input').type('Tutorial {enter}')
		// cy.get('input').screenshot()
	})

	it('checks the nav-links', () => {
		Base.LoadHome()
		cy.get('a').contains('Practice').click()
		cy.get('h2').contains('Software test automation exercises')
	})

	it('should scroll up and down the page', () => {
		Base.LoadHome()
		cy.wait(2000)
		cy.get('a').contains('Read more »').scrollIntoView()
		cy.wait(2000)
		cy.get('nav').scrollIntoView()
	})

	it('should signup a new user', () => {
		Base.LoadHome()
		homePage.addUser()
		homePage.loginuser()
	})
})
