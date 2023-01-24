/// <reference types="cypress" />

import { faker } from "@faker-js/faker"





describe('Faker',()=>{

    it.only('Faker Login Test',()=>{
        cy.visit('https://automationexercise.com/login')
        let fakerName=faker.name.fullName()
        let fakerEmail=faker.internet.email()
        cy.get('[type="text"]').type(fakerName)
        cy.get('.signup-form > form > [type="email"]').type(fakerEmail)
        cy.get('.signup-form > form > .btn').click()
        cy.wait(3000)
        cy.get('#id_gender2').click
        cy.get('#name').type(fakerName)
        cy.get('#password').type(fakerEmail)

        let fakerFirstname=faker.name.firstName('female')
        let fakerLastname=faker.name.lastName()
        let fakerAdress=faker.address.streetAddress()

        cy.get('#first_name').type(fakerFirstname)
        cy.get('#last_name').type(fakerLastname)
        cy.get('#address1').type(fakerAdress)
        cy.get('#country').select(2)
        let fakerState=faker.address.state()
        cy.get('#state').type(fakerState)
        let fakerCity=faker.address.city()
        cy.get('#city').type(fakerCity)
        let fakerZipcode=faker.address.zipCode('#####')//bu sekilde zipcode istedgimiz hane sayisinda olur
        cy.get('#zipcode').type(fakerZipcode)
        let fakerMobilNumber=faker.phone.number('###-###-##')//bu sekilde phone number istedigimiz formatta olur
        cy.get('#mobile_number').type(fakerMobilNumber)
        let fakerCountry=faker.address.country()
        cy.get('#country').type(fakerCountry)
        cy.get('.login-form > form > .btn').click()

        cy.get('.col-sm-9 > :nth-child(2)').should('include.text','Your new account has been successfully created!')

        cy.get('.pull-right > .btn').click()

        cy.get('b').should('contains.text',fakerName)
    


        







    })
    it('',()=>{

    })
})
