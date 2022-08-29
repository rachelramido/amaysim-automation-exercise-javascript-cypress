import BasePage from './basePage'

class UsageHistoryPage extends BasePage {
  constructor() {
    super()
    this.menu = '#menu_list'
    this.pageTitle = 'div.ama-page-header'
    this.searchForm = 'form#search_condition_form'
    this.timePeriodSelector = 'select#my_amaysim2_usage_filter_search_type'
    this.searchButton = 'input[type="submit"]'
    this.searchResultsArea = 'div.page-container'
  }

  isDisplayed() {
    cy.get(this.menu)
      .should('be.visible')
    cy.get(this.pageTitle)
      .should('contain', 'usage history')
      .and('be.visible')
  }

  searchYesterdaysUsage() {
    cy.get(this.searchForm)
      .should('be.visible')
      .get(this.timePeriodSelector)
      .should('be.visible')
      .select('Yesterday')
    cy.get(this.searchForm)
      .get(this.searchButton)
      .should('be.visible')
      .click()
    cy.get(this.searchResultsArea)
      .should('be.visible')
      .should('contain', 'There are no results found')
  }
}

export default new UsageHistoryPage()
