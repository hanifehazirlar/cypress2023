/// <reference types="cypress" />

import { faker } from "@faker-js/faker"



describe('Using Faker',()=>{
    /*
    Faker Kurulumu
    1) https://www.npmjs.com/package/@faker-js/faker bu adrese gidiyoruz 
    2) npm install --save-dev @faker-js/faker bu kodu terminale yapistir ve enter
    3) import { faker } from '@faker-js/faker'; bu komutu classin 2.satirina yapistirdik
    ve diger classlara yazmamiza gerek yok
    4) 3.adimi yapmayip support/e2e.js e require('@faker-js/faker') bu komutu da yapistirsak oluyor
    */

    it.only('Faker Login Negative Test',()=>{
        cy.visit('https://hubcomfy.com/')
        cy.get('.login > span').click()
        let username=faker.internet.email()
        let password=faker.internet.password()
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#signin > .woocommerce-form > .woocommerce-button').click()
        cy.get('#signin > .woocommerce-form > .submit-status').should('have.text','Wrong username or password.')
    })
    it('Faker Login Test',()=>{


    })

})