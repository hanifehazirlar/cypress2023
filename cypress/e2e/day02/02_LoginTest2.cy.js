/// <reference types="cypress" />

describe('Koala Resort Hotel',()=>{

    it('Log in Testi',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/');
        //1)contains('Text')
        //cy.contains('Log in').click();

        //2)contains('Locator','Text')
        //cy.contains('[class="nav-link"]','Log in').click();
       // cy.contains('li','Log in').click();

       //3)contains('text')
       cy.contains('log in',{matchCase:false}).click();
       //burada text girisi yaparken yazimina dikkat etmeliyiz L'i l olarak yazarsak hata verir
       //matchCase buyuk kucuk harf dikkate almadan, metin olarak log in iceren web elementini ara

       //ASSERT 

       //1) have.text
       cy.get('#navLogon > .nav-link').should('have.text','Log in')
       //locate edilen yerdeki metinde 'Log in' yaziyor mu?Var mi?

       //2) cy.url()
       cy.url().should('include','Account/Logon')

       //3) be.visibility
       cy.get('.row > .mb-4').should('be.visible')

       // 4) cy.title()
       cy.title().should('eq','KoalaResortHotels - Log in')
    
       //5) include.text
       cy.get('#navLogon > .nav-link').should('include.text','Log in')
       //locate edilen yerdeki metin 'Log in' iceriyor mu?
       
       //Toplam link sayisi
       cy.get('li a').should('have.length',29)

       //cy.get().find() belirli bir html seciminin alt elemanlarini bulmak icin(parentlarin childlarini bulmak icin)
       cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')
       
       //within() 
       cy.get('div.categories').within( () => {
          cy.get('a[href="/Rooms/320"]').click()
       })
       //Parent: div.categories
       //Child: a[href="/Rooms/320"]
       /*
       Not: Web elementleri ilk olarak get() ile bulacagiz.
       Eger get() ile bulamazsak get().find() ile deneyecegiz.
       onunla da bulamazsak get().within() ile deneyecegiz
       */

    })
})