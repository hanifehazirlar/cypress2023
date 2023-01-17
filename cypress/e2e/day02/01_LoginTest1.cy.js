/// <reference types="cypress" />

describe('',()=>{

    it('Log in Testi',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        //visit() seleniumdaki get methodu gibi.
        //1.yol
        //cy.get('#navLogon > .nav-link').click()
        //2.yol
        cy.contains('Log in').click()
        // contains(): DOM'da Log in textini bul.Metni text olarak arar
        cy.url().should('include','Account/Logon')
        //username: Manager 
        cy.get('#UserName').type('Manager')

        //password: Manager1!
        //1.yol
        //cy.get('#Password').type("Manager1!")
        // cy.get('#btnSubmit').click()

        //2.yol
        cy.get('#Password').type('Manager1!{enter}')


    })
   
})