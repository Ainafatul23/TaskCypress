/// <reference types="cypress" />

describe('Working with inputs', () => {

    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
    });

    it('Should Try Login and Checkout', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            // const firstname = user.firstname
            // const lastname = user.lastname
            // const zip = user.zip

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('#password').clear()
            cy.get('#password').type(password)

            cy.get('#login-button').click()

            
            // cy.get('#add-to-cart-sauce-labs-backpack').click()
            // cy.wait(1000)

            // cy.get('#shopping_cart_container').click()

            // cy.get("#checkout").click()

            // cy.get('#first-name').clear()
            // cy.get('#first-name').type(firstname)

            // cy.get('#last-name').clear()
            // cy.get('#last-name').type(lastname)

            // cy.get('#postal-code').clear()
            // cy.get('#postal-code').type(zip)

            // cy.get('#continue').click()

            // cy.get('#finish').click()

            // cy.get('#back-to-products').click()
            
        })
    });

    it('Should Try Checkout', () => {
       cy.fixture("checkout").then(checkout => {
        const firstname = checkout.firstname
        const lastname = checkout.lastname
        const zip = checkout.zip

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.wait(1000)

        cy.get('#shopping_cart_container').click()

        cy.get("#checkout").click()

        cy.get('#first-name').clear()
        cy.get('#first-name').type(firstname)

        cy.get('#last-name').clear()
        cy.get('#last-name').type(lastname)

        cy.get('#postal-code').clear()
        cy.get('#postal-code').type(zip)

        cy.get('#continue').click()

        cy.get('#finish').click()

        cy.get('#back-to-products').click()
    })
    });

    
})