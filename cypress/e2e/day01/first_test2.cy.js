/// <reference types="cypress" />

describe('My First Test',function() {
  
      it('URL Test',function(){
  
      cy.visit('https://www.google.com/')
      cy.url().should('include','google')
      
      })
      it('Title Test',function(){
          cy.visit('https://www.google.com/')
          cy.title().should('include','Google')
          cy.title().should('eq','Google')
      })
  })