/// <reference types="cypress" />

describe('Working with inputs', () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include','login.html')
    });

    // get pake ID = # , Class = . 
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    // get pake name
    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    });

    //  user_remember_me
    it('Check Keep Signing', () => {
        cy.get('#user_remember_me').check()
    });
})