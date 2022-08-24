import BasePage from './basePage'

class HomePage extends BasePage {
  constructor() {
    super()
    this.url = '/'
    this.mainElement = '#select-plan'
    this.nextButton = 'input#step-plan'
    this.portingSection = 'div.order_transaction_porting'
    this.newNumberElement = '#selected-number'
  }

  goToLoginPage() {
    cy.get(this.mainElement)
      .get(this.portingSection)
      .contains('new number')
      .click()
    cy.get(this.mainElement)
      .get(this.portingSection)
      .get(this.newNumberElement)
      .text()
      .then(mobileNum => {
        cy.task('log', mobileNum)
        expect(mobileNum).to.match(/\d{4}\s\d{3}\s\d{3}/)
      })
    cy.get(this.mainElement)
      .get(this.nextButton)
      .click()
  }
}

export default new HomePage()
