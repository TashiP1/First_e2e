describe('Test the Practise page', () => {

  beforeEach(()=> {
    cy.visit('/home/practice');
  })

	it('should check the correct practise', () => {
		cy.get('a').contains('Practice').click();
		cy.get('h2').contains('Software test automation exercises');
	})

	it('check the number of button', () => {
		cy.get('button').its('length').should('eq', 6);
	})

	it('check the card', () => {
		cy.get('.card')
			.contains('.card-header', 'Textarea practice')
			.parent('.card')
			.within(() => {
				cy.get('button').click().should('include.text', 'Solution')
			});

		cy.get('pre').contains(
			'.language-css',
			' import org.testng.annotations.Test'
		);
	})
})
