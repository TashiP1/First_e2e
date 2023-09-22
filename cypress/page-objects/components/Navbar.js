export default class Navbar {
    static clickOnLogin() {
        cy.get('a').contains('Login').click()
    }

    static searchButton() {
        cy.get('button[placeholder="Search"]').type(`${text} {enter}`)
    }
}