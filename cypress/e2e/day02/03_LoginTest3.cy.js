/// <reference types="cypress" />

describe('Login Menu Test',()=>{

    it('Test Case 1',()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() 
        cy.contains('.login-form > h2','Login to your account').should('be.visible')
        cy.contains('.signup-form > h2','New User Signup!').should('be.visible')
       

    })
       it('Test Case 2',()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click() 
         //1.yol
        cy.get('.login-form > form > .btn').should('contain','Login')
         
        //2.yol
        cy.get('.login-form > form > .btn').then(loginbuttun =>{
            expect(loginbuttun.text()).to.equal('Login')
        })
        //3.yol
        cy.get('.login-form > form > .btn').invoke('text').then( loginbutton2 =>{
            expect(loginbutton2).to.eq('Login')
        })

    })
})