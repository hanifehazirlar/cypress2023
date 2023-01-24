/// <reference types="cypress" />

describe('Custom Command2',()=>{

    it.only('Amazon Search',()=>{
        cy.amazonSearch('Nutella')
        cy.get('.a-section > .a-color-state').should('contain.text','Nutella')
        cy.get('#twotabsearchtextbox').should('have.value','Nutella')//search box daki locate in attribute value(value="Nutella") su Nutella mi?
        //Yukarıdakı ıkı satırda result olarak cıkan Nutella dogrulaması yapıldı
         //Textbox'a girilen iphone gercekten girilmismi baktık (value'sunu alarak)


        //cy.screenshot()  /cy.screenshot()=>Bu komut ıle butun sayfanın scrool yaparak tum heryerin screenshot'ini alir ve
        // kendiliginden olusturdugu sreenshots klosorune koyar
         cy.get('.s-no-outline > .a-size-medium-plus').screenshot()//cy.get('#twotabsearchtextbox').screenshot()=>Bununlada bızım verdigimiz locate'in screenshot'ini alir

    })
    it('',()=>{

    })
})