import dashboardPage from './pageObjects/dashboardPage'
import homePage from './pageObjects/homePage'
import loginPage from './pageObjects/loginPage'
import mobilePlanDetailsPage from './pageObjects/mobilePlanDetailsPage'
import referAFriendPage from './pageObjects/referAFriendPage'

describe('Refer a friend', () => {
  let testData

  before(() => {
    // Read Test Data
    cy.fixture('testData').then((data) => {
      testData = data
    })
    
    homePage.visit() // Visit Home Page
  })

  it('Can enter email address for referral', () => {
    homePage.goToLoginPage()
    loginPage.login(testData.user)
    dashboardPage.viewServiceDetails()
    mobilePlanDetailsPage.goToReferAFriend()
    referAFriendPage.referAFriend('test1@amaysim.com.au,test2@amaysim.com.au,test3@amaysim.com.au')
  })
})
