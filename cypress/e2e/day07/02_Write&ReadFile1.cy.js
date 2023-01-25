/// <reference types="cypress" />

describe('Write&Read File',()=>{

    it('Write File',()=>{
        cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','CYPRESS NOTES\n')
        cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','1)Cypress install\n',{flag:'a+'})
        cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','2)Plugins',{flag:'a+'})
       
        //{flag:'a+'} bunu yazmadan ılk yazilanin silip bunu uzerine yazar bu komut ile yazilani dosyayaya kaydeder
        //\n => bir alt satira iner


    })
    it('Read File',()=>{
        cy.readFile('./cypress/e2e/day07/03_NotDefteri.txt').should('contain','Plugins')

    })
})