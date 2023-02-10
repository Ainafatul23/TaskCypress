/// <reference types="cypress" />

describe('My First Test', () => {
    it('Visits the Kitchen Sink',() => {
        cy.visit('https://example.cypress.io')
        // cy.get('h1').contains('Kitchen Sink')
        // cy.pause()

        cy.contains('type').click()

        //should be on a new URL which includes 'commands/actions'
        cy.url().should('include', '/commands/actions')
        
        cy.get('.action-email')
            .type('ainafatul@email.com')
            .should('have.value','ainafatul@email.com')
    })
})