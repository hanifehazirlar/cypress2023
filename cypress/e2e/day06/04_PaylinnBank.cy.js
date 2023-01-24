/// <reference types="cypress" />

describe('Paylinn Bank',()=>{
    before(function(){
        cy.fixture('paylinn').then(function(data){
            this.data=data
        })
    })

    it.only('Paylinn Bank',function(){
        //cy.visit('https://paylinn.com/')
        cy.visit(this.data.url)
        cy.get('[href="/login"] > .header__option > .header__lineTwo').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.userName)

        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.passWord)
        cy.get('.MuiButton-label').click()
        cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('contain.text','Welcome')

    })
})