/// <reference types="cypress" />

describe('Dropdown',()=>{

    it('TestCase',()=>{
        cy.visit('https://the-internet.herokuapp.com/dropdown')
        cy.get('#dropdown').select('Option 1').should('have.value','1')
        cy.get('#dropdown').select('Option 2').should('have.value','2')

        //cy.get('#dropdown').select(2) bu sekilde index ile de calisiyor
        //cy.get('#dropdown').select('value') bu sekilde value icerigini de yazarak yapabiliriz
        //cy.get('#dropdown').select('visibility text') gorunen isimlerden istedigimizi yazabilir

        


    })
   
})

