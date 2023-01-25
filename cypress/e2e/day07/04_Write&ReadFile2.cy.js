/// <reference types="cypress" />

describe('Write&Read File 2',()=>{

    it('Write&Read JSON File',()=>{
        cy.writeFile('./cypress/e2e/day07/05_UserData.json',{name: 'Eliza', email: 'eliza@example.com' })
        
       
        cy.readFile('./cypress/e2e/day07/05_UserData.json').then((user)=>{
              expect(user.name).to.equal('Eliza')
              expect(user.email).to.equal('eliza@example.com')
        })

    })

})