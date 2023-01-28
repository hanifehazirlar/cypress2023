/// <reference types="cypress" />

describe('POST',()=>{
    const requestURL='https://jsonplaceholder.cypress.io/comments'
    it('Test',()=>{
        //POST yaparken gondermek istedigimiz bilgileri body olusturarak gonderiyoruz.GET yaparken body olusturmuyoruz
        cy.request('POST',requestURL,{
            userId:501,
            title:'Cypress cok kolay',
            body:'JavaScript daha da kolay'
        }).then((response=>{
            expect(response.status).to.eq(201)
            expect(response.body.userId).to.eq(501)
            expect(response.body.title).to.eq('Cypress cok kolay')
            assert.equal(response.body.body,'JavaScript daha da kolay')
        }))

    })
    
})