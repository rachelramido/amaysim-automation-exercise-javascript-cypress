describe('Mobile Service', () => {
  let testData
  
  before(() => {
    cy.fixture('testData').then((data) => {
      testData = data
    })
  })

  it('passes', () => {
    cy.visit(testData.url)
  })
})
