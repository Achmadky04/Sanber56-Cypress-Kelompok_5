describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')

  })


  it('passes', () => {
    cy.Register('FirstName', 'LastName', 'Email', 'Password', 'ConfirmPassword')
  })
})