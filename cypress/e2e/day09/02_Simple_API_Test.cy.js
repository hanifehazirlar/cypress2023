/// <reference types="cypress" />

describe('Simple API Test',()=>{
    const requestURL='https://jsonplaceholder.cypress.io/comments'

    it('Header Assert 1',()=>{
        cy.request(requestURL).its('headers').its('content-type')
        .should('include','application/json; charset=utf-8')

    })
    it('Header Assert 1',()=>{
        cy.request({
            url:requestURL,
            // url:'https://jsonplaceholder.cypress.io/comments' bu sekilde de yazabilirdik
            method:'GET' }).its('headers').its('content-type')
            .should('include','application/json; charset=utf-8')
        

    })
    
})