/// <reference types="cypress" />

describe('Add all items on the home page and complete checkout', () => {
  it('should add all items and complete the checkout process', () => {
    cy.visit("https://jupiter.cloud.planittesting.com/#/shop");

    let numberOfItemsToAdd = 9;

// Loop to add multiple items to the cart
for (let i = 1; i < numberOfItemsToAdd; i++) {
  
  // Use { force: true } for each click to bypass visibility checks
  cy.get(".btn").eq(i).click({ force: true }); // Click on the button to add an item (assuming ".btn" is the correct selector for the buttons)
  cy.wait(4000); // Wait for 2 seconds after each item is added (you may adjust the waiting time)
}

cy.get('#nav-cart > a').click();



cy.get('.btn-checkout').click()



  });
});


describe('Find the product with the highest amount and add it', () => {
  it('should find and add the product with the highest amount', () => {
    cy.visit("https://jupiter.cloud.planittesting.com/#/shop");

    cy.get('#product-7 > div > p > .btn').click({ force: true });
    cy.get('#product-5 > div > p > .btn').click({ force: true });

    cy.wait(4000);
  });
});


describe('Add items in the second row', () => {
  it('should add specific items in the second row', () => {
    cy.visit("https://jupiter.cloud.planittesting.com/#/shop");

    cy.get('#product-2 > div > p > .btn').click({ force: true });
    cy.get('#product-5 > div > p > .btn').click({ force: true });
    cy.get('#product-8 > div > p > .btn').click({ force: true });

    cy.wait(3000);
  });
});


describe('Checkout, remove specific items, and proceed', () => {
  it('should remove specified items during checkout and proceed with the remaining ones', () => {
    cy.visit("https://jupiter.cloud.planittesting.com/#/shop");

    cy.get('#product-1 > div > p > .btn').click({ force: true });
    cy.get('#product-2 > div > p > .btn').click({ force: true });
    cy.get('#product-3 > div > p > .btn').click({ force: true });
    cy.get('#product-4 > div > p > .btn').click({ force: true });

    cy.get('#nav-cart > a').click();

    cy.get(':nth-child(1) > :nth-child(5) > ng-confirm > .remove-item').click();
    cy.get('.modal-footer > .btn-success').click();
    cy.get(':nth-child(3) > :nth-child(5) > ng-confirm > .remove-item').click({force: true});
    cy.get('.modal-footer > .btn-success').click();

    cy.get('.btn-checkout').click()

    cy.wait(3000);
  });
});


