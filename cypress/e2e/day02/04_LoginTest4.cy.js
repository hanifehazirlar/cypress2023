/// <reference types="cypress" />

describe('Login Test',()=>{

    it('Positive test',()=>{
        const username="Manager"
        const password="Manager1!"
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click()
        cy.get('#UserName').type(username)
        cy.get('#Password').type(password)
        cy.get('#btnSubmit').click()
        cy.url().should('include','Admin/UserAdmin')
        cy.get('.username').should('contain','manager')

    })
    it.only('Negative Test',()=>{
        const username="Manager"
        const password="Manager"
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.contains('Log in').click()

        cy.get('#UserName').type(username)
        cy.get('#Password').type(password)
        cy.get('#btnSubmit').click()

        cy.get('.validation-summary-errors > span').should('include.text','Try again please')
        cy.get('.validation-summary-errors > ul > li').should('include.text','Username or password is incorrect, please correct them and try again')

    })
})