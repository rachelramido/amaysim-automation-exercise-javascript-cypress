import BasePage from './basePage'
import usageHistoryPage from './usageHistoryPage'

class MobilePlanDetailsPage extends BasePage {
  constructor() {
    super()
    this.menu = '#menu_list'
    this.pageTitle = 'div.ama-page-header'
  }

  isDisplayed() {
    cy.get(this.menu)
      .should('be.visible')
    cy.get(this.pageTitle)
      .should('contain', 'plan')
      .and('be.visible')
  }

  goToUsageHistory() {
    cy.get(this.menu)
      .contains('Usage history')
      .should('be.visible')
      cy.get(this.menu)
      .contains('Usage history')
      .click()
    usageHistoryPage.isDisplayed()
    return usageHistoryPage
  }
}

export default new MobilePlanDetailsPage()
