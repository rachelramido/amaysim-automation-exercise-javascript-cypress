import BasePage from './basePage'

class UsageHistoryPage extends BasePage {
  constructor() {
    super()
    this.menu = '#menu_list'
  }

  isDisplayed() {
    cy.get(this.menu).should('be.visible')
  }
}

export default new UsageHistoryPage()
