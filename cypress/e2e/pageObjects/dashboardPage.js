import BasePage from './basePage'

class DashboardPage extends BasePage {
  constructor() {
    super()
    this.mainElement = 'div[data-automation-id="services"]'
    this.serviceTitle = 'div[data-automation-id="mobile-tileheader"]'
  }

  isDisplayed() {
    cy.get(this.mainElement).should('be.visible')
  }

  viewServiceDetails() {
    cy.get(this.mainElement)
      .get(this.serviceTitle)
      .eq(1)
  }
}

export default new DashboardPage()
