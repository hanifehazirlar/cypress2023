/// <reference types="cypress" />

describe('ViewPorts',()=>{

    it('',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport('iphone-8')

    })
    it('MacBook-16',()=>{
        cy.visit('/')//baseUrl e google i tanimlamistik oradan aldi adresi
        cy.viewport('macbook-16')
    })
    it.only('Custom Screen',()=>{
        cy.visit('/').viewport(500,800)
       //viewport icine olculeri yazip o olcude ekrani gorebiliriz
    })
})