/// <reference types="cypress" />

describe('Selectors Examples',()=>{

    it.skip('Css Selectors',()=>{
        cy.visit('https://www.amazon.com/')

        //1) By Tag Name
        cy.get('input')

        //2) By id
        cy.get('#twotabsearchtextbox')

        //3) By class
        cy.get('.nav-input.nav-progressive-attribute')

        //4)  By Attribute name and Value
        cy.get("input[type='text']")

        //5) By 2 Attribute name
        cy.get("[type='text'][id='twotabsearchtextbox']")

    })
    it('XPath',()=>{
        cy.visit('https://www.google.com')
        //6) By Xpath
        cy.xpath('//a[@class="gb_m"]').should('include.text','Gmail')
        // /// <reference types="cypress-xpath" /> xpath algilanmazsa ilk satira bunu yazariz

        // require('@cypress/xpath');
        //yukaridaki kodu support daki e2e.js dosyasina ekleriz
        //xpath cok saglikli calismadigi icin cok tercih edilmiyor
        


    })
})