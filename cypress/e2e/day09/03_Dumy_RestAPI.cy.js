/// <reference types="cypress" />

describe('Dumy Assert',()=>{

    it('Test01',()=>{
        cy.request('https://dummy.restapiexample.com/api/v1/employees')
        .should((response)=>{
    /*
          {
      "id": 10,
      "employee_name": "Sonya Frost",
      "employee_salary": 103600,
      "employee_age": 23,
      "profile_image": ""
    }
     */  
       assert.equal(response.status,200)
       assert.equal(response.body.data[9].id,10)
       assert.equal(response.body.data[9].employee_name,'Sonya Frost')
       assert.equal(response.body.data[9].employee_age,23)
       assert.equal(response.body.data[9].profile_image,'')
        })

    })
    
})