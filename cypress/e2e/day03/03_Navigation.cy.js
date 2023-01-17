/// <reference types="cypress" />

describe('Navigation',()=>{

    it('Back, Forward, Reload',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(3000)
        cy.get('#navLogon > .nav-link').click()
        cy.wait(3000)
        //cy.go('back') //onceki sayfaya gider
         cy.go(-1) //onceki sayfaya gider

         cy.wait(3000)
         //cy.go('forward')
         cy.go(1) //sonraki sayfaya gider

         cy.wait(3000)
         cy.reload() //sayfayi refresh yapar

        

    })
    it.only('Chaing Navigation',()=>{//zincirleme navigatetion
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(3000)
        cy.get('#navLogon > .nav-link').click()
          cy.wait(3000)
            cy.go('back').go('forward').go(-1).wait(3000).go(1)

        cy.reload(true)
        // cy.reload(true):sayfayi hafizadan degil yeniden yukler

    })
})