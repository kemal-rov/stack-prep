describe('Shopping Cart', () => {
    it('should add an item to the cart', () => {
        cy.visit('/shopping');
  
        cy.get('.item').first().click();
        cy.get('.add-to-cart').click();
  
        cy.get('.cart').should('contain', '1 item');
    });
});
  