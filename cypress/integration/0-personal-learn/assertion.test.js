/// <reference types="cypress" />

describe('My First Test', () => {
    it('Browser Actions',() => {
        cy.visit('https://example.com', {timeout : 10000})
    })
    it('Shouls check correct url',() => {
        cy.url().should('include','example.com')
    }
    )
    it('Shouls check for correct element on the page',() => {
        cy.get('h1').should('be.visible')
    }
    )
})