/// <reference types="cypress" />

describe('Multiple Windows',()=>{

    it('Removing Attribute',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');

        cy.get('.example > a').invoke('removeAttr','target').click()
        // cy.get('.example > a') bu locate tıklayınca yeni windowda acılıyor ama cypress ekstra acılan windowlari isleme alamıyor bu yuzden;
        // tıklama yapacagımız locatte yeni window acan  attributu yani targeti siliyoruz bu sayece clıck yapınca dırek aynı acılıyor
       //ve bu sayede uzerınde ıslem yapıp dogrulama yapabılıyoruz

       cy.get('h3').should('have.text','New Window')

    })
    it.only('New Url',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example > a').then((element) =>{
            const newURL=element.prop('href')// prop() ile locate'in 'href' attributunun valuesunu alip newURL e atadi
            cy.visit(newURL) //boylelikle yeni window acilmadan ayni windowda iframe acilmis oldu

        })

    })
})