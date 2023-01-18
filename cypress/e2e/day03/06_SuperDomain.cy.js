/// <reference types="cypress" />

describe('SuperDomain',()=>{

    it('Test Case 1',()=>{
        cy.visit('https://www.amazon.com/')
        cy.wait(3000)
        cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')
        //Ayni domain(site) icerisindeki 2.sayfaya gidebilirsiniz

    })
    it('Test Case 1.5',()=>{
      cy.visit('https://www.cypress.io/')  
      cy.wait(3000)

      cy.visit('https://docs.cypress.io/guides/overview/why-cypress')

    })
    it('Test Case 2',()=>{
        cy.visit('https://www.google.com/')
        cy.wait(3000)
        cy.visit('https://www.amazon.com/')
        //ayri sayfalar eski surumlerde gitmiyordu ama yeni surumde gidiyor.
        //Bu yuzden biz hata almadik cypress altyapisi buna uygun olmadigi icin incele yapilamiyor

    })
})