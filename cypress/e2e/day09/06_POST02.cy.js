/// <reference types="cypress" />

describe('POST',()=>{
    const requestURL='https://dummy.restapiexample.com/api/v1/create'
    


    
    it('Test01',()=>{
        const bodyRequest={"name":"deneme1","salary":"600","age":"23"}
       cy.request({
        url:requestURL,
        method :'POST',
        body : bodyRequest}).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eq('success')
            expect(response.body.message).to.eq("Successfully! Record has been added.")
            expect(response.body.data.name).to.eq("deneme1")
            expect(response.body.data.salary).to.eq('600')
            expect(response.body.data.age).to.eq("23")
            

        })
       })
})
