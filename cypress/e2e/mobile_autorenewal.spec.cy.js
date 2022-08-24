import dashboardPage from './pageObjects/dashboardPage'
import homePage from './pageObjects/homePage'
import loginPage from './pageObjects/loginPage'

describe('Mobile Service', () => {
  let testData

  before(() => {
    // Read Test Data
    cy.fixture('testData').then((data) => {
      testData = data
    })

    // Visit Home Page
    homePage.visit()
  })

  it('Can successfully check autorenewal setting', () => {

    // Click on "Accounts" to go to Login Page
    homePage.goToLoginPage()

    // Enter mobile number and password to Login into the dashboard page
    loginPage.login(testData.user)

    // From the dashboard click on a mobile service to see its details page
    dashboardPage.viewServiceDetails()
  })
})
