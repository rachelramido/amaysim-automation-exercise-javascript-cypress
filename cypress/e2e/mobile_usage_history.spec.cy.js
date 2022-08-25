import dashboardPage from './pageObjects/dashboardPage'
import homePage from './pageObjects/homePage'
import loginPage from './pageObjects/loginPage'
import mobilePlanDetailsPage from './pageObjects/mobilePlanDetailsPage'
import usageHistoryPage from './pageObjects/usageHistoryPage'

describe('Mobile Service', () => {
  let testData

  before(() => {
    // Read Test Data
    cy.fixture('testData').then((data) => {
      testData = data
    })
    
    homePage.visit() // Visit Home Page
  })

  it('Can search yesterdays usage history', () => {
    homePage.goToLoginPage() // Click on "Accounts" to go to Login Page
    loginPage.login(testData.user) // Enter mobile number and password to Login into the dashboard page
    dashboardPage.viewServiceDetails() // From the dashboard click on a mobile service to see details page
    mobilePlanDetailsPage.goToUsageHistory() // On the Mobile Plan details page click Usage History
    usageHistoryPage.searchYesterdaysUsage() // On the usage history page, search for yesterday's mobile usage
  })
})
