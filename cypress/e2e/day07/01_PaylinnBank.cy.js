/// <reference types="cypress" />
import HomePage from "../POM/HomePage.cy"
import LoginPage from "../POM/LoginPage.cy"

describe('Paylinn Bank',()=>{
    before(function(){
        cy.fixture('paylinn').then(function(data){
            this.data=data
        })
    })

    it.only('Paylinn Bank',function(){
        const homePage=new HomePage()
        const loginPage=new LoginPage()
        cy.visit(this.data.url)

        homePage.getSinginLink().click()
        loginPage.getUserNameBox().type(this.data.userName)
        loginPage.getPasswordBox().type(this.data.passWord)
        loginPage.getLoginButton().click()
        loginPage.getWelcomeText().should('contain.text','Welcome')
        loginPage.getHeader().should('contain.text','Welcome')
                             .and('contain.text','Logout')
                             .and('contain.text','React User')
        //ayni locate ait webelementleri and() ekleyerek toplu dogrulama yapabiliriz.
        //LoginPage de tanimladigimiz getHeader() methodunda oratk tek bir locate aldik ve bununla toplu dogrulama yaptik.                     
    })
})