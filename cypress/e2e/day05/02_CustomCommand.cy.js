/// <reference types="cypress" />

describe('Custom Command 1',()=>{

    it('Positive Login',()=>{
        cy.visit('https://hubcomfy.com/')
        cy.get('.login > span').click()
        cy.get('#username').type('hanifehzrlar@gmail.com')
        cy.get('#password').type('abcd1234')
        cy.get('#signin > .woocommerce-form > .woocommerce-button').click()
        cy.get('.login').should('contain.text','Sign Out')
    })
    it('Positive Test Command',()=>{
     cy.hubcomfy_login('hanifehzrlar@gmail.com','abcd1234')
     //command.js dosyasinda olusturdugumuz fonksiyonu kullanarak giris yaptik parametre olarak email-pass yazdik

     cy.wait(3000)
     cy.get('#menu-item-1079 > a').scrollIntoView().click()
     cy.get('.greeting > :nth-child(1)').should('have.text','hanifehzrlar')


    })
    it.only('Negative Login',()=>{
        cy.hubcomfy_login('hanifehzrlar@gmail.com','abcd123')
        cy.get('#signin > .woocommerce-form > .submit-status').should('have.text','Wrong username or password.')
        cy.get('#signin > .woocommerce-form > .submit-status').should('be.visible')
        cy.url().should('include','hubcomfy')




    })
})