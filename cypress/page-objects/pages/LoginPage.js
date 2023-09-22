import BasePage from "../BasePage"

export default class LoginPage extends BasePage {
    static login(username, password) {
        cy.login(username, password)
    }
}