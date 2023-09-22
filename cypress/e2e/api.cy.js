describe('Network and API', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('should check the request', ()=>{
    cy.request('/home/tutorial').then((response)=>{
      cy.log(JSON.stringify(response.headers))
    })
  })

  it('should validate the header', ()=>{
    cy.request('/home/tutorial').as('tutorial')
    cy.get('@tutorial').its('headers').its('content-length').should('eq', '1764')
  })

  it('should check the status code', ()=>{
    cy.request('/home/tutorial').as('tutorial')
    cy.get('@tutorial').its('status').should('equal', 200)
  })

  it.skip('should pass error message', ()=>{
    cy.request({
      url: "/login",
      method: 'POST',
      failOnStatuscode: false,
      body: {email:'eve.holt@reqres.in'},
    }).as('loginRequest')

    cy.get('@loginRequest').its('status').should('equal', 400)
    cy.get('@loginRequest').then((res) => {
      expect(res.body.error).to.equal('Missing password')
    })
  })
})