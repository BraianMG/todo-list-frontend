/// <reference types="cypress" />

describe('Login and create taks', () =>{

    // beforeEach(() => {
    //     cy.visit('/');
    // });

    it('Login without data', () => {
        cy.visit('/');
        
        cy.get('[data-cy="login-button"]').click();
        
        cy.get('[data-cy="alert"]')
            .invoke('text')
            .should('contain', 'All fields are required');
    });
    

    it('Login with wrong data', () => {
        cy.visit('/');
            
        cy.get('[data-cy="email-input"]').type('hlbv389s7acb87@hlbv389s7acb87.com');
        
        cy.get('[data-cy="password-input"]').type('hlbv389s7acb87');

        cy.get('[data-cy="login-button"]').click();

        cy.get('[data-cy="alert"]')
            .invoke('text')
            .should('contain', 'Invalid email or password');
    });

    it('Login with correct data', () => {
        cy.visit('/');
            
        cy.get('[data-cy="email-input"]').type('test@test.com');
        
        cy.get('[data-cy="password-input"]').type('123456789');
    });
    
    it('Create new task without description', () => {
        cy.get('[data-cy="login-button"]').click();
        
        cy.get('[data-cy="newTask-button"]').click();
        
        cy.get('[data-cy="addTask-button"]').click();
        
        cy.get('[data-cy="alert"]')
            .invoke('text')
            .should('contain', 'The Description is required');
    });
    
    it('Create new task with description', () => {
        
        cy.get('[data-cy="description-input"]').type('Testing with Cypress');

        cy.get('[data-cy="addTask-button"]').click();

        cy.get('[data-cy="alert"]')
            .invoke('text')
            .should('contain', 'Task added successfully');
    });
});