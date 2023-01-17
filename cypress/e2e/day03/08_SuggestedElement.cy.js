/// <reference types="cypress" />

describe('Suggested Elements',()=>{

    it('Test Case 1',()=>{
        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('Yahoo')

         //1.yol
        //cy.get(':nth-child(2) > .eIPGRd > .pcTkSc > .wM6W7d > span').contains('mail').click()

        //2.yol
        cy.get('li span b').contains('mail').click()


    })
    it.skip('Test Case 2',()=>{
        cy.visit('https://automationexercise.com/')

    })
})