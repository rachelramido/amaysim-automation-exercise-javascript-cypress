import BasePage from './basePage'
import mobilePlanDetailsPage from './mobilePlanDetailsPage'

class DashboardPage extends BasePage {
  constructor() {
    super()
    this.mainElement = 'section[data-automation-id="mobile"]'
    this.serviceTile = 'div[data-automation-id="mobile-tileheader"'
  }

  isDisplayed() {
    cy.get(this.mainElement).should('be.visible')
  }

  viewServiceDetails() {
    cy.get(this.serviceTile)
      .should('be.visible')
    cy.get(this.serviceTile)
      .click()
    mobilePlanDetailsPage.isDisplayed()
    return mobilePlanDetailsPage
  }
}

export default new DashboardPage()
