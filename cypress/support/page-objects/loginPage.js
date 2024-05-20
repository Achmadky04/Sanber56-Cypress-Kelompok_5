class loginPage {

visit() {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
}

fillEmail(email) {
  cy.get('#email').clear().type(email)
}

fillPassword(password) {
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').clear().type(password)
}

clickSigninButton() {
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
}

getWelcomeMsg(){
    return cy.get(':nth-child(2) > .greet > .logged-in')
}

getErrorMsg(){
    return cy.get('.message-error > div')
}

getEmptyEmailMsg(){
    return cy.get('#email-error')
}

getEmptyPasswordMsg(){
    return cy.get('#pass-error')
}
}
export default new loginPage()