/// <reference types="cypress" />

describe('Allerts',()=>{

    it.skip('Allert Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.wait(3000)
        cy.get(':nth-child(1) > button').click()
        //tek secenek ok butonu vardi
        //cypress Allerts geldiginde otomatik olarak tamam butonuna basar ve alerti kapatir asagida kapattigina dair mesaj(You successfully clicked an alert) verir
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    it.skip('Accept Alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.wait(3000)
        cy.get(':nth-child(2) > button').click()
        //2 secenek var cancel ve ok 
        //Cypress otomatik tamam i tikladi
        cy.get('#result').should('have.text','You clicked: Ok')


    })
    it('Dismiss Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.wait(3000)
        cy.get(':nth-child(2) > button').click()
        //cypress otomatik ok buttona tikladi
        cy.on('window:confirm',()=>{
            return false 
        })
        //on() JQuery bir fonfsiyondur
        //on() methodu browserlarda acilan windowlarla ilgili islem yapmak icin kullanilir icine yeni bir fonksiyon tanimladik
        //return false ile otomatik yaptigi ok tiklamayi yapma digerini yap dedik ve cancel e tikladi(default olarak return true tanimliydi)
        cy.get('#result').should('have.text','You clicked: Cancel')
        
    })
    it.only('Allert Text',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.wait(3000)
        cy.window().then(($windowsElement) =>{//($windowsElement) prompt'a bilgi girer
            cy.stub($windowsElement,'prompt').returns('Cypress bekledigim gibi cikmadi')//retrns() alert icine istedigimiz mesaji yazdiriyoruz
            cy.wait(3000)
            cy.get(':nth-child(3) > button').click()
        })
        //window(): acilan pop-up  windowlari kontrol etmemiz icin kullanilir
        cy.get('#result').should('have.text','You entered: Cypress bekledigim gibi cikmadi')

        
       

    })
})