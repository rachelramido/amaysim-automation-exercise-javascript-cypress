class BasePage {
  visit() {
    cy.visit(this.url)
  }
}

export default BasePage
