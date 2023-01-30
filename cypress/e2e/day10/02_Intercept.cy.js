/// <reference types="cypress" />

describe('Intercept',()=>{

    it('Test',()=>{
        cy.visit('https://example.cypress.io/commands/waiting')
       // cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1') bu sekilde tamamini veya asagidaki gibi * ile de yapabiliriz.
       cy.intercept('GET','**/comments/*').as('getComment')
       //Networku dinle
       //as --> daha sonra @ isareti ile kullanmak uzere degisken atar
       //@getComment seklinde kullanacagiz
       //cypress'in default olarak 60 sn bekleme suresi var ama biz bu intercept 
       //kullanarak getcommets butonuna tiklanana kadar beklememizi saglıyor

       cy.get('.network-btn').click()
       cy.wait('@getComment').its('response').then((response)=>{
        console.log(response)

        assert.equal(response.statusCode,200,'Status Code Control')//bu sekilde mesaj da gonderebiliyoruz
       })
       

    })
   
})