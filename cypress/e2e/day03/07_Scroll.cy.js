/// <reference types="cypress" />

describe('Scroll ',()=>{

    it('scrollIntoView',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        //scrollIntoView() locate ettigimiz yerin hemen altina gelir

        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView({duration: 4000})
        //scrollIntoView({duration: 4000}): bununla 4 sn de ıstenılen yere kayar yavas yavaslocate edilen yere gel
    
       //scrollTo(x,y)
       cy.scrollTo(0,0) //en ust noktaya gider
       cy.scrollTo(0,500)
       cy.wait(3000)
       cy.scrollTo("500px")
       cy.wait(3000)
       cy.scrollTo(0,-500)

    })
    it.skip('',()=>{


    })
})