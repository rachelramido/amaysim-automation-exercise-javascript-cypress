import homePage from './pageObjects/homePage'

describe('Mobile Service', () => {
  let testData

  before(() => {
    // Read Test Data
    cy.fixture('testData').then((data) => {
      testData = data
    })
  })

  it('Can successfully check autorenewal setting', () => {
    expect(testData.user).to.have.property('mobileNumber')
    expect(testData.user.mobileNumber).to.match(/^\d{10}/)
    expect(testData.user).to.have.property('password')
    expect(testData.user.password.length).to.greaterThan(0)
    homePage.visit()
  })
})
