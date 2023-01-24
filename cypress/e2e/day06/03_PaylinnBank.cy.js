/// <reference types="cypress" />

describe('Paylinn Bank',()=>{

    it('Paylinn Bank',()=>{
        cy.visit('https://paylinn.com/')
        cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User')
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user')
        cy.get('.MuiButton-label').click()
        cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text','Welcome')

    })
   
})