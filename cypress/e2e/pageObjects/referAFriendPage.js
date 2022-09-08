import BasePage from './basePage'

class ReferAFriendPage extends BasePage {
  constructor() {
    super()
    this.menu = '#menu_list'
    this.pageTitle = 'div.ama-page-header'
    
    this.form = 'div#Widget-Screen > div > form'
    this.copyButton = 'div#s'
    this.emailsField = 'input#a'
    this.messageField = 'textarea#b'
    this.reminderCheckbox = 'input#t'
    this.shareButton = 'button#c'

    this.successMessage = 'div#H'
  }
  
  isDisplayed() {
    cy.get(this.menu)
      .should('be.visible')
    cy.get(this.pageTitle)
      .should('contain', 'refer a friend')
      .and('be.visible')
  }
  
  getIframe() {
  return cy
    .get('iframe#fb-90f4e5ac-9561-42f9-9c24-84a9a106fb14')
    .should('be.visible')
    .iframe()
    .then(iframes => {
      cy.wrap(iframes[0])
    })
  }

  referAFriend(emailAddresses) {
    this.getIframe()
      .find(this.emailsField)
      .should('be.visible')
      .type(emailAddresses)
      .should('have.value', emailAddresses)
    this.getIframe()
      .find(this.messageField)
      .type('Big love from amaysim! This is a test.')
    this.getIframe()
      .find(this.reminderCheckbox)
      .check()
    this.getIframe()
      .find(this.shareButton)
      .should('be.visible')
      .click()
    this.getIframe()
      .find(this.successMessage)
      .should('be.visible')
      .should('contain', 'Thanks for sharing the big love')    
  }
}

export default new ReferAFriendPage()
