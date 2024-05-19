//Created by Achmad Rizky Mauludi
import RegisterPage from '../support/page-objects/RegisterPage.cy'


describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/')

  })


  it('Normal Case - Success Register', () => {
    //using custom Command
    //Please change the value of email to success the register
    cy.Register('John', 'Doe', 'jhondoeese2@gmail.com', 'qwerty123!@#', 'qwerty123!@#')
    cy.url().should('include', 'customer/account/')
  })

  it('Negative Case - Failed Register (email already used)', () => {
    //using fixture
    cy.fixture('users.json').then((users) => {
      const dataregister = users[0];
      cy.Register(dataregister.FirstName, dataregister.LastName, dataregister.Email, dataregister.Password, dataregister.ConfirmPassword)
      cy.get('.message-error > div').should('contain.text', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')

    })
  })

  it('Negative Case - Failed Register (FirstName not filled)', () => {
    //using page object model
    RegisterPage.ClickCreateAccount()
    
    RegisterPage.fillLastName('Doe')
    RegisterPage.fillEmail('johnDoeTest@gmail.com')
    RegisterPage.fillPassword('qwerty123!@#')
    RegisterPage.fillConfirmPassword('qwerty123!@#')
    RegisterPage.clickButton()
    RegisterPage.errorMessageFirstName()
  })

  it('Negative Case - Failed Register (LastName not filled)', () => {
    
    //using page object model
    RegisterPage.ClickCreateAccount()
    
    RegisterPage.fillFirstName('John')
    RegisterPage.fillEmail('johnDoeTest@gmail.com')
    RegisterPage.fillPassword('qwerty123!@#')
    RegisterPage.fillConfirmPassword('qwerty123!@#')
    RegisterPage.clickButton()
    RegisterPage.errorMessageLastName()
  })

  it('Negative Case - Failed Register (Email not filled)', () => {

    //using fixture
    cy.fixture('users.json').then((users) => {
      const dataregister = users[1];
      cy.Register(dataregister.FirstName, dataregister.LastName, dataregister.Email, dataregister.Password, dataregister.ConfirmPassword)
      cy.get('#email_address-error').should('contain.text', 'This is a required field')

    })
  })

  it('Negative Case - Failed Register (Email not contain domain name)', () => {
    //basic syntax
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type("John")
    cy.get('#lastname').type("Doe")
    cy.get('#email_address').type("johnDoe")
    cy.get('#password').type("qwerty123!@#")
    cy.get('#password-confirmation').type("qwerty123!@#")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#email_address-error').should('contain.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  it('Negative Case - Failed Register (Password not filled)', () => {
    //basic syntax
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type("John")
    cy.get('#lastname').type("Doe")
    cy.get('#email_address').type("johnDoeer@gmail.com")
    
    cy.get('#password-confirmation').type("qwerty123!@#")
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-error').should('contain.text', 'This is a required field')
  })

  it('Negative Case - Failed Register (Confirm Password not filled)', () => {

    //using page object model
    
    RegisterPage.ClickCreateAccount()
    
    RegisterPage.fillFirstName('John')
    RegisterPage.fillLastName('Doe')
    RegisterPage.fillEmail('johnDoeTest@gmail.com')
    RegisterPage.fillPassword('qwerty123!@#')
    RegisterPage.clickButton()
    RegisterPage.errorMessageConfirmPassword()
  })

  it('Negative Case - Failed Register (Password Strength : Weak)', () => {
    //using custom Command
    cy.Register('John', 'Doe', 'jhondoeee2@gmail.com', 'qwer', 'qwer')
    
  })

  it.only('Negative Case - Failed Register ()', () => {
    //using Page Object Model
    RegisterPage.ClickCreateAccount()
    RegisterPage.clickButton()
    RegisterPage.errorMessageFirstName()
    RegisterPage.errorMessageLastName()
    RegisterPage.errorMessageEmail()
    RegisterPage.errorMessagePassword()
    RegisterPage.errorMessageConfirmPassword()
    
  })
})

// End of Created by Achmad Rizky Mauludi