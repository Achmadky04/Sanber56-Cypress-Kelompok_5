class RegisterPage{
    ClickCreateAccount(){
        cy.get('.panel > .header > :nth-child(3) > a').click();
    }

    fillFirstName(FirstName){
        cy.get('#firstname').type(FirstName)
    }
    fillLastName(LastName){
        cy.get('#lastname').type(LastName)
    }
    fillEmail(Email){
        cy.get('#email_address').type(Email)
    }
    fillPassword(Password){
        cy.get('#password').type(Password)
    }
    fillConfirmPassword(ConfirmPassword){
        cy.get('#password-confirmation').type(ConfirmPassword)
    }
    clickButton(){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }

    errorMessageFirstName(){
        cy.get('#firstname-error').should('contain.text', 'This is a required field')
    }

    errorMessageLastName(){
        cy.get('#lastname-error').should('contain.text', 'This is a required field')
    }
    
    errorMessageConfirmPassword(){
        cy.get('#password-confirmation-error').should('contain.text', 'This is a required field')
    }
}
export default new RegisterPage()