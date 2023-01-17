/// <reference types="cypress" />

context('My Second Test',()=>{
    // describe methodu yerine context methodunu da kullanabiliriz
    beforeEach('Her Testten Once Calisacak',()=>{
        cy.visit('/')
    })
    it('URL Test',()=>{
        cy.url().should('include','google')
        cy.url().should('equal','https://www.google.com/')


    })


    it('Title Test',()=>{
        cy.title().should('include','Google')
        cy.title().should('eq','Google')


    })

    it('Search Test',()=>{
        cy.get('.gLFyf').type('Cypress.io{enter}')
        //cy.get("input[name='q']").type('Cypress.io{enter}')   //input[name='q'] bunu da kendimiz manuel olarak locate aldik
        // get(): locate aliyoruz
        // type(): metin gonderiyoruz
        // {enter} : ENTER tusuna bas


    })

    //skip testi yapmadan gecer
    it.skip('Search Test',()=>{
        cy.get('.gLFyf',{timeout: 3000}).type('Cypress.io{enter}')
  
    })
    it.only('Click Test',()=>{
        //it.only : sadece bu testi calistir 
        cy.get('.gb_e').click()
    })
})