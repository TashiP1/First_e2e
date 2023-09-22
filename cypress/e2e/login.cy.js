import Navbar from "../page-objects/components/Navbar"
import LoginPage from "../page-objects/pages/LoginPage"

describe('Login Test', () => {
  beforeEach(()=>{
    cy.visit("/")
    Navbar.clickOnLogin()
  })

  it('should try wo log into the page', () =>{
    LoginPage.login("Tashi", "123")
  })

})