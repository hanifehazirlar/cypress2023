/// <reference types="cypress" />

describe('Before After',()=>{
    before(() =>{
        cy.log('Her test dosyasindan once 1 kere calisacak')
    })
    after(() =>{
        cy.log('Her test dosyasindan sonra 1 defa calisacak')
    })
    beforeEach(() =>{
        cy.log('Her testten once 1 kere calisacak')
    })
    afterEach(() =>{
        cy.log('Her testten sonra 1 kere calisacak')
    })

    it('Test Case 1',()=>{
        cy.log('Test Case 1')



    })
    it('Test Case 2',()=>{
        cy.log('Test Case 2')

    })
})