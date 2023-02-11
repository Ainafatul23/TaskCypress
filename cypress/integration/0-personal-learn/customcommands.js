/// <reference types="cypress" />

describe('Working with inputs', () => {

    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    });

    it('Should Try Login and Payment', () => {
        cy.fixture("userzero").then(userzero => {
            const username = userzero.username
            const password = userzero.password
            const payee = userzero.payee
            const account = userzero.account
            const amount = userzero.amount
            const date = userzero.date
            const description = userzero.description

            // login 
            cy.login(username,password)
            
            // pay_saved_payees payee,account,
            cy.get('#pay_bills_tab').click()
            cy.pay_saved_payees(payee,account,amount,date,description)
         
                  
        })
    });

})