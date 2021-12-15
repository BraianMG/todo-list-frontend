/// <reference types="cypress" />

describe('Login page load', () =>{
    it('Login page load', () => {
        cy.visit('/');

        cy.get('[data-cy="logo"]')
            .invoke('attr', 'src')
            .should('not.have.length', 0);

        cy.get('[data-cy="login-title"]')
            .invoke('text')
            .should('equal', 'Login');
            
        cy.get('[data-cy="email-input"]')
            .invoke('attr', 'placeholder')
            .should('equal', 'Your email');

        cy.get('[data-cy="password-input"]')
            .invoke('attr', 'placeholder')
            .should('equal', 'Your password');

        cy.get('[data-cy="login-button"]')
            .should('have.value', 'Login');

        cy.get('[data-cy="signup-button"]')
            .invoke('text')
            .should('equal', 'Signup');
    });
});