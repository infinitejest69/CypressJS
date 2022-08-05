Cypress.SelectorPlayground.defaults({
  selectorPriority: ['id', 'class', 'attributes'],
});

describe('Add Product To cart', () => {
  it('Open Page', () => {
    cy.visit('https://www.demoblaze.com/');
  });
  it('Open Product', () => {
    cy.contains('Laptops').click();
    cy.contains('Sony vaio i5').click();
    cy.url().should('include', 'prod.html?idp_=8');
  });
  it('Add product to cart', () => {
    cy.contains('Add to cart').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Product added`);
    });
  });
  it('Open Cart and validate contents', () => {
    //Cant Validate basket as Demo blaze share some basket with all cypress users?
  });
});
