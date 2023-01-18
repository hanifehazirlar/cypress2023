/// <reference types="cypress" />

describe('Suggested Elements',()=>{

    it('Test Case',()=>{
        const text='Dress'
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type(text)
        cy.get(':nth-child(6) > .s-suggestion-container > .s-suggestion').click()
       cy.get('span[class="a-size-base-plus a-color-base a-text-normal"]').should('have.text',text)

        
        
    
       

    })
   
})