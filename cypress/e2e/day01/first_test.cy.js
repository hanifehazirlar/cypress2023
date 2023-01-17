/// <reference types="cypress" />

describe('My First Test',()=>{
  //describe:tanimlamak demek.Testi tanimliyorum
  // describe ve it mocha dan geliyor

    it('URL Test',()=>{

    cy.visit('https://www.google.com/')
    // visit(URL): URL'e gitti
    cy.url().should('include','google')
    // should assert islemi icin kullanilir
    // onclude: icermek demek
    // should('include','google'): URL google icerir mi?

    })
    it('Title Test',()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        // title(): sayfanin title'ini alir

        cy.title().should('eq','Google')
    })
})