/*
Write a Cypress test to check if 
a user can successfully visit 
the homepage of a website.
*/

/// <reference types="cypress" />

describe('Homepage', () => {
    it('should load successfully', () => {
        cy.visit('/');
        cy.url().should('include', 'homepage');
    });
});
  