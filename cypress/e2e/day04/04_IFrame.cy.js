/// <reference types="cypress" />

describe('Iframe Test',()=>{

    it.only('Iframe Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe');
        /*
        1)Plugin indir (adress https://www.npmjs.com/package/cypress-iframe)
         bu adresteki npm install -D cypress-iframe bu komutu terminale yazip enter yapiyoruz
        2) import plugin(support klasorundeki e2e.js file a asagidaki iki komuttan birini yapisiriyoruz)
        import 'cypress-iframe'; or require('cypress-iframe');
        3) Bu islemlerden sonra cy.frameLoaded() ve cy.iframe() komutlarini kullanabilecegiz
        */
        cy.frameLoaded('#mce_0_ifr')//iframe in yerini tanimliyoruz
        //driver.switcTo()frame("#mce_0_ifr") selenium da iframe bu sekilde oluyordu
        cy.iframe().find('p').clear()
        //cy.iframe()-> iframe git
        //iframe icindeki yazi p tagi icinde oldugu icin find() methodu ile buldurduk clear() ile de sildirdik
        cy.iframe().find('p').type('Cypress was here')//type ile icine yazi gonderdik
        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()

        //Selenium da iframe icine girince defaultcontent ile en uste yada parentcontent ıle bır uste cıkıs yapıyorduk
        //Cypress ise kendiliginden cıkıyor koda gerek yok
        

    })
    
})