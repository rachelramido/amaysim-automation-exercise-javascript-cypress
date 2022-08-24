import BasePage from './basePage'
import mobilePlanDetailsPage from './mobilePlanDetailsPage'

class DashboardPage extends BasePage {
  constructor() {
    super()
    this.mainElement = 'section[data-automation-id="mobile"]'
  }

  isDisplayed() {
    cy.get(this.mainElement).should('be.visible')
  }

  viewServiceDetails() {
    cy.get(this.mainElement)
      .contains('Manage plan')
      .should('be.visible')
    cy.get(this.mainElement)
      .contains('Manage plan')
      .eq(0)
      .click({force: true})
    mobilePlanDetailsPage.isDisplayed()
    return mobilePlanDetailsPage
  }
}

export default new DashboardPage()
