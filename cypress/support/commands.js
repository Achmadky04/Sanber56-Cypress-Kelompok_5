// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//Created by Achmad Rizky Mauludi
Cypress.Commands.add('Register', (FirstName, LastName, Email, Password, ConfirmPassword) => {
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type(FirstName)
    cy.get('#lastname').type(LastName)
    cy.get('#email_address').type(Email)
    cy.get('#password').type(Password)
    cy.get('#password-confirmation').type(ConfirmPassword)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
})

Cypress.Commands.add('PasswordWeak', (FirstName, LastName, Email, Password, ConfirmPassword) => {
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type(FirstName)
    cy.get('#lastname').type(LastName)
    cy.get('#email_address').type(Email)
    cy.get('#password').type(Password)
    cy.get('#password-confirmation').type(ConfirmPassword)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error').should('contain.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
})

// End of Created by Achmad Rizky Mauludi
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })