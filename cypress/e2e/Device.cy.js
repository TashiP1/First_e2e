describe('device tests', () => {
  it('720p', () => {
    cy.viewport(1280, 720)
    cy.visit('https://itera-qa.azurewebsites.net')
    cy.wait(3000)
  })

  it('1080p', () => {
    cy.viewport(1980, 1080)
    cy.visit('https://itera-qa.azurewebsites.net')
    cy.wait(3000)
  })

  it('iphone X', () => {
    cy.viewport('iphone-x')
    cy.visit('https://itera-qa.azurewebsites.net')
    cy.wait(3000)
  })

  it('ipad Mini', () => {
    cy.viewport('ipad-mini')
    cy.visit('https://itera-qa.azurewebsites.net')
    cy.wait(3000)
  })

  it('Macbook 15', () => {
    cy.viewport('macbook-15')
    cy.visit('https://itera-qa.azurewebsites.net')
    cy.wait(3000)
  })
})