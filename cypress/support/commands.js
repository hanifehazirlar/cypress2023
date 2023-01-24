// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//https://hubcomfy.com/ sitesine login icin
Cypress.Commands.add('hubcomfy_login',(email,password) =>{
    cy.visit('https://hubcomfy.com/')
    cy.get('.login > span').click()
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.get('#signin > .woocommerce-form > .woocommerce-button').click()
})

//amazon search: girilen urun icin arama
Cypress.Commands.add('amazonSearch', (productName) =>{
 cy.visit('https://www.amazon.com/')
 cy.get('#twotabsearchtextbox').type(productName)
 cy.get('#nav-search-submit-button').click()
})