/// <reference types="cypress" />

describe('Responsive Design', () => {
    const sizes: (Cypress.ViewportPreset | [number, number])[] = ['iphone-6', 'ipad-2', [1024, 768]];
  
    sizes.forEach(size => {
      it(`should display correctly on ${size}`, () => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size as Cypress.ViewportPreset);
        }
  
        cy.visit('/');
        cy.get('.responsive-element').should('be.visible');
      });
    });
  });
  