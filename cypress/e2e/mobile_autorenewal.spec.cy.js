describe('Mobile Service', () => {
  before(() => {
    cy.fixture('testData').then((data) => {
      this.data = data;
    });
  });

  it('passes', () => {
    cy.visit(this.data.url);
  });
});
