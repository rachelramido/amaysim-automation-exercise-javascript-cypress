import BasePage from './basePage'

class DashboardPage extends BasePage {
  constructor() {
    super()
    this.mainElement = 'div[data-automation-id="services"]'
  }

  isDisplayed() {
    cy.get(this.mainElement).should('be.visible')
  }
}

export default new DashboardPage()
