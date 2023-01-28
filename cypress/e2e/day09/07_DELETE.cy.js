//https://dummy.restapiexample.com/api/v1/delete/2
/// <reference types="cypress" />

describe('DELETE',()=>{
    const requestURL='https://dummy.restapiexample.com/api/v1/delete/2'

    it('Test01',()=>{
        cy.request({
            url:requestURL,
            method: 'DELETE'
        }).then((response)=>{
            expect(response.body.status).to.equal('success')
            expect(response.body.message).to.equal('Successfully! Record has been deleted')
        })

    })
   
})