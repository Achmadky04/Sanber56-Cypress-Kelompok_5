
import loginPage from '../support/page-objects/loginPage'
import loginData from '../fixtures/loginData.json'

describe('Login Account', () => {

  beforeEach(() => {
    loginPage.visit()
    }) 


  it('Success Login', function() {
    const { email, password } = loginData.validCredentials;
   
    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
    loginPage.clickSigninButton()

    // assertion
    loginPage.getWelcomeMsg().should('contain.text','Welcome')
  })

  it('Failed Login - Wrong Email', function() {
    const { email, password } = loginData.invalidEmail;

    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
    loginPage.clickSigninButton()

    // assertion
    loginPage.getErrorMsg().should('contain.text','was incorrect')
})

  it('Failed Login - Wrong Password', function() {
    const { email, password } = loginData.invalidPassword;
   
    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
    loginPage.clickSigninButton()

    // assertion
    loginPage.getErrorMsg().should('contain.text','was incorrect')
  })

  it('Failed Login - Empty Email', function() {
    const { email, password } = loginData.invalidPassword;

    loginPage.fillPassword(password)
    loginPage.clickSigninButton()

    // assertion
    loginPage.getEmptyEmailMsg().should('be.visible')
  })

  it('Failed Login - Empty Password', function() {
    const { email, password } = loginData.validCredentials;

    loginPage.fillEmail(email)
    loginPage.clickSigninButton()

    //assertion
    loginPage.getEmptyPasswordMsg().should('be.visible')
  })

  it('Failed Login - Wrong Email and Password', function(){
    const {email, password} = loginData.invalidCredentials;

    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
    loginPage.clickSigninButton()

    // assertion
    loginPage.getErrorMsg().should('contain.text','was incorrect')
  })

})
